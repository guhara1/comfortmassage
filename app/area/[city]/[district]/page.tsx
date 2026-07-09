import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  allDistrictParams,
  getDistrict,
} from '@/lib/regions';

export const dynamicParams = false;

export function generateStaticParams() {
  return allDistrictParams();
}

type Params = { city: string; district: string };

const SITE = 'https://gandago-massage.com';

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
  const url = `${SITE}/area/${c.slug}/${d.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', siteName: '간다GO' },
  };
}

const USE_LINKS = [
  { href: '/use/hotel', label: '호텔·숙소', desc: '객실 정책과 프런트 확인 기준' },
  { href: '/use', label: '오피스텔', desc: '공동현관·관리규정 확인' },
  { href: '/use', label: '아파트', desc: '동·호수와 건물 출입 확인' },
  { href: '/use', label: '자택', desc: '정확한 주소와 진입 방법 확인' },
];

const PROGRAM_LINKS = [
  { href: '/program/swedish', label: '스웨디시' },
  { href: '/program', label: '아로마테라피' },
  { href: '/program', label: '타이마사지' },
  { href: '/program', label: '스포츠 마사지' },
];

const CHECK_LINKS = [
  { href: '/check/address', label: '주소 확인 기준' },
  { href: '/check', label: '예약 전 확인사항' },
  { href: '/contact', label: '전화·문의' },
];

export default async function DistrictPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city, district } = await params;
  const found = getDistrict(city, district);
  if (!found) notFound();
  const { region, city: c, district: d } = found;

  const siblings = c.districts.filter((x) => x.slug !== d.slug);

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `${c.name} ${d.name} 출장마사지·홈타이 안내`,
            description: `${c.name} ${d.name} 출장마사지·홈타이 예약 전 이용 기준과 프로그램 안내`,
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: '홈', item: SITE },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: region.name,
                  item: `${SITE}/region/${region.slug}`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: c.name,
                  item: `${SITE}/area/${c.slug}`,
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: d.name,
                  item: `${SITE}/area/${c.slug}/${d.slug}`,
                },
              ],
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-gray-600 mb-4">
            <a href="/" className="hover:text-orange-600">
              홈
            </a>
            {' > '}
            <a href={`/region/${region.slug}`} className="hover:text-orange-600">
              {region.name}
            </a>
            {' > '}
            <a href={`/area/${c.slug}`} className="hover:text-orange-600">
              {c.name}
            </a>
            {' > '}
            <span>{d.name}</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {c.name} {d.name} 출장마사지 안내
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            {region.name} {c.name} {d.name} 지역의 출장마사지·홈타이 예약 전
            확인 기준을 안내합니다. 호텔·오피스텔·아파트·자택 등 이용 장소별
            준비 사항과 스웨디시·아로마·타이 등 프로그램 선택 기준을 함께
            확인하세요.
          </p>
          <a
            href="tel:0508-202-4719"
            className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition"
          >
            전화예약 0508-202-4719
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {d.name} 이용 안내
          </h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              {c.name} {d.name}은(는) {region.name}에 속한 지역으로, 출장마사지·
              홈타이 예약 시 정확한 주소 확인과 건물 출입 방법 확인이
              중요합니다. 예약 전 상세 주소(동·호수), 건물명, 진입 경로를 미리
              준비하면 방문이 원활합니다.
            </p>
            <p>
              {d.name} 내 호텔·오피스텔·아파트·자택 등 이용 장소에 따라 확인해야
              할 사항이 다릅니다. 아래 이용 장소별 기준과 추천 프로그램을 참고해
              예약을 준비하세요.
            </p>
          </div>
        </div>
      </section>

      {/* Use types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {d.name} 이용 장소별 기준
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_LINKS.map((u, i) => (
              <a
                key={i}
                href={u.href}
                className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-orange-300 transition"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {u.label}
                </h3>
                <p className="text-gray-700">{u.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {d.name} 추천 프로그램
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PROGRAM_LINKS.map((p, i) => (
              <a
                key={i}
                href={p.href}
                className="block p-4 bg-orange-50 border border-orange-200 rounded-lg text-center hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-900">{p.label}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Check links */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            예약 전 확인
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CHECK_LINKS.map((ch, i) => (
              <a
                key={i}
                href={ch.href}
                className="block p-4 bg-white border border-gray-200 rounded hover:shadow-md hover:border-orange-300 transition text-center"
              >
                <p className="font-semibold text-gray-900">{ch.label}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sibling districts — internal linking */}
      {siblings.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {c.name} 다른 지역 안내
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {siblings.map((s) => (
                <a
                  key={s.slug}
                  href={`/area/${c.slug}/${s.slug}`}
                  className="block p-3 bg-white border border-gray-200 rounded hover:shadow-md hover:border-orange-300 transition text-center text-sm"
                >
                  <span className="font-medium text-gray-900">{s.name}</span>
                </a>
              ))}
            </div>
            <div className="mt-8">
              <a
                href={`/area/${c.slug}`}
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                ← {c.name} 전체 지역 보기
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
