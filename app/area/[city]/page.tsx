import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allCityParams, getCity } from '@/lib/regions';

export const dynamicParams = false;

export function generateStaticParams() {
  return allCityParams();
}

type Params = { city: string };

const SITE = 'https://gandago-massage.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city } = await params;
  const found = getCity(city);
  if (!found) return {};
  const { city: c } = found;
  const title = `${c.name} 출장마사지·홈타이 지역 안내 | 간다GO`;
  const description = `${c.name} 출장마사지·홈타이 예약 안내. ${c.districts.length}개 시·군·구별 이용 기준과 프로그램을 확인하세요.`;
  const url = `${SITE}/area/${c.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', siteName: '간다GO' },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city } = await params;
  const found = getCity(city);
  if (!found) notFound();
  const { region, city: c } = found;

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `${c.name} 출장마사지·홈타이 지역 안내`,
            description: `${c.name} ${c.districts.length}개 시·군·구별 출장마사지 이용 안내`,
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
            <span>{c.name}</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {c.name} 출장마사지 · 시·군·구별 안내
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            {c.name} {c.districts.length}개 시·군·구의 출장마사지·홈타이 이용
            기준을 지역별로 안내합니다. 아래에서 원하는 지역을 선택하면 해당
            지역 전용 안내 페이지로 이동합니다.
          </p>
          <a
            href="tel:0508-202-4719"
            className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition"
          >
            전화예약 0508-202-4719
          </a>
        </div>
      </section>

      {/* District grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {c.name} 지역 선택
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {c.districts.map((d) => (
              <a
                key={d.slug}
                href={`/area/${c.slug}/${d.slug}`}
                className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-orange-300 transition text-center"
              >
                <span className="font-semibold text-gray-900">{d.name}</span>
                <span className="block text-xs text-gray-500 mt-1">
                  출장마사지 안내
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Use / program info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {c.name} 이용 기준
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/use/hotel"
              className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-2">호텔·숙소</h3>
              <p className="text-gray-700">객실 정책 확인 필수.</p>
            </a>
            <a
              href="/use"
              className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-2">오피스텔</h3>
              <p className="text-gray-700">공동현관·관리규정 확인.</p>
            </a>
            <a
              href="/program"
              className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-2">프로그램</h3>
              <p className="text-gray-700">스웨디시·아로마·타이 선택 기준.</p>
            </a>
            <a
              href="/check/address"
              className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-2">주소 확인</h3>
              <p className="text-gray-700">동·호수와 건물 출입 확인.</p>
            </a>
          </div>
          <div className="mt-8">
            <a
              href={`/region/${region.slug}`}
              className="text-orange-600 hover:text-orange-700 font-semibold"
            >
              ← {region.name} 전체 보기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
