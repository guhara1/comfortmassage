'use client';

export default function ChungcheongRegionPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '충청권 출장마사지｜대전·세종·천안·청주 홈타이 안내',
            description:
              '충청권 출장마사지·홈타이 예약 전 대전, 세종, 천안, 청주의 이용 기준과 산업단지, 신도시 중심 생활권을 안내합니다.',
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
            <span>충청권</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            충청권 출장마사지 · 대전·세종·천안·청주 생활권 안내
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            충청권은 대전·세종·천안·청주를 1차 핵심으로 잡고, 산업단지·행정도시·대학가·신도시·출장
            숙소 기준으로 구성됩니다.
          </p>
        </div>
      </section>

      {/* Main Cities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">핵심 지역</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['대전', '세종', '천안', '청주'].map((city) => (
              <div
                key={city}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-orange-600 mb-2">
                  {city}
                </h3>
                <p className="text-gray-600">
                  산업·신도시·호텔 숙소 기준
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">주변 지역</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['아산', '충주', '서산', '당진', '공주', '논산'].map((city) => (
              <div
                key={city}
                className="p-4 bg-white border border-gray-200 rounded hover:shadow-md text-center"
              >
                <p className="font-semibold text-gray-900">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            충청권 이용 특징
          </h2>
          <div className="space-y-4">
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                행정도시 특징
              </h3>
              <p className="text-gray-700">
                세종은 행정도시 특성상 출장 숙소, 신도시 생활권 중심.
              </p>
            </div>
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                산업단지 지역
              </h3>
              <p className="text-gray-700">
                천안·아산은 산업단지 주변 숙소 이용 기준 중요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
