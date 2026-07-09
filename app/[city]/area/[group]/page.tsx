import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCity } from '@/lib/regions';
import { SEOUL_AREA_GROUPS, getAreaGroup } from '@/lib/seoul';
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
  // 서울만 5대 권역 페이지 생성
  return SEOUL_AREA_GROUPS.map((g) => ({ city: 'seoul', group: g.slug }));
}

type Params = { city: string; group: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city, group } = await params;
  const found = getCity(city);
  const g = getAreaGroup(group);
  if (!found || !g) return {};
  const { city: c } = found;
  const title = `${c.name} ${g.name} 출장마사지 안내 | 간다GO`;
  const description = `${c.name} ${g.name} 출장마사지·홈타이 안내. 권역 내 구와 생활권별 이용 기준을 안내합니다.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${c.slug}/area/${g.slug}` },
    openGraph: { title, description, url: `${SITE}/${c.slug}/area/${g.slug}`, type: 'website', siteName: '간다GO' },
  };
}

export default async function AreaGroupPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city, group } = await params;
  const found = getCity(city);
  const g = getAreaGroup(group);
  if (!found || !g) notFound();
  const { region, city: c } = found;
  const base = `/${c.slug}`;

  const districtCards = g.districts
    .map((slug) => c.districts.find((d) => d.slug === slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))
    .map((d) => ({ href: `${base}/gu/${d.slug}`, label: d.name }));

  const crumbs = [
    { name: '홈', href: '/' },
    { name: region.name, href: `/region/${region.slug}` },
    { name: c.name, href: base },
    { name: '지역안내', href: `${base}/gu` },
    { name: g.name },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `${c.name} ${g.name} 출장마사지 안내`,
          breadcrumb: breadcrumbSchema(crumbs),
        }}
      />
      <Hero
        crumbs={crumbs}
        title={`${c.name} ${g.name} 출장마사지 안내`}
        desc={`${c.name} ${g.name}에 속한 구와 생활권별 출장마사지·홈타이 이용 안내입니다.`}
      />

      <Section>
        <LinkGrid title="권역 내 구" cols={4} cards={districtCards} />
      </Section>

      <Section tone="gray">
        <LinkGrid
          title="생활권"
          cols={4}
          tone="orange"
          cards={g.lifeZones.map((z) => ({
            href: `${base}/life/${z.slug}`,
            label: z.name,
          }))}
        />
      </Section>

      <Section>
        <LinkGrid
          title="서울 5대 권역"
          cols={5}
          cards={SEOUL_AREA_GROUPS.map((x) => ({
            href: `${base}/area/${x.slug}`,
            label: x.name,
          }))}
        />
      </Section>
    </main>
  );
}
