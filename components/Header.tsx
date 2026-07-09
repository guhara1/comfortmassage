'use client';

import { useState } from 'react';
import { regions } from '@/lib/regions';

// 시·도 단위 큰 지역 (서울, 경기, 인천, 부산 …) 을 데이터에서 자동 추출
const CITIES = regions.flatMap((r) =>
  r.cities.map((c) => ({ href: `/${c.slug}`, label: c.name }))
);

const NAV = [
  { href: '/program', label: '프로그램' },
  { href: '/use', label: '이용 장소' },
  { href: '/check', label: '예약 전 확인' },
  { href: '/contact', label: '문의' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-orange-500">간다GO</span>
            <span className="hidden sm:inline text-sm text-gray-500">
              전국 출장마사지 안내
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Regions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setRegionOpen(true)}
              onMouseLeave={() => setRegionOpen(false)}
            >
              <button className="px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition flex items-center gap-1">
                지역별 안내
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {regionOpen && (
                <div className="absolute left-0 top-full w-[26rem] bg-white border border-gray-200 rounded-lg shadow-lg p-3 grid grid-cols-4 gap-1">
                  {CITIES.map((c) => (
                    <a
                      key={c.href}
                      href={c.href}
                      className="block px-2 py-2 text-center text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded transition"
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href="tel:0508-202-4719"
              className="ml-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold transition"
            >
              전화예약
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            aria-label="메뉴 열기"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            <p className="px-2 pt-2 pb-1 text-xs font-semibold text-gray-400 uppercase">
              지역별 안내
            </p>
            <div className="grid grid-cols-3 gap-1">
              {CITIES.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  className="block px-2 py-2 text-center text-gray-700 hover:text-orange-500 rounded transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {c.label}
                </a>
              ))}
            </div>
            <div className="border-t border-gray-100 my-2" />
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-2 py-2 text-gray-700 hover:text-orange-500 rounded transition"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:0508-202-4719"
              className="block mt-3 bg-orange-500 hover:bg-orange-600 text-white text-center px-4 py-3 rounded-full font-bold transition"
              onClick={() => setMobileOpen(false)}
            >
              전화예약 0508-202-4719
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
