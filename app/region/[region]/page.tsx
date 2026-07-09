import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getRegion, regions } from '@/lib/regions';

export const dynamicParams = false;

export function generateStaticParams() {
  return regions.map((r) => ({ region: r.slug }));
}

type Params = { region: string };

const SITE = 'https://gandago-massage.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { region } = await params;
  const r = getRegion(region);
  if (!r) return {};
  const title = `${r.name} 출장마사지·홈타이 지역 안내 | 간다GO`;
  const description = `${r.name} 출장마사지·홈타이 예약 안내. ${r.summary} 등 시·군·구별 이용 기준과 프로그램을 확인하세요.`;
  const url = `${SITE}/region/${r.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', siteName: '간다GO' },
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { region } = await params;
  const r = getRegion(region);
  if (!r) notFound();

  const totalDistricts = r.cities.reduce(
    (sum, c) => sum + c.districts.length,
    0
  );

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `${r.name} 출장마사지·홈타이 지역 안내`,
            description: `${r.name} ${r.summary} 시·군·구별 출장마사지 이용 안내`,
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: '홈', item: SITE },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: r.name,
                  item: `${SITE}/region/${r.slug}`,
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
            <a href="/region" className="hover:text-orange-600">
              지역별 안내
            </a>
            {' > '}
            <span>{r.name}</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {r.name} 출장마사지 · 지역 안내
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            {r.name}({r.summary})의 출장마사지·홈타이 이용 기준을 시·도 및
            시·군·구별로 안내합니다. 총 {totalDistricts}개 지역의 전용 페이지를
            제공합니다.
          </p>
          <a
            href="tel:0508-202-4719"
            className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition"
          >
            전화예약 0508-202-4719
          </a>
        </div>
      </section>

      {/* Cities & districts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {r.cities.map((c) => (
            <div key={c.slug}>
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  <a
                    href={`/area/${c.slug}`}
                    className="hover:text-orange-600 transition"
                  >
                    {c.name}
                  </a>
                </h2>
                <a
                  href={`/area/${c.slug}`}
                  className="text-sm text-orange-600 hover:text-orange-700 font-semibold"
                >
                  {c.name} 전체 보기 →
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {c.districts.map((d) => (
                  <a
                    key={d.slug}
                    href={`/area/${c.slug}/${d.slug}`}
                    className="block p-3 bg-white border border-gray-200 rounded hover:shadow-md hover:border-orange-300 transition text-center text-sm"
                  >
                    <span className="font-medium text-gray-900">{d.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related links */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">관련 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/program"
              className="block p-4 bg-white border border-gray-200 rounded hover:shadow-md text-center"
            >
              <p className="font-semibold text-gray-900">마사지 프로그램</p>
            </a>
            <a
              href="/use"
              className="block p-4 bg-white border border-gray-200 rounded hover:shadow-md text-center"
            >
              <p className="font-semibold text-gray-900">이용 장소별 기준</p>
            </a>
            <a
              href="/check"
              className="block p-4 bg-white border border-gray-200 rounded hover:shadow-md text-center"
            >
              <p className="font-semibold text-gray-900">예약 전 확인</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
