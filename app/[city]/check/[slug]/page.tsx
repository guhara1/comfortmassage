import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCity, regions } from '@/lib/regions';
import { CHECKS, USES, findItem } from '@/lib/cityMenu';
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
    r.cities.flatMap((c) => CHECKS.map((ch) => ({ city: c.slug, slug: ch.slug })))
  );
}

type Params = { city: string; slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city, slug } = await params;
  const found = getCity(city);
  const ch = findItem(CHECKS, slug);
  if (!found || !ch) return {};
  const { city: c } = found;
  const title = `${c.name} 출장마사지 ${ch.name} 안내 | 간다GO`;
  const description = `${c.name} 출장마사지 ${ch.name} 안내. ${ch.desc}. 예약 전 꼭 확인하세요.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${c.slug}/check/${ch.slug}` },
    openGraph: { title, description, url: `${SITE}/${c.slug}/check/${ch.slug}`, type: 'website', siteName: '간다GO' },
  };
}

export default async function CheckDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city, slug } = await params;
  const found = getCity(city);
  const ch = findItem(CHECKS, slug);
  if (!found || !ch) notFound();
  const { region, city: c } = found;
  const base = `/${c.slug}`;
  const others = CHECKS.filter((x) => x.slug !== ch.slug);

  const crumbs = [
    { name: '홈', href: '/' },
    { name: region.name, href: `/region/${region.slug}` },
    { name: c.name, href: base },
    { name: '예약 전 확인', href: `${base}/check` },
    { name: ch.name },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `${c.name} 출장마사지 ${ch.name} 안내`,
          description: `${c.name} ${ch.name} — ${ch.desc}`,
          breadcrumb: breadcrumbSchema(crumbs),
        }}
      />
      <Hero
        crumbs={crumbs}
        title={`${c.name} 출장마사지 ${ch.name}`}
        desc={`${ch.desc}. ${c.name} 지역 예약 전 ${ch.name}과(와) 관련해 확인해야 할 사항을 안내합니다.`}
      />

      <Section>
        <div className="prose max-w-none text-gray-700 space-y-4">
          <p>
            {c.name}에서 출장마사지를 예약하기 전 {ch.name}은(는) 중요합니다.
            {ch.desc}. 정확히 확인하면 방문이 지연되지 않고 원활하게 이용할 수
            있습니다.
          </p>
        </div>
      </Section>

      <Section tone="gray">
        <LinkGrid
          title="이용 장소별 확인"
          cols={4}
          cards={USES.slice(0, 8).map((u) => ({
            href: `${base}/use/${u.slug}`,
            label: u.name,
          }))}
        />
      </Section>

      <Section>
        <LinkGrid
          title="다른 확인사항"
          cols={4}
          cards={others.map((x) => ({
            href: `${base}/check/${x.slug}`,
            label: x.name,
          }))}
        />
      </Section>
    </main>
  );
}
