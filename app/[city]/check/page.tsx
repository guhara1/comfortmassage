import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allCityParams, getCity } from '@/lib/regions';
import { CHECKS } from '@/lib/cityMenu';
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
  return allCityParams();
}

type Params = { city: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city } = await params;
  const found = getCity(city);
  if (!found) return {};
  const { city: c } = found;
  const title = `${c.name} 출장마사지 예약 전 확인사항 | 간다GO`;
  const description = `${c.name} 출장마사지 예약 전 주소·건물 출입·호텔 정책·예약 시간 등 확인사항을 안내합니다.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${c.slug}/check` },
    openGraph: { title, description, url: `${SITE}/${c.slug}/check`, type: 'website', siteName: '간다GO' },
  };
}

export default async function CheckIndex({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city } = await params;
  const found = getCity(city);
  if (!found) notFound();
  const { region, city: c } = found;
  const base = `/${c.slug}`;

  const crumbs = [
    { name: '홈', href: '/' },
    { name: region.name, href: `/region/${region.slug}` },
    { name: c.name, href: base },
    { name: '예약 전 확인' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `${c.name} 출장마사지 예약 전 확인사항`,
          breadcrumb: breadcrumbSchema(crumbs),
        }}
      />
      <Hero
        crumbs={crumbs}
        title={`${c.name} 예약 전 확인사항`}
        desc={`${c.name} 출장마사지 예약 전에 확인해야 할 사항을 안내합니다. 항목을 선택해 상세 기준을 확인하세요.`}
      />
      <Section>
        <LinkGrid
          cols={4}
          cards={CHECKS.map((ch) => ({
            href: `${base}/check/${ch.slug}`,
            label: ch.name,
            desc: ch.desc,
          }))}
        />
      </Section>
    </main>
  );
}
