import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCity, regions } from '@/lib/regions';
import { INFO, findItem } from '@/lib/cityMenu';
import {
  SITE,
  Hero,
  Section,
  LinkGrid,
  SchemaScript,
  breadcrumbSchema,
} from '@/components/PageParts';

export const dynamicParams = false;

export function generateStaticParams() {
  return regions.flatMap((r) =>
    r.cities.flatMap((c) => INFO.map((i) => ({ city: c.slug, page: i.slug })))
  );
}

type Params = { city: string; page: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city, page } = await params;
  const found = getCity(city);
  const info = findItem(INFO, page);
  if (!found || !info) return {};
  const { city: c } = found;
  const title = `${c.name} 출장마사지 ${info.name} | 간다GO`;
  const description = `${c.name} 출장마사지 ${info.name}. ${info.desc}.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${c.slug}/${info.slug}` },
    openGraph: { title, description, url: `${SITE}/${c.slug}/${info.slug}`, type: 'website', siteName: '간다GO' },
  };
}

export default async function InfoPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city, page } = await params;
  const found = getCity(city);
  const info = findItem(INFO, page);
  if (!found || !info) notFound();
  const { region, city: c } = found;
  const base = `/${c.slug}`;

  const crumbs = [
    { name: '홈', href: '/' },
    { name: region.name, href: `/region/${region.slug}` },
    { name: c.name, href: base },
    { name: info.name },
  ];

  const isContact = info.slug === 'contact';

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript
        data={{
          '@context': 'https://schema.org',
          '@type': isContact ? 'ContactPage' : 'WebPage',
          name: `${c.name} 출장마사지 ${info.name}`,
          description: `${c.name} ${info.name} — ${info.desc}`,
          breadcrumb: breadcrumbSchema(crumbs),
        }}
      />
      <Hero
        crumbs={crumbs}
        title={`${c.name} 출장마사지 ${info.name}`}
        desc={`${info.desc}. ${c.name} 지역 이용을 위한 안내입니다.`}
      />

      {isContact ? (
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
            <a
              href="tel:0508-202-4719"
              className="block p-6 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-center font-bold transition"
            >
              전화 문의
              <span className="block text-sm font-normal mt-1">0508-202-4719</span>
            </a>
            <a
              href="sms:0508-202-4719"
              className="block p-6 bg-white border border-gray-200 rounded-lg text-center font-bold text-gray-900 hover:shadow-md transition"
            >
              문자 문의
              <span className="block text-sm font-normal text-gray-600 mt-1">
                0508-202-4719
              </span>
            </a>
            <a
              href="https://t.me/gandago"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-center font-bold transition"
            >
              텔레그램 문의
              <span className="block text-sm font-normal mt-1">@gandago</span>
            </a>
          </div>
          <div className="mt-8 text-gray-700 space-y-2">
            <p>· 예약 전 주소 확인, 프로그램 선택, 이용 장소 확인 문의 가능</p>
            <p>· 불법·선정적 서비스는 제공하지 않습니다.</p>
          </div>
        </Section>
      ) : (
        <Section>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              {c.name} 출장마사지 {info.name} 페이지입니다. {info.desc}. 간다GO는
              전국 출장마사지·홈타이 예약 안내를 제공하며, 정확한 정보 전달과
              안전한 이용을 위해 예약 전 확인 기준을 함께 안내합니다.
            </p>
            <p>
              불법·선정적 서비스는 제공하지 않으며, 예약 전 주소와 이용 장소를
              정확히 확인해 주세요. 문의는 전화(0508-202-4719) 또는 텔레그램
              (@gandago)으로 가능합니다.
            </p>
          </div>
        </Section>
      )}

      <Section tone="gray">
        <LinkGrid
          title="바로가기"
          cols={4}
          cards={[
            { href: `${base}`, label: `${c.name} 홈` },
            { href: `${base}/gu`, label: '지역안내' },
            { href: `${base}/program`, label: '마사지 프로그램' },
            { href: `${base}/check`, label: '예약 전 확인' },
          ]}
        />
      </Section>
    </main>
  );
}
