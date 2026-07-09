'use client';

export default function ProgramPage() {
  const programs = [
    {
      name: '스웨디시',
      href: '/program/swedish',
      desc: '부드러운 압과 릴렉스 중심. 오일 사용 여부, 숙소·오피스텔 이용 전 확인',
    },
    {
      name: '타이마사지',
      href: '/program/thai',
      desc: '스트레칭, 공간 확보 중요. 복장, 자택·아파트 이용 기준',
    },
    {
      name: '아로마테라피',
      href: '/program/aroma',
      desc: '오일 사용 여부, 향 민감도, 피부 민감도, 호텔·숙소 정책 확인',
    },
    {
      name: '스포츠 마사지',
      href: '/program/sports',
      desc: '운동 후 압 조절. 부위별 관리, 무리한 압 금지',
    },
    {
      name: '발마사지',
      href: '/program/foot',
      desc: '여행객, 장시간 보행 후 관리. 발·종아리 케어 중심',
    },
    {
      name: '딥티슈',
      href: '/program/deep-tissue',
      desc: '강한 압이 부담될 수 있는 사용자 안내. 압 조절, 특정 부위 제외 요청',
    },
    {
      name: '로미로미',
      href: '/program/lomi-lomi',
      desc: '부드러운 흐름 중심. 오일 사용 여부, 숙소 이용 전 확인',
    },
    {
      name: '커플 관리',
      href: '/program/couple',
      desc: '공간 확보, 동시 이용 가능 여부, 인원, 숙소 정책 확인',
    },
    {
      name: '야간 예약',
      href: '/program/night',
      desc: '"24시간 무조건 가능" 금지. 주소·건물 출입·이동 거리 확인',
    },
    {
      name: '남성 고객 안내',
      href: '/program/male',
      desc: '선정적 표현 없이 예약 절차, 이용 장소, 프로그램 선택 기준',
    },
    {
      name: '여성 고객 안내',
      href: '/program/female',
      desc: '안전한 예약 확인, 장소 확인, 상담 기준, 개인정보 처리 기준',
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
            name: '마사지 프로그램 안내',
            description:
              '스웨디시, 타이마사지, 아로마테라피, 스포츠 마사지 등 다양한 프로그램별 예약 전 확인사항을 안내합니다.',
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
            <span>프로그램</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            마사지 프로그램 안내
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            다양한 마사지 프로그램별 특징과 예약 전 확인사항을 안내합니다.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <a
                key={program.name}
                href={program.href}
                className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-orange-300 transition"
              >
                <h2 className="text-2xl font-bold text-orange-600 mb-3">
                  {program.name}
                </h2>
                <p className="text-gray-700">{program.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-8 px-4 bg-red-50 border-t border-red-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-800 font-semibold">
            불법·선정적 서비스는 제공하거나 안내하지 않습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
