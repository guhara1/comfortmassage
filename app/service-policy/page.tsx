export default function ServicePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '이용약관',
            description: '간다GO 서비스 이용약관',
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
            <span>이용약관</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900">
            이용약관
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. 서비스 소개
            </h2>
            <p className="text-gray-700 leading-relaxed">
              간다GO는 전국 출장마사지·홈타이 예약 안내 전문 사이트입니다. 지역별
              생활권, 마사지 프로그램, 이용 장소별 예약 전 확인사항을 제공합니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. 서비스 이용 조건
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>사용자는 만 18세 이상이어야 합니다.</li>
              <li>개인정보 제공에 동의해야 합니다.</li>
              <li>모든 법률을 준수해야 합니다.</li>
              <li>불법 행위를 금합니다.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. 서비스 한계
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              간다GO는 정보 제공 사이트로서 다음을 제한합니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>직접 예약 시스템을 제공하지 않습니다.</li>
              <li>
                업소와의 거래에 대해 책임을 지지 않습니다.
              </li>
              <li>
                부정확한 정보로 인한 피해에 대해 책임을 지지
                않습니다.
              </li>
              <li>
                불법·선정적 서비스는 안내하지 않습니다.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. 예약 전 확인
            </h2>
            <p className="text-gray-700 leading-relaxed">
              사용자는 예약 전에 다음을 확인해야 합니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
              <li>방문할 주소와 건물명</li>
              <li>호텔·오피스텔·아파트 정책</li>
              <li>예약 가능 시간대</li>
              <li>취소·변경 정책</li>
              <li>개인정보 처리 방식</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. 금지 행위
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              다음 행위를 금합니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>불법·선정적 서비스 요청</li>
              <li>개인정보 불법 이용</li>
              <li>사기·거짓 정보 제공</li>
              <li>시스템 해킹 또는 악의적 접근</li>
              <li>명예훼손·모욕</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. 면책 조항
            </h2>
            <p className="text-gray-700 leading-relaxed">
              간다GO는 제공된 정보의 정확성, 완전성, 적시성에 대해 보증하지
              않습니다. 사용자는 정보를 이용하면서 발생하는 모든 손해에 대해
              스스로 책임집니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. 정책 변경
            </h2>
            <p className="text-gray-700 leading-relaxed">
              간다GO는 사전 통지 없이 이용약관을 변경할 수 있습니다. 변경된
              약관은 웹사이트에 게시된 시점부터 효력을 발생합니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. 문의
            </h2>
            <p className="text-gray-700 leading-relaxed">
              이용약관에 관한 문의는 다음으로 연락해주세요:
            </p>
            <p className="text-gray-700 mt-3">
              <strong>전화:</strong> 0508-202-4719<br />
              <strong>이메일:</strong> info@gandago.com
            </p>
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
