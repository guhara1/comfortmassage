'use client';

export default function CapitalRegionPage() {
  const cities = [
    { name: '서울', href: '/area/seoul', desc: '25개 구 전체' },
    { name: '경기도', href: '/area/gyeonggi', desc: '31개 시·군 전체' },
    { name: '인천', href: '/area/incheon', desc: '구·군 안내' },
  ];

  const lifeZones = [
    { name: '강남·역삼', href: '/life/gangnam-yeoksam' },
    { name: '잠실·송파', href: '/life/jamsil-songpa' },
    { name: '홍대·합정', href: '/life/hongdae-hapjeong' },
    { name: '여의도·영등포', href: '/life/yeouido-yeongdeungpo' },
    { name: '송도·연수', href: '/life/songdo-yeonsu' },
    { name: '수원·광교', href: '/life/suwon-gwanggyo' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '수도권 출장마사지｜서울·경기·인천 홈타이 지역 안내',
            description:
              '수도권 출장마사지·홈타이 예약 전 서울, 경기, 인천의 25개 구, 31개 시·군과 강남, 잠실, 홍대, 수원, 분당 등 생활권별 이용 기준을 안내합니다.',
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
            <span>수도권</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            수도권 출장마사지 · 서울·경기·인천 생활권 안내
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            수도권은 전체 사이트에서 가장 중요한 권역입니다. 서울은 25개 구,
            경기는 남부·동부·북부·서부, 인천은 송도·부평·청라·검단·영종 중심으로
            나누어 안내합니다.
          </p>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            수도권 주요 지역
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cities.map((city) => (
              <a
                key={city.name}
                href={city.href}
                className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-orange-300 transition"
              >
                <h3 className="text-2xl font-bold text-orange-600 mb-2">
                  {city.name}
                </h3>
                <p className="text-gray-600">{city.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Life Zones */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            인기 생활권
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lifeZones.map((zone) => (
              <a
                key={zone.name}
                href={zone.href}
                className="block p-4 bg-white border border-gray-200 rounded hover:shadow-md hover:border-orange-300 transition text-center"
              >
                <h3 className="font-semibold text-gray-900">{zone.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            마사지 프로그램 선택 기준
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                호텔·숙소
              </h3>
              <p className="text-gray-700">
                스웨디시, 아로마테라피 중심. 객실 정책 확인 필수.
              </p>
            </div>
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                오피스텔
              </h3>
              <p className="text-gray-700">
                공동현관, 관리규정 확인. 예약 시간대 중요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            관련 정보 보기
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/check/address"
              className="block p-4 bg-white border border-gray-200 rounded hover:shadow-md text-center"
            >
              <p className="font-semibold text-gray-900">주소 확인 기준</p>
            </a>
            <a
              href="/check/building-access"
              className="block p-4 bg-white border border-gray-200 rounded hover:shadow-md text-center"
            >
              <p className="font-semibold text-gray-900">건물 출입 확인</p>
            </a>
            <a
              href="/check/privacy"
              className="block p-4 bg-white border border-gray-200 rounded hover:shadow-md text-center"
            >
              <p className="font-semibold text-gray-900">개인정보 처리</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
