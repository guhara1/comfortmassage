import type { Metadata } from 'next';
import { regions } from '@/lib/regions';

const SITE = 'https://gandago-massage.com';

export const metadata: Metadata = {
  title: '전국 지역별 출장마사지·홈타이 안내 | 간다GO',
  description:
    '전국 6개 권역, 시·도, 시·군·구별 출장마사지·홈타이 이용 안내. 지역을 선택해 전용 안내 페이지를 확인하세요.',
  alternates: { canonical: `${SITE}/region` },
};

export default function RegionIndexPage() {
  const totalCities = regions.reduce((s, r) => s + r.cities.length, 0);
  const totalDistricts = regions.reduce(
    (s, r) => s + r.cities.reduce((s2, c) => s2 + c.districts.length, 0),
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
            name: '전국 지역별 출장마사지·홈타이 안내',
            description: '전국 6개 권역·시·도·시·군·구별 출장마사지 이용 안내',
          }),
        }}
      />

      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-gray-600 mb-4">
            <a href="/" className="hover:text-orange-600">
              홈
            </a>
            {' > '}
            <span>지역별 안내</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            전국 지역별 출장마사지 안내
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            전국 6개 권역, {totalCities}개 시·도, {totalDistricts}개 시·군·구별
            출장마사지·홈타이 이용 기준을 안내합니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((r) => (
              <a
                key={r.slug}
                href={`/region/${r.slug}`}
                className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-orange-300 transition"
              >
                <h2 className="text-2xl font-bold text-orange-600 mb-2">
                  {r.name}
                </h2>
                <p className="text-gray-600 mb-3">{r.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {r.cities.map((c) => (
                    <span
                      key={c.slug}
                      className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded"
                    >
                      {c.name}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
