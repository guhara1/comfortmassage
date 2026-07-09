import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCity } from '@/lib/regions';
import { SEOUL_AREA_GROUPS } from '@/lib/seoul';
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
  return [{ city: 'seoul' }];
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
  const title = `${c.name} 생활권별 출장마사지 안내 | 간다GO`;
  const description = `${c.name} 생활권별 출장마사지·홈타이 안내. 강남역·잠실·홍대·여의도·성수 등 생활권별 이용 기준을 안내합니다.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${c.slug}/life` },
    openGraph: { title, description, url: `${SITE}/${c.slug}/life`, type: 'website', siteName: '간다GO' },
  };
}

export default async function LifeIndex({
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
    { name: '생활권 안내' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `${c.name} 생활권별 출장마사지 안내`,
          breadcrumb: breadcrumbSchema(crumbs),
        }}
      />
      <Hero
        crumbs={crumbs}
        title={`${c.name} 생활권별 출장마사지 안내`}
        desc={`${c.name} 생활권별 출장마사지·홈타이 이용 안내입니다. 권역별 대표 생활권을 선택해 상세 안내를 확인하세요.`}
      />
      {SEOUL_AREA_GROUPS.map((g) => (
        <Section key={g.slug} tone={SEOUL_AREA_GROUPS.indexOf(g) % 2 ? 'gray' : 'white'}>
          <LinkGrid
            title={g.name}
            cols={4}
            tone="orange"
            cards={g.lifeZones.map((z) => ({
              href: `${base}/life/${z.slug}`,
              label: z.name,
            }))}
          />
        </Section>
      ))}
    </main>
  );
}
