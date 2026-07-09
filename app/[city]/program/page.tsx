import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allCityParams, getCity } from '@/lib/regions';
import { PROGRAMS } from '@/lib/cityMenu';
import {
  SITE,
  Hero,
  Section,
  LinkGrid,
  SchemaScript,
  breadcrumbSchema,
} from '@/components/PageParts';

export const dynamicParams = false;

export function generateStaticParams() {
  return allCityParams();
}

type Params = { city: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city } = await params;
  const found = getCity(city);
  if (!found) return {};
  const { city: c } = found;
  const title = `${c.name} 마사지 프로그램 안내 | 간다GO`;
  const description = `${c.name} 출장마사지 프로그램 안내. 스웨디시·아로마·타이·스포츠·딥티슈 등 프로그램별 특징을 확인하세요.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${c.slug}/program` },
    openGraph: { title, description, url: `${SITE}/${c.slug}/program`, type: 'website', siteName: '간다GO' },
  };
}

export default async function ProgramIndex({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city } = await params;
  const found = getCity(city);
  if (!found) notFound();
  const { region, city: c } = found;
  const base = `/${c.slug}`;

  const crumbs = [
    { name: '홈', href: '/' },
    { name: region.name, href: `/region/${region.slug}` },
    { name: c.name, href: base },
    { name: '마사지 프로그램' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `${c.name} 마사지 프로그램 안내`,
          breadcrumb: breadcrumbSchema(crumbs),
        }}
      />
      <Hero
        crumbs={crumbs}
        title={`${c.name} 마사지 프로그램 안내`}
        desc={`${c.name} 출장마사지 프로그램을 안내합니다. 원하는 프로그램을 선택해 특징과 이용 기준을 확인하세요.`}
      />
      <Section>
        <LinkGrid
          cols={4}
          tone="orange"
          cards={PROGRAMS.map((p) => ({
            href: `${base}/program/${p.slug}`,
            label: p.name,
            desc: p.desc,
          }))}
        />
      </Section>
    </main>
  );
}
