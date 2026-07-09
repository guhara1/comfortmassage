import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allCityParams, getCity } from '@/lib/regions';
import { PROGRAMS, USES, CHECKS } from '@/lib/cityMenu';
import {
  cityHasAreaGroups,
  SEOUL_AREA_GROUPS,
  SEOUL_TOP_LIFE_ZONES,
} from '@/lib/seoul';
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
  const title = `${c.name} 출장마사지 · 지역별 생활권과 마사지 프로그램 안내 | 간다GO`;
  const description = `${c.name} 출장마사지·홈타이 예약 안내. 지역·생활권·프로그램·이용 장소·예약 전 확인 기준을 한눈에.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${c.slug}` },
    openGraph: { title, description, url: `${SITE}/${c.slug}`, type: 'website', siteName: '간다GO' },
  };
}

export default async function CityHome({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city } = await params;
  const found = getCity(city);
  if (!found) notFound();
  const { region, city: c } = found;
  const base = `/${c.slug}`;
  const hasAreaGroups = cityHasAreaGroups(c.slug);

  const crumbs = [
    { name: '홈', href: '/' },
    { name: region.name, href: `/region/${region.slug}` },
    { name: c.name },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `${c.name} 출장마사지 안내`,
          description: `${c.name} 지역별 생활권과 마사지 프로그램 안내`,
          breadcrumb: breadcrumbSchema(crumbs),
        }}
      />

      <Hero
        crumbs={crumbs}
        title={`${c.name} 출장마사지 · 지역별 생활권과 마사지 프로그램 안내`}
        desc={`${c.name}의 출장마사지·홈타이 예약 전 확인 기준을 지역·생활권·프로그램·이용 장소별로 안내합니다. 원하는 항목을 선택해 상세 안내를 확인하세요.`}
      />

      {/* 1단: 지역 (서울=5대 권역 / 그 외=구 전체보기) */}
      <Section>
        {hasAreaGroups ? (
          <LinkGrid
            title={`${c.name} 5대 권역`}
            cols={5}
            cards={SEOUL_AREA_GROUPS.map((g) => ({
              href: `${base}/area/${g.slug}`,
              label: g.name,
            }))}
          />
        ) : (
          <LinkGrid
            title={`${c.name} 지역 선택`}
            cols={5}
            cards={c.districts.map((d) => ({
              href: `${base}/gu/${d.slug}`,
              label: d.name,
            }))}
          />
        )}
        <div className="mt-6">
          <a href={`${base}/gu`} className="text-orange-600 hover:text-orange-700 font-semibold">
            {c.name} 시·군·구 전체보기 →
          </a>
        </div>
      </Section>

      {/* 2단: 인기 생활권 (서울만) */}
      {hasAreaGroups && (
        <Section tone="gray">
          <LinkGrid
            title="인기 생활권"
            cols={4}
            cards={SEOUL_TOP_LIFE_ZONES.map((z) => ({
              href: `${base}/life/${z.slug}`,
              label: z.name,
            }))}
          />
          <div className="mt-6">
            <a href={`${base}/life`} className="text-orange-600 hover:text-orange-700 font-semibold">
              생활권 전체보기 →
            </a>
          </div>
        </Section>
      )}

      {/* 3단: 마사지 프로그램 */}
      <Section tone={hasAreaGroups ? 'white' : 'gray'}>
        <LinkGrid
          title="마사지 프로그램"
          cols={4}
          tone="orange"
          cards={PROGRAMS.slice(0, 8).map((p) => ({
            href: `${base}/program/${p.slug}`,
            label: p.name,
          }))}
        />
        <div className="mt-6">
          <a href={`${base}/program`} className="text-orange-600 hover:text-orange-700 font-semibold">
            프로그램 전체보기 →
          </a>
        </div>
      </Section>

      {/* 4단: 이용 장소 */}
      <Section tone={hasAreaGroups ? 'gray' : 'white'}>
        <LinkGrid
          title="이용 장소"
          cols={4}
          cards={USES.slice(0, 8).map((u) => ({
            href: `${base}/use/${u.slug}`,
            label: u.name,
          }))}
        />
        <div className="mt-6">
          <a href={`${base}/use`} className="text-orange-600 hover:text-orange-700 font-semibold">
            이용 장소 전체보기 →
          </a>
        </div>
      </Section>

      {/* 5단: 예약 전 확인 */}
      <Section tone={hasAreaGroups ? 'white' : 'gray'}>
        <LinkGrid
          title="예약 전 확인"
          cols={4}
          cards={CHECKS.slice(0, 8).map((ch) => ({
            href: `${base}/check/${ch.slug}`,
            label: ch.name,
          }))}
        />
        <div className="mt-6">
          <a href={`${base}/check`} className="text-orange-600 hover:text-orange-700 font-semibold">
            예약 전 확인 전체보기 →
          </a>
        </div>
      </Section>
    </main>
  );
}
