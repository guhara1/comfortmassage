'use client';

export default function CheckPage() {
  const checks = [
    {
      title: '주소 확인 기준',
      href: '/check/address',
      desc: '건물명, 동·호수, 상세주소 확인 방법',
    },
    {
      title: '건물 출입 확인',
      href: '/check/building-access',
      desc: '공동현관, 엘리베이터, 경비실 확인',
    },
    {
      title: '아파트 출입 기준',
      href: '/check/apartment-access',
      desc: '단지 구조, 방문자 출입 방식 확인',
    },
    {
      title: '호텔 정책 확인',
      href: '/check/hotel-policy',
      desc: '객실 정책, 프런트 확인 방식',
    },
    {
      title: '오피스텔 규정',
      href: '/check/officetel-rule',
      desc: '공동현관, 관리규정, 방문 시간대',
    },
    {
      title: '예약 가능 시간',
      href: '/check/time',
      desc: '야간 예약, 심야 예약 가능 여부',
    },
    {
      title: '예약 변경 정책',
      href: '/check/change-policy',
      desc: '취소, 변경, 환불 기준',
    },
    {
      title: '개인정보 처리',
      href: '/check/privacy',
      desc: '수집 정보, 보관 기간, 처리 방식',
    },
    {
      title: '이용약관',
      href: '/check/service-policy',
      desc: '서비스 이용 규정 및 주의사항',
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
            name: '예약 전 확인',
            description:
              '출장마사지 예약 전 주소, 건물 출입, 개인정보 처리 등 필수 확인사항을 안내합니다.',
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
            <span>예약 전 확인</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            예약 전 확인사항
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            안전하고 신뢰할 수 있는 예약을 위해 사전에 확인해야 할 사항들을
            안내합니다.
          </p>
        </div>
      </section>

      {/* Checks */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checks.map((check) => (
              <a
                key={check.title}
                href={check.href}
                className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-orange-300 transition"
              >
                <h2 className="text-xl font-bold text-orange-600 mb-3">
                  {check.title}
                </h2>
                <p className="text-gray-700">{check.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            예약 전 체크리스트
          </h2>
          <div className="space-y-3">
            {[
              '방문할 주소와 건물명 확인',
              '엘리베이터, 공동현관 등 건물 구조 파악',
              '호텔·오피스텔·아파트 정책 확인',
              '예약 가능 시간대 확인',
              '이용 요금 및 프로그램 확인',
              '취소·변경 정책 확인',
              '개인정보 처리 방식 확인',
              '연락처 정확성 확인',
            ].map((item, idx) => (
              <label key={idx} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded hover:bg-orange-50 cursor-pointer">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-gray-700">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
