'use client';

export default function UsePage() {
  const facilities = [
    {
      title: '자택',
      href: '/use/home',
      desc: '개인 주택 방문 시 확인사항',
      checks: ['도로 진입 가능', '건물 구조', '엘리베이터 여부', '주차 가능'],
    },
    {
      title: '호텔·숙소',
      href: '/use/hotel',
      desc: '호텔 및 숙소 이용 정책 확인',
      checks: ['객실 정책', '프런트 확인', '추가 요금', '야간 출입'],
    },
    {
      title: '오피스텔',
      href: '/use/officetel',
      desc: '오피스텔 공동현관 및 관리규정',
      checks: ['공동현관', '경비실', '관리규정', '방문 시간'],
    },
    {
      title: '아파트',
      href: '/use/apartment',
      desc: '아파트 단지 진입 및 출입 확인',
      checks: ['단지 진입', '방문자 출입', '엘리베이터', '주차'],
    },
    {
      title: '업무지구',
      href: '/use/business',
      desc: '업무지구·오피스 센터 이용 기준',
      checks: ['시간 제한', '보안 확인', '주차', '엘리베이터'],
    },
    {
      title: '역세권',
      href: '/use/station',
      desc: '역세권·터미널 인근 숙소',
      checks: ['접근성', '상업시설 규정', '소음', '주차'],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: '이용 장소별 확인 기준',
            description:
              '출장마사지 이용 장소별 예약 전 확인사항을 안내합니다.',
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
            <span>이용 장소</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            이용 장소별 확인 기준
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            방문할 장소의 특성에 따라 확인해야 할 사항들을 안내합니다.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <a
                key={facility.title}
                href={facility.href}
                className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-orange-300 transition"
              >
                <h2 className="text-2xl font-bold text-orange-600 mb-3">
                  {facility.title}
                </h2>
                <p className="text-gray-700 mb-4">{facility.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {facility.checks.map((check) => (
                    <span
                      key={check}
                      className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded text-sm"
                    >
                      {check}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* General Guidelines */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            모든 장소에서 확인해야 할 사항
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: '진입 가능성',
                desc: '실제로 방문 가능한 위치인지 확인',
              },
              { title: '개인정보', desc: '개인정보 처리 방식 확인' },
              {
                title: '예약 시간',
                desc: '예약 가능 시간대 확인',
              },
              {
                title: '이용 요금',
                desc: '명시된 요금과 추가 요금 확인',
              },
              {
                title: '취소 정책',
                desc: '취소 및 변경 정책 확인',
              },
              {
                title: '안전',
                desc: '안전한 방문 경로 확인',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white border border-gray-200 rounded-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
