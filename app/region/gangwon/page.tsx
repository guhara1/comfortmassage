'use client';

export default function GangwonRegionPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '강원권 출장마사지｜춘천·원주·강릉·속초 홈타이 안내',
            description: '강원권 출장마사지·홈타이 예약 전 춘천, 원주, 강릉, 속초의 관광 숙소 기준을 안내합니다.',
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
            <span>강원권</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            강원권 출장마사지 · 춘천·원주·강릉·속초 생활권 안내
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            강원권은 도심형보다 관광 숙소, 펜션, 리조트, 외곽 이동, 야간 이동
            기준이 중요합니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            관광 지역
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['강릉', '속초', '원주', '춘천'].map((city) => (
              <div
                key={city}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-orange-600 mb-2">
                  {city}
                </h3>
                <p className="text-gray-600">관광·숙소·리조트 기준</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
