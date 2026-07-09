'use client';

export default function SwedishPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '스웨디시 출장마사지 | 부드러운 압과 릴렉스 안내',
            description:
              '스웨디시는 부드러운 압과 릴렉스를 중심으로 합니다. 오일 사용 여부, 숙소·오피스텔 이용 전 확인사항을 안내합니다.',
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
            <a href="/program" className="hover:text-orange-600">
              프로그램
            </a>
            {' > '}
            <span>스웨디시</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            스웨디시 출장마사지
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            부드러운 압과 릴렉스를 중심으로 하는 스웨디시 마사지의 특징과 예약
            전 확인사항을 안내합니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            스웨디시란?
          </h2>
          <p className="text-gray-700 text-lg leading-8 mb-8">
            스웨디시는 부드러운 스트로크와 일정한 리듬으로 근육을 이완시키는
            마사지입니다. 오일을 사용하여 피부 자극을 최소화하고, 전신의
            혈순환을 개선합니다. 스트레스 해소와 피로 회복에 효과적입니다.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            특징
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                압 조절
              </h3>
              <p className="text-gray-700">
                부드러운 압에서 중간 정도의 압까지 조절 가능. 개인의 선호도에
                맞춤.
              </p>
            </div>
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                오일 사용
              </h3>
              <p className="text-gray-700">
                피부 친화적 오일 사용. 시술 후 간단한 샤워로 제거 가능.
              </p>
            </div>
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                시간
              </h3>
              <p className="text-gray-700">
                60분, 90분, 120분 등 시간대 선택 가능.
              </p>
            </div>
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                효과
              </h3>
              <p className="text-gray-700">
                스트레스 해소, 피로 회복, 혈순환 개선.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            예약 전 확인사항
          </h2>
          <div className="space-y-4">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                호텔·숙소 이용 시
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>객실 정책 및 방문자 정책 확인</li>
                <li>오일 사용 허가 여부</li>
                <li>시설 이용 시간대</li>
                <li>추가 요금 여부</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                오피스텔·아파트 이용 시
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>공동현관 및 엘리베이터 확인</li>
                <li>관리규정 확인</li>
                <li>방문 시간대 확인</li>
                <li>이웃 소음 최소화</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                개인 고려사항
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>피부 민감도 사전 안내</li>
                <li>알레르기 여부 확인</li>
                <li>특별 부위 요청사항</li>
                <li>복장 편한 옷 권장</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            안전한 예약을 위해
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            예약 전 모든 확인사항을 점검하고, 신뢰할 수 있는 업소를 선택하세요.
          </p>
          <a
            href="/check"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition"
          >
            전체 확인사항 보기
          </a>
        </div>
      </section>
    </main>
  );
}
