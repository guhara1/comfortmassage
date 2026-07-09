'use client';

export default function BusanPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '부산 출장마사지｜해운대·서면·광안리 생활권 안내',
            description:
              '부산 출장마사지 해운대·서면·광안리 생활권, 호텔·리조트·오피스텔 이용 기준을 안내합니다.',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: '홈', item: 'https://gandago-massage.com' },
                { '@type': 'ListItem', position: 2, name: '영남권', item: 'https://gandago-massage.com/region/yeongnam' },
                { '@type': 'ListItem', position: 3, name: '부산', item: 'https://gandago-massage.com/area/busan' },
              ],
            },
          }),
        }}
      />

      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-gray-600 mb-4">
            <a href="/" className="hover:text-orange-600">홈</a> {' > '}
            <a href="/region/yeongnam" className="hover:text-orange-600">영남권</a> {' > '}
            <span>부산</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            부산 출장마사지 · 해운대·서면·광안리 생활권 안내
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            부산 해운대·서면·광안리의 주요 생활권, 호텔·리조트·오피스텔 이용 기준을 안내합니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">인기 생활권</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['해운대', '서면', '광안리', '중앙동'].map((zone) => (
              <div key={zone} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-orange-600 mb-2">{zone}</h3>
                <p className="text-gray-600">관광·해안 숙소·상업시설</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">부산 이용 기준</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">해운대·센텀</h3>
              <p className="text-gray-700">호텔, 리조트, 주상복합 숙소. 객실 정책 확인 필수.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">서면·부산역</h3>
              <p className="text-gray-700">오피스텔, 상업시설. 관리규정과 시간대 확인.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">광안리</h3>
              <p className="text-gray-700">관광 숙소, 펜션, 카페. 야간 방문 시 진입 확인.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">접근성</h3>
              <p className="text-gray-700">주차 가능 여부, 대중교통 이용 시간 확인.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
