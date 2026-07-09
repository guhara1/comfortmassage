'use client';

export default function JejuRegionPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '제주 출장마사지｜제주시·서귀포·중문·공항 홈타이 안내',
            description: '제주 출장마사지·홈타이 예약 전 제주시, 서귀포, 관광 숙소의 이용 기준을 안내합니다.',
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
            <span>제주권</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            제주 출장마사지 · 제주시·서귀포 관광 숙소 안내
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            제주는 공항, 렌터카 이동, 리조트, 펜션, 독채 숙소, 해안 숙소 기준으로
            구성됩니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            주요 지역
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['제주시', '제주공항', '서귀포', '중문'].map((city) => (
              <div
                key={city}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-orange-600 mb-2">
                  {city}
                </h3>
                <p className="text-gray-600">리조트·펜션·해안 숙소</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
