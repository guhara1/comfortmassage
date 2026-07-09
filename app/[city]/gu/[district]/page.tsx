import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allDistrictParams, getDistrict } from '@/lib/regions';
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
  return allDistrictParams();
}

type Params = { city: string; district: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city, district } = await params;
  const found = getDistrict(city, district);
  if (!found) return {};
  const { city: c, district: d } = found;
  const title = `${c.name} ${d.name} 출장마사지·홈타이 안내 | 간다GO`;
  const description = `${c.name} ${d.name} 출장마사지·홈타이 예약 전 호텔·오피스텔·자택 이용 기준과 스웨디시·아로마·타이 프로그램을 안내합니다.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${c.slug}/gu/${d.slug}` },
    openGraph: { title, description, url: `${SITE}/${c.slug}/gu/${d.slug}`, type: 'website', siteName: '간다GO' },
  };
}

export default async function DistrictPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city, district } = await params;
  const found = getDistrict(city, district);
  if (!found) notFound();
  const { region, city: c, district: d } = found;
  const base = `/${c.slug}`;
  const siblings = c.districts.filter((x) => x.slug !== d.slug);

  const crumbs = [
    { name: '홈', href: '/' },
    { name: region.name, href: `/region/${region.slug}` },
    { name: c.name, href: base },
    { name: d.name },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `${c.name} ${d.name} 출장마사지·홈타이 안내`,
          description: `${c.name} ${d.name} 출장마사지·홈타이 예약 전 이용 기준과 프로그램 안내`,
          breadcrumb: breadcrumbSchema(crumbs),
        }}
      />

      <Hero
        crumbs={crumbs}
        title={`${c.name} ${d.name} 출장마사지 안내`}
        desc={`${region.name} ${c.name} ${d.name} 지역의 출장마사지·홈타이 예약 전 확인 기준입니다. 호텔·오피스텔·아파트·자택 등 이용 장소와 프로그램을 함께 확인하세요.`}
      />

      <Section>
        <div className="prose max-w-none text-gray-700 space-y-4">
          <p>
            {c.name} {d.name}은(는) {region.name}에 속한 지역으로, 출장마사지·
            홈타이 예약 시 정확한 주소(동·호수)와 건물 출입 방법 확인이
            중요합니다. 예약 전 상세 주소와 진입 경로를 준비하면 방문이
            원활합니다.
          </p>
          <p>
            {d.name} 내 호텔·오피스텔·아파트·자택 등 이용 장소에 따라 확인
            사항이 다릅니다. 아래 이용 장소별 기준과 추천 프로그램을 참고하세요.
          </p>
        </div>
      </Section>

      <Section tone="gray">
        <LinkGrid
          title={`${d.name} 이용 장소`}
          cols={4}
          cards={USES.slice(0, 8).map((u) => ({
            href: `${base}/use/${u.slug}`,
            label: u.name,
          }))}
        />
      </Section>

      <Section>
        <LinkGrid
          title={`${d.name} 추천 프로그램`}
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
            title={`${c.name} 다른 지역 안내`}
            cols={5}
            cards={siblings.map((s) => ({
              href: `${base}/gu/${s.slug}`,
              label: s.name,
            }))}
          />
          <div className="mt-6">
            <a href={`${base}/gu`} className="text-orange-600 hover:text-orange-700 font-semibold">
              ← {c.name} 전체 지역 보기
            </a>
          </div>
        </Section>
      )}
    </main>
  );
}
