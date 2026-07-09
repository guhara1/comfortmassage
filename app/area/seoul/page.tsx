'use client';

export default function SeoulPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '서울 출장마사지｜강남·강북·종로·중구 생활권 안내',
            description:
              '서울 출장마사지 25개 구별 생활권, 호텔·오피스텔·아파트 이용 기준을 안내합니다.',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: '홈',
                  item: 'https://gandago-massage.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: '수도권',
                  item: 'https://gandago-massage.com/region/capital',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: '서울',
                  item: 'https://gandago-massage.com/area/seoul',
                },
              ],
            },
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
            <a href="/region/capital" className="hover:text-orange-600">
              수도권
            </a>
            {' > '}
            <span>서울</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            서울 출장마사지 · 강남·강북·종로 생활권 안내
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            서울 25개 구의 주요 생활권, 호텔·오피스텔·아파트 이용 기준을
            안내합니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            인기 생활권
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              '강남·역삼',
              '잠실·송파',
              '홍대·합정',
              '여의도·영등포',
              '종로·중구',
              '강북',
            ].map((zone) => (
              <div
                key={zone}
                className="p-4 bg-white border border-gray-200 rounded hover:shadow-md hover:border-orange-300 transition text-center"
              >
                <p className="font-semibold text-gray-900">{zone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            서울 이용 기준
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                호텔·숙소
              </h3>
              <p className="text-gray-700">
                강남, 강북 주요 호텔·숙소. 객실 정책 확인 필수.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                오피스텔
              </h3>
              <p className="text-gray-700">
                강남역, 홍대, 건대 등 주요 오피스텔. 관리규정 확인.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                아파트
              </h3>
              <p className="text-gray-700">
                전역 주택 방문 가능. 주소와 건물 출입 확인.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                시간대
              </h3>
              <p className="text-gray-700">
                야간·심야 예약 가능. 접근성과 이동 거리 확인.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
