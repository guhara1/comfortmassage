'use client';

import { useState } from 'react';

export default function InquiryPage() {
  const [inquiryType, setInquiryType] = useState<'website' | 'partnership' | null>(
    null
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', { type: inquiryType, ...formData });
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
    setInquiryType(null);
  };

  if (!inquiryType) {
    return (
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              문의하기
            </h1>
            <p className="text-lg text-gray-700">
              원하시는 문의 유형을 선택하세요.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => setInquiryType('website')}
                className="p-8 border-2 border-orange-300 rounded-lg hover:shadow-lg hover:bg-orange-50 transition text-left"
              >
                <h2 className="text-2xl font-bold text-orange-600 mb-3">
                  웹사이트 제작문의
                </h2>
                <p className="text-gray-700 mb-4">
                  출장마사지, 홈타이 등 건강·미용 관련 웹사이트 제작 및 SEO
                  최적화 서비스 문의
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>반응형 웹사이트 설계</li>
                  <li>Google SEO 최적화</li>
                  <li>모바일 앱 개발</li>
                  <li>예약 시스템 구축</li>
                </ul>
              </button>

              <button
                onClick={() => setInquiryType('partnership')}
                className="p-8 border-2 border-orange-300 rounded-lg hover:shadow-lg hover:bg-orange-50 transition text-left"
              >
                <h2 className="text-2xl font-bold text-orange-600 mb-3">
                  제휴문의
                </h2>
                <p className="text-gray-700 mb-4">
                  업소 정보 제공, 광고 협력, 제휴사업 등 파트너십 관련 문의
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>광고 및 노출 협력</li>
                  <li>업소 정보 제공</li>
                  <li>통합 예약 시스템</li>
                  <li>기타 비즈니스 협력</li>
                </ul>
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const title =
    inquiryType === 'website'
      ? '웹사이트 제작문의'
      : '제휴문의';
  const description =
    inquiryType === 'website'
      ? '웹사이트 제작 및 SEO 최적화 서비스 문의'
      : '업소 정보 제공 및 광고 협력 문의';

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setInquiryType(null)}
            className="text-orange-600 hover:text-orange-700 mb-4 font-semibold"
          >
            ← 돌아가기
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-700">
            {description}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                이름 *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                회사명
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                이메일 *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                전화 *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                제목 *
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                내용 *
              </label>
              <textarea
                required
                rows={8}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition"
            >
              문의 접수
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
