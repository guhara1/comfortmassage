export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '개인정보처리방침',
            description: '간다GO 개인정보처리방침',
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
            <span>개인정보처리방침</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900">
            개인정보처리방침
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. 개인정보의 수집 및 이용
              </h2>
              <p className="text-gray-700">
                간다GO는 예약 확인 및 연락에 필요한 최소 정보만 수집합니다.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
                <li>이름, 전화번호, 이메일 (필수)</li>
                <li>방문 주소, 이용 프로그램 (필수)</li>
                <li>특별 요청사항 (선택)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. 개인정보의 보관 기간
              </h2>
              <p className="text-gray-700">
                수집된 개인정보는 예약 완료 및 서비스 제공 후 1년 이내에
                삭제됩니다. 다만, 관계 법령에서 보존을 요구하는 경우는
                해당 기간 동안 보존됩니다.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. 개인정보의 제3자 제공
              </h2>
              <p className="text-gray-700">
                개인정보는 예약 완료 및 서비스 제공에 필요한 경우를 제외하고
                제3자에게 제공되지 않습니다.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. 개인정보 보호 조치
              </h2>
              <p className="text-gray-700">
                간다GO는 개인정보 보호를 위해 암호화, 접근 제한 등의 기술적
                조치를 취하고 있습니다.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. 이용자의 권리
              </h2>
              <p className="text-gray-700">
                이용자는 언제든지 개인정보에 대한 열람, 수정, 삭제를 요청할
                수 있습니다.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. 문의
              </h2>
              <p className="text-gray-700">
                개인정보 처리에 관한 문의는 다음으로 연락해주세요.
              </p>
              <p className="text-gray-700 mt-3">
                <strong>전화:</strong> 0508-202-4719<br />
                <strong>이메일:</strong> info@gandago.com
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              최종 수정일: 2026년 7월 9일
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
