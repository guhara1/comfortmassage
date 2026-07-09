import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCity } from '@/lib/regions';
import { SEOUL_LIFE_ZONES, SEOUL_AREA_GROUPS, getLifeZone } from '@/lib/seoul';
import { PROGRAMS, USES, CHECKS } from '@/lib/cityMenu';
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
  return SEOUL_LIFE_ZONES.map((z) => ({ city: 'seoul', zone: z.slug }));
}

type Params = { city: string; zone: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city, zone } = await params;
  const found = getCity(city);
  const z = getLifeZone(zone);
  if (!found || !z) return {};
  const { city: c } = found;
  const title = `${z.name} 출장마사지·홈타이 안내 | ${c.name} 간다GO`;
  const description = `${c.name} ${z.name} 출장마사지·홈타이 예약 안내. 호텔·오피스텔·자택 이용 기준과 프로그램을 안내합니다.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${c.slug}/life/${z.slug}` },
    openGraph: { title, description, url: `${SITE}/${c.slug}/life/${z.slug}`, type: 'website', siteName: '간다GO' },
  };
}

export default async function LifeZonePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city, zone } = await params;
  const found = getCity(city);
  const z = getLifeZone(zone);
  if (!found || !z) notFound();
  const { region, city: c } = found;
  const base = `/${c.slug}`;
  const group = SEOUL_AREA_GROUPS.find((g) =>
    g.lifeZones.some((l) => l.slug === z.slug)
  );
  const siblings = group
    ? group.lifeZones.filter((l) => l.slug !== z.slug)
    : [];

  const crumbs = [
    { name: '홈', href: '/' },
    { name: region.name, href: `/region/${region.slug}` },
    { name: c.name, href: base },
    { name: '생활권 안내', href: `${base}/life` },
    { name: z.name },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `${c.name} ${z.name} 출장마사지·홈타이 안내`,
          breadcrumb: breadcrumbSchema(crumbs),
        }}
      />
      <Hero
        crumbs={crumbs}
        title={`${z.name} 출장마사지 안내`}
        desc={`${c.name} ${z.name} 생활권의 출장마사지·홈타이 예약 전 확인 기준입니다. 호텔·오피스텔·자택 등 이용 장소와 프로그램을 함께 확인하세요.`}
      />

      <Section>
        <div className="prose max-w-none text-gray-700 space-y-4">
          <p>
            {z.name}은(는) {c.name}
            {group ? ` ${group.name}` : ''}의 주요 생활권으로, 출장마사지·
            홈타이 검색이 활발한 지역입니다. 예약 시 정확한 주소와 건물 출입
            방법을 준비하면 원활하게 이용할 수 있습니다.
          </p>
        </div>
      </Section>

      <Section tone="gray">
        <LinkGrid
          title="이용 장소"
          cols={4}
          cards={USES.slice(0, 8).map((u) => ({
            href: `${base}/use/${u.slug}`,
            label: u.name,
          }))}
        />
      </Section>

      <Section>
        <LinkGrid
          title="추천 프로그램"
          cols={4}
          tone="orange"
          cards={PROGRAMS.slice(0, 8).map((p) => ({
            href: `${base}/program/${p.slug}`,
            label: p.name,
          }))}
        />
      </Section>

      <Section tone="gray">
        <LinkGrid
          title="예약 전 확인"
          cols={4}
          cards={CHECKS.slice(0, 8).map((ch) => ({
            href: `${base}/check/${ch.slug}`,
            label: ch.name,
          }))}
        />
      </Section>

      {siblings.length > 0 && (
        <Section>
          <LinkGrid
            title={group ? `${group.name} 다른 생활권` : '다른 생활권'}
            cols={4}
            cards={siblings.map((s) => ({
              href: `${base}/life/${s.slug}`,
              label: s.name,
            }))}
          />
          <div className="mt-6">
            <a href={`${base}/life`} className="text-orange-600 hover:text-orange-700 font-semibold">
              ← {c.name} 생활권 전체보기
            </a>
          </div>
        </Section>
      )}
    </main>
  );
}
