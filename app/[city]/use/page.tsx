import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allCityParams, getCity } from '@/lib/regions';
import { USES } from '@/lib/cityMenu';
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
  const title = `${c.name} 이용 장소별 출장마사지 안내 | 간다GO`;
  const description = `${c.name} 출장마사지 이용 장소 안내. 자택·호텔·오피스텔·아파트·업무지구별 확인 기준을 안내합니다.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${c.slug}/use` },
    openGraph: { title, description, url: `${SITE}/${c.slug}/use`, type: 'website', siteName: '간다GO' },
  };
}

export default async function UseIndex({
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
    { name: '이용 장소' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `${c.name} 이용 장소별 출장마사지 안내`,
          breadcrumb: breadcrumbSchema(crumbs),
        }}
      />
      <Hero
        crumbs={crumbs}
        title={`${c.name} 이용 장소별 안내`}
        desc={`${c.name} 출장마사지 이용 장소별 확인 기준을 안내합니다. 자택·호텔·오피스텔·아파트 등 장소를 선택하세요.`}
      />
      <Section>
        <LinkGrid
          cols={4}
          cards={USES.map((u) => ({
            href: `${base}/use/${u.slug}`,
            label: u.name,
            desc: u.desc,
          }))}
        />
      </Section>
    </main>
  );
}
