'use client';

export default function HotelPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '호텔·숙소 출장마사지 예약 전 확인사항',
            description:
              '호텔, 리조트, 펜션 등 숙소에서 출장마사지 이용 시 객실 정책, 프런트 확인, 추가 요금 등 필수 확인사항을 안내합니다.',
          }),
        }}
      />

      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-gray-600 mb-4">
            <a href="/" className="hover:text-orange-600">홈</a> {' > '}
            <a href="/use" className="hover:text-orange-600">이용 장소</a> {' > '}
            <span>호텔·숙소</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            호텔·숙소 출장마사지 예약 전 확인사항
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            호텔, 리조트, 펜션 등 숙소에서 출장마사지를 이용할 때 꼭 확인해야 할 사항들을 안내합니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            예약 전 필수 확인사항
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                1. 객실 정책 확인
              </h3>
              <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>호텔 고객만 객실 방문 허용 여부</li>
                  <li>외부인 방문 시 사전 허가 필요 여부</li>
                  <li>방문자 출입 가능 시간대</li>
                  <li>야간·심야 방문 제한 여부</li>
                  <li>객실 내부 시술 가능 여부</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                2. 프런트 확인 절차
              </h3>
              <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>프런트에 미리 전달해야 할 정보</li>
                  <li>신원 확인 증명서 필요 여부</li>
                  <li>방문자 등록 절차</li>
                  <li>엘리베이터 접근 방식</li>
                  <li>긴급 상황 연락처</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                3. 추가 요금 확인
              </h3>
              <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>방문자 요금 (있을 경우)</li>
                  <li>타월 세트 추가 비용</li>
                  <li>샤워 시설 이용 요금</li>
                  <li>소음 관련 벌금 기준</li>
                  <li>물품 손상 배상 기준</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                4. 시설 확인
              </h3>
              <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>객실 크기 및 공간 확인</li>
                  <li>침대 타입 (싱글/더블/트윈)</li>
                  <li>욕실 시설 및 타월 제공</li>
                  <li>샤워실 개별 제공 여부</li>
                  <li>난방·냉방 조절 가능 여부</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                5. 소음 및 이웃 배려
              </h3>
              <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>시술 시 예상 소음 수준 사전 안내</li>
                  <li>저녁 늦은 시간 예약 제한 여부</li>
                  <li>음악 재생 금지 여부</li>
                  <li>문 열림 시간 제한</li>
                  <li>이웃 방 위치 확인</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                6. 예약자명 확인
              </h3>
              <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>호텔 예약자명 = 시술 받는 사람 확인</li>
                  <li>예약자 신원 증명 필요한 경우 대비</li>
                  <li>다른 사람 명의 객실 이용 불가 경우 주의</li>
                  <li>사업가 숙소 정책 확인</li>
                  <li>회사 법인 객실 규정 확인</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            호텔별 안내
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                리조트·관광 호텔
              </h3>
              <p className="text-gray-700">
                대체로 개방적인 정책. 스파·마사지 시설이 있을 수 있으므로 호텔 시설 먼저 확인.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                비즈니스 호텔
              </h3>
              <p className="text-gray-700">
                방문자 정책이 엄격할 수 있습니다. 사전에 프런트에 알리고 확인 필수.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                모텔·펜션
              </h3>
              <p className="text-gray-700">
                비교적 개방적입니다. 다만 방음 시설이 약할 수 있으므로 저녁 시간 주의.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                에어비앤비·숙박앱
              </h3>
              <p className="text-gray-700">
                개인 소유 숙소마다 다릅니다. 숙소 설명과 리뷰에서 방문자 정책 확인.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            체크리스트
          </h2>
          <div className="space-y-3">
            {[
              '호텔명과 객실 번호 확인',
              '호텔 고객 본인 명의 객실 여부',
              '방문자 정책 사전 확인',
              '프런트에 미리 알림',
              '예상 도착 시간 전달',
              '신원 증명 준비',
              '추가 요금 확인',
              '소음 주의 및 시간 확인',
              '체크아웃 시간 확인',
              '긴급 연락처 기록',
            ].map((item, idx) => (
              <label
                key={idx}
                className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded hover:bg-orange-50 cursor-pointer"
              >
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
