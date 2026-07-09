import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allCityParams, getCity } from '@/lib/regions';
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
  const title = `${c.name} 시·군·구별 출장마사지 안내 | 간다GO`;
  const description = `${c.name} ${c.districts.length}개 시·군·구별 출장마사지·홈타이 이용 기준을 지역별로 안내합니다.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${c.slug}/gu` },
    openGraph: { title, description, url: `${SITE}/${c.slug}/gu`, type: 'website', siteName: '간다GO' },
  };
}

export default async function GuIndex({
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
    { name: '시·군·구 전체' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `${c.name} 시·군·구별 출장마사지 안내`,
          breadcrumb: breadcrumbSchema(crumbs),
        }}
      />
      <Hero
        crumbs={crumbs}
        title={`${c.name} 시·군·구별 출장마사지 안내`}
        desc={`${c.name} ${c.districts.length}개 시·군·구의 출장마사지·홈타이 이용 안내입니다. 지역을 선택하면 전용 안내 페이지로 이동합니다.`}
      />
      <Section>
        <LinkGrid
          cols={5}
          cards={c.districts.map((d) => ({
            href: `${base}/gu/${d.slug}`,
            label: d.name,
          }))}
        />
      </Section>
    </main>
  );
}
