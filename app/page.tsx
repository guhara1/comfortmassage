'use client';

import { Metadata } from 'next';

export default function Home() {
  const regions = [
    {
      title: '수도권',
      description: '서울·경기·인천',
      areas: ['서울', '경기', '인천', '부천', '시흥', '수원', '성남', '용인'],
      href: '/region/capital',
    },
    {
      title: '충청권',
      description: '대전·세종·천안·청주',
      areas: ['대전', '세종', '천안', '아산', '청주', '충주'],
      href: '/region/chungcheong',
    },
    {
      title: '호남권',
      description: '광주·전주·여수·순천',
      areas: ['광주', '전주', '익산', '군산', '여수', '순천'],
      href: '/region/honam',
    },
    {
      title: '영남권',
      description: '부산·대구·울산·창원',
      areas: ['부산', '대구', '울산', '창원', '김해', '양산'],
      href: '/region/yeongnam',
    },
    {
      title: '강원권',
      description: '춘천·원주·강릉·속초',
      areas: ['춘천', '원주', '강릉', '속초', '동해'],
      href: '/region/gangwon',
    },
    {
      title: '제주권',
      description: '제주시·서귀포',
      areas: ['제주시', '제주공항', '서귀포', '중문'],
      href: '/region/jeju',
    },
  ];

  const programs = [
    { name: '스웨디시', href: '/program/swedish', desc: '부드러운 압과 릴렉스' },
    { name: '타이마사지', href: '/program/thai', desc: '스트레칭 중심' },
    { name: '아로마테라피', href: '/program/aroma', desc: '향료 테라피' },
    { name: '스포츠 마사지', href: '/program/sports', desc: '운동 후 관리' },
    { name: '발마사지', href: '/program/foot', desc: '발·종아리 관리' },
    { name: '딥티슈', href: '/program/deep-tissue', desc: '강한 압' },
  ];

  const facilities = [
    { name: '자택', href: '/use/home' },
    { name: '호텔·숙소', href: '/use/hotel' },
    { name: '오피스텔', href: '/use/officetel' },
    { name: '아파트', href: '/use/apartment' },
    { name: '업무지구', href: '/use/business' },
    { name: '역세권', href: '/use/station' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '전국 출장마사지 · 지역별 생활권과 마사지 프로그램 안내',
            description:
              '전국 출장마사지·홈타이 예약 전 서울, 경기, 인천, 부산, 대구, 대전, 광주, 경남, 경북, 제주 등 주요 지역과 스웨디시, 아로마, 타이마사지, 스포츠 마사지, 호텔·오피스텔·자택 이용 기준을 안내합니다.',
            url: 'https://gandago-massage.com',
            isPartOf: {
              '@type': 'WebSite',
              name: '간다GO',
              url: 'https://gandago-massage.com',
            },
          }),
        }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              전국 출장마사지 · 지역별 생활권과 마사지 프로그램 안내
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl">
              서울, 경기, 인천, 부산, 대구, 대전, 광주, 경남, 경북, 제주 등 전국
              주요 지역과 스웨디시, 아로마테라피, 타이마사지, 스포츠 마사지 등
              프로그램별 예약 전 확인사항을 안내합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/check"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition"
              >
                예약 전 확인
              </a>
              <a
                href="/contact"
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded transition"
              >
                문의하기
              </a>
            </div>
          </div>
        </section>

        {/* Section 1: Why Check Guidelines */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              전국 출장마사지는 지역명보다 이용 기준 확인이 중요합니다
            </h2>
            <p className="text-gray-700 text-lg leading-8 mb-6">
              전국 단위 사이트는 지역명이 많기 때문에 단순 지역명 반복으로
              구성하면 페이지 품질이 낮아질 수 있습니다. 실제 사용자는 지역명뿐
              아니라 호텔, 오피스텔, 아파트, 숙소, 야간 이용, 프로그램 종류,
              예약 가능 시간, 건물 출입 방식을 함께 확인합니다.
            </p>
            <p className="text-gray-700 text-lg leading-8">
              이 사이트는 전국 지역을 권역과 생활권으로 나누고, 예약 전
              확인사항을 중심으로 안내합니다.
            </p>
          </div>
        </section>

        {/* Section 2: Regions */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              전국 권역별 안내
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region) => (
                <a
                  key={region.title}
                  href={region.href}
                  className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-orange-300 transition"
                >
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">
                    {region.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{region.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {region.areas.map((area) => (
                      <span
                        key={area}
                        className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Programs */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              마사지 프로그램 안내
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <a
                  key={program.name}
                  href={program.href}
                  className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-orange-300 transition"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {program.name}
                  </h3>
                  <p className="text-gray-600">{program.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Facilities */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              이용 장소별 확인 기준
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility) => (
                <a
                  key={facility.name}
                  href={facility.href}
                  className="block p-6 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-lg hover:shadow-lg hover:border-orange-500 transition text-center"
                >
                  <h3 className="text-lg font-bold text-gray-900">
                    {facility.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: CTA */}
        <section className="py-16 px-4 bg-orange-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              지금 예약 전 확인사항을 읽어보세요
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="/check/address"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition"
              >
                주소 확인 기준
              </a>
              <a
                href="/check/building-access"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition"
              >
                건물 출입 확인
              </a>
              <a
                href="/check/privacy"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition"
              >
                개인정보 처리
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Schema */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              자주 묻는 질문
            </h2>
            <div className="space-y-6">
              <details className="border border-gray-200 rounded-lg p-6">
                <summary className="font-bold text-lg cursor-pointer text-gray-900">
                  전국 전 지역 방문이 가능한가요?
                </summary>
                <p className="mt-4 text-gray-700">
                  실제 방문 주소, 가까운 생활권, 예약 가능 시간, 이동 기준, 이용
                  장소를 확인한 뒤 안내합니다.
                </p>
              </details>

              <details className="border border-gray-200 rounded-lg p-6">
                <summary className="font-bold text-lg cursor-pointer text-gray-900">
                  호텔이나 숙소에서도 이용할 수 있나요?
                </summary>
                <p className="mt-4 text-gray-700">
                  숙소 정책, 객실 출입 가능 여부, 프런트 확인 방식, 예약자명,
                  야간 출입 가능 여부를 먼저 확인해야 합니다.
                </p>
              </details>

              <details className="border border-gray-200 rounded-lg p-6">
                <summary className="font-bold text-lg cursor-pointer text-gray-900">
                  야간 예약은 무조건 가능한가요?
                </summary>
                <p className="mt-4 text-gray-700">
                  무조건 가능하다고 안내하지 않습니다. 주소, 이동 거리, 건물
                  출입, 예약 가능 시간 확인 후 안내합니다.
                </p>
              </details>
            </div>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: '전국 전 지역 방문이 가능한가요?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: '실제 방문 주소, 가까운 생활권, 예약 가능 시간, 이동 기준, 이용 장소를 확인한 뒤 안내합니다.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: '호텔이나 숙소에서도 이용할 수 있나요?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: '숙소 정책, 객실 출입 가능 여부, 프런트 확인 방식, 예약자명, 야간 출입 가능 여부를 먼저 확인해야 합니다.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: '야간 예약은 무조건 가능한가요?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: '무조건 가능하다고 안내하지 않습니다. 주소, 이동 거리, 건물 출입, 예약 가능 시간 확인 후 안내합니다.',
                      },
                    },
                  ],
                }),
              }}
            />
          </div>
        </section>

        {/* Who, How, Why Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              간다GO에 대해
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-orange-600 mb-3">Who</h3>
                <p className="text-gray-700">
                  전국 출장마사지·홈타이 예약 안내에 특화된 전문 정보 사이트
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-600 mb-3">How</h3>
                <p className="text-gray-700">
                  지역별 권역, 생활권, 이용 장소, 프로그램 중심의 체계적인 정보
                  제공
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-600 mb-3">Why</h3>
                <p className="text-gray-700">
                  안전하고 신뢰할 수 있는 예약 문화 조성
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Illegal Services Notice */}
        <section className="py-8 px-4 bg-red-50 border-t border-red-200">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-red-800 font-semibold">
              불법·선정적 서비스는 제공하거나 안내하지 않습니다.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
