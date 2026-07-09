'use client';

export default function YeongnameRegionPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '영남권 출장마사지｜부산·대구·울산·창원·김해 홈타이 안내',
            description: '영남권 출장마사지·홈타이 예약 전 부산, 대구, 창원, 김해의 이용 기준을 안내합니다.',
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
            <span>영남권</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            영남권 출장마사지 · 부산·대구·창원·김해 생활권 안내
          </h1>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">핵심 지역</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['부산', '대구', '울산', '창원'].map((city) => (
              <div
                key={city}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-orange-600 mb-2">
                  {city}
                </h3>
                <p className="text-gray-600">해안·신도시·산업단지 기준</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
