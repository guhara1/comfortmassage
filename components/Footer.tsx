'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">간다GO</h3>
            <p className="text-gray-400 text-sm">
              전국 출장마사지·홈타이 예약 안내 전문 사이트
            </p>
            <p className="text-orange-500 font-bold mt-2">0508-202-4719</p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-bold mb-4">주요 메뉴</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-orange-500 transition">
                  홈
                </a>
              </li>
              <li>
                <a href="/region" className="hover:text-orange-500 transition">
                  지역별 안내
                </a>
              </li>
              <li>
                <a href="/program" className="hover:text-orange-500 transition">
                  마사지 프로그램
                </a>
              </li>
              <li>
                <a href="/check" className="hover:text-orange-500 transition">
                  예약 전 확인
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold mb-4">정보</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="/privacy"
                  className="hover:text-orange-500 transition"
                >
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a
                  href="/service-policy"
                  className="hover:text-orange-500 transition"
                >
                  이용약관
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-orange-500 transition"
                >
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">연락처</h4>
            <div className="space-y-3">
              <button
                onClick={() => (window.location.href = "tel:0508202419")}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transition"
              >
                전화 문의
              </button>
              <a
                href="https://t.me/gandago"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold transition"
              >
                텔레그램
              </a>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/inquiry/website"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded text-center transition"
            >
              웹사이트 제작문의
            </a>
            <a
              href="/inquiry/partnership"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded text-center transition"
            >
              제휴문의
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© 2026 간다GO. All rights reserved.</p>
          <p className="mt-2">
            서울특별시 강남구 | 전화: 0508-202-4719 | 이메일: info@gandago.com
          </p>
        </div>
      </div>
    </footer>
  );
}
