'use client';

export default function AddressCheckPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '출장마사지 주소 확인 기준',
            description:
              '출장마사지 예약 시 주소 확인 방법. 건물명, 동호수, 상세주소 확인 체크리스트를 안내합니다.',
          }),
        }}
      />

      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-gray-600 mb-4">
            <a href="/" className="hover:text-orange-600">홈</a> {' > '}
            <a href="/check" className="hover:text-orange-600">예약 전 확인</a> {' > '}
            <span>주소 확인 기준</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            주소 확인 기준
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            정확한 주소 확인은 안전한 방문을 위한 첫 번째 단계입니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            주소 확인 체크리스트
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                1단계: 기본 주소 확인
              </h3>
              <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        시·도, 시·군·구 확인
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        서울, 경기, 부산 등 광역자치단체 확인
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        읍·면·동 확인
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        강남구, 광주동, 해운대구 등
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        도로명·지번 확인
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        강남구 테헤란로 또는 강남구 역삼동 123번지
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                2단계: 건물명 확인
              </h3>
              <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        건물명 전체 기록
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        'OO빌딩', 'OO센터', 'OO역 근처' 등 정확한 이름
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        건물 구분
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        상가건물, 주택, 오피스텔, 주상복합 등
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        인근 랜드마크 확인
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        '역 근처', '병원 옆', '공원 인근' 등
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                3단계: 동·호수 확인
              </h3>
              <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        동(Building/Wing) 번호
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        A동, B동, 1동, 2동 등
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        층수
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        5층, 10층 등 정확한 층 번호
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        호수(호실 번호)
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        501호, 502호 등 정확한 호실
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                4단계: 상세주소 입력
              </h3>
              <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        건물 진입 방법
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        '정문에서 들어가기', '지하 주차장 엘리베이터 이용' 등
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        주차 위치
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        '건물 앞 주차', '지하 주차장 5층' 등
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        엘리베이터 위치
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        '로비 중앙', '측면 엘리베이터' 등
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                5단계: 지도에서 확인
              </h3>
              <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        네이버맵·카카오맵 검색
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        정확한 위치와 주변 정보 확인
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        거리 확인
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        직업 장소에서의 거리와 이동 시간
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        접근성 확인
                      </p>
                      <p className="text-gray-700 text-sm mt-1">
                        대중교통·주차장·도로 상황
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            주의사항
          </h2>
          <div className="space-y-4">
            <div className="p-6 bg-white border-l-4 border-orange-500 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">
                ⚠ 부정확한 주소는 피하세요
              </p>
              <p className="text-gray-700">
                주소가 부정확하면 방문이 지연되거나 불가능할 수 있습니다.
              </p>
            </div>
            <div className="p-6 bg-white border-l-4 border-orange-500 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">
                ⚠ 비슷한 건물명 주의
              </p>
              <p className="text-gray-700">
                인근에 같은 이름의 건물이 있을 수 있으니 동호수를 명확히 하세요.
              </p>
            </div>
            <div className="p-6 bg-white border-l-4 border-orange-500 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">
                ⚠ 사진이나 지도 확인
              </p>
              <p className="text-gray-700">
                가능하면 카카오맵·네이버맵 사진 기능으로 건물 모습을 확인하세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
