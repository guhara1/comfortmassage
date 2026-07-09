'use client';

import { useState } from 'react';
import { PROGRAMS, USES, CHECKS, OPERATING } from '@/lib/cityMenu';
import type { LifeZone, AreaGroup } from '@/lib/seoul';

type MenuItem = { href: string; label: string };
type MenuGroup = {
  key: string;
  label: string;
  href: string;
  items?: MenuItem[];
  cols?: number;
};

export default function CityMenu({
  citySlug,
  cityName,
  hasAreaGroups,
  areaGroups,
  topLifeZones,
}: {
  citySlug: string;
  cityName: string;
  hasAreaGroups: boolean;
  areaGroups: AreaGroup[];
  topLifeZones: LifeZone[];
}) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const base = `/${citySlug}`;

  const regionItems: MenuItem[] = hasAreaGroups
    ? [
        ...areaGroups.map((g) => ({
          href: `${base}/area/${g.slug}`,
          label: g.name,
        })),
        { href: `${base}/gu`, label: `${cityName} 25개 구 전체보기` },
      ]
    : [];

  const lifeItems: MenuItem[] = hasAreaGroups
    ? [
        ...topLifeZones.map((z) => ({
          href: `${base}/life/${z.slug}`,
          label: z.name,
        })),
        { href: `${base}/life`, label: '생활권 전체보기' },
      ]
    : [];

  const menu: MenuGroup[] = [
    { key: 'home', label: '홈', href: base },
    hasAreaGroups
      ? { key: 'region', label: '지역안내', href: `${base}/gu`, items: regionItems, cols: 1 }
      : { key: 'region', label: '지역안내', href: `${base}/gu` },
    ...(hasAreaGroups
      ? [{ key: 'life', label: '생활권', href: `${base}/life`, items: lifeItems, cols: 2 } as MenuGroup]
      : []),
    {
      key: 'program',
      label: '마사지 프로그램',
      href: `${base}/program`,
      items: PROGRAMS.map((p) => ({ href: `${base}/program/${p.slug}`, label: p.name })),
      cols: 2,
    },
    {
      key: 'use',
      label: '이용 장소',
      href: `${base}/use`,
      items: USES.map((u) => ({ href: `${base}/use/${u.slug}`, label: u.name })),
      cols: 2,
    },
    {
      key: 'check',
      label: '예약 전 확인',
      href: `${base}/check`,
      items: CHECKS.map((c) => ({ href: `${base}/check/${c.slug}`, label: c.name })),
      cols: 2,
    },
    {
      key: 'operating',
      label: '운영 기준',
      href: `${base}/about`,
      items: OPERATING.map((o) => ({ href: `${base}/${o.slug}`, label: o.name })),
      cols: 1,
    },
    { key: 'contact', label: '문의하기', href: `${base}/contact` },
  ];

  const colClass: Record<number, string> = {
    1: 'grid-cols-1 w-52',
    2: 'grid-cols-2 w-[26rem]',
  };

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Section brand */}
          <a href={base} className="font-extrabold text-orange-500 whitespace-nowrap">
            {cityName} 출장마사지
          </a>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center">
            {menu.map((m) => (
              <div
                key={m.key}
                className="relative"
                onMouseEnter={() => m.items && setOpenKey(m.key)}
                onMouseLeave={() => setOpenKey(null)}
              >
                <a
                  href={m.href}
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-orange-500 font-medium transition"
                >
                  {m.label}
                  {m.items && (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {m.items && openKey === m.key && (
                  <div
                    className={`absolute right-0 top-full bg-white border border-gray-200 rounded-lg shadow-lg p-2 grid gap-1 ${colClass[m.cols ?? 1]}`}
                  >
                    {m.items.map((it) => (
                      <a
                        key={it.href}
                        href={it.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded transition"
                      >
                        {it.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            aria-label="서울 메뉴"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-gray-200 bg-white max-h-[70vh] overflow-y-auto">
          <div className="px-4 py-2">
            {menu.map((m) =>
              m.items ? (
                <div key={m.key} className="border-b border-gray-100">
                  <button
                    className="w-full flex items-center justify-between py-3 text-left text-gray-800 font-medium"
                    onClick={() =>
                      setMobileSection((s) => (s === m.key ? null : m.key))
                    }
                  >
                    {m.label}
                    <span className="text-gray-400">
                      {mobileSection === m.key ? '−' : '+'}
                    </span>
                  </button>
                  {mobileSection === m.key && (
                    <div className="pb-3 grid grid-cols-2 gap-1">
                      {m.items.map((it) => (
                        <a
                          key={it.href}
                          href={it.href}
                          className="block px-2 py-2 text-sm text-gray-600 hover:text-orange-500 rounded"
                          onClick={() => setMobileOpen(false)}
                        >
                          {it.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={m.key}
                  href={m.href}
                  className="block py-3 text-gray-800 font-medium border-b border-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {m.label}
                </a>
              )
            )}
          </div>
        </nav>
      )}

      {/* Mobile bottom fixed bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-4 bg-white border-t border-gray-200 shadow-[0_-2px_8px_rgba(0,0,0,0.06)]">
        <a href="tel:0508-202-4719" className="py-2 text-center text-xs text-gray-700 hover:text-orange-500">
          <span className="block text-base">📞</span>전화
        </a>
        <a href="sms:0508-202-4719" className="py-2 text-center text-xs text-gray-700 hover:text-orange-500">
          <span className="block text-base">💬</span>문자
        </a>
        <a href={`${base}/gu`} className="py-2 text-center text-xs text-gray-700 hover:text-orange-500">
          <span className="block text-base">📍</span>지역
        </a>
        <a href={`${base}/program`} className="py-2 text-center text-xs text-gray-700 hover:text-orange-500">
          <span className="block text-base">🧖</span>프로그램
        </a>
      </div>
    </div>
  );
}
