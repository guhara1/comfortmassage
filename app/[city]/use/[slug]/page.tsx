import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCity, regions } from '@/lib/regions';
import { USES, PROGRAMS, CHECKS, findItem } from '@/lib/cityMenu';
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
    r.cities.flatMap((c) => USES.map((u) => ({ city: c.slug, slug: u.slug })))
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
  const u = findItem(USES, slug);
  if (!found || !u) return {};
  const { city: c } = found;
  const title = `${c.name} ${u.name} 출장마사지 이용 안내 | 간다GO`;
  const description = `${c.name} ${u.name} 출장마사지 이용 안내. ${u.desc}. 예약 전 확인 기준을 함께 안내합니다.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${c.slug}/use/${u.slug}` },
    openGraph: { title, description, url: `${SITE}/${c.slug}/use/${u.slug}`, type: 'website', siteName: '간다GO' },
  };
}

export default async function UseDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city, slug } = await params;
  const found = getCity(city);
  const u = findItem(USES, slug);
  if (!found || !u) notFound();
  const { region, city: c } = found;
  const base = `/${c.slug}`;
  const others = USES.filter((x) => x.slug !== u.slug);

  const crumbs = [
    { name: '홈', href: '/' },
    { name: region.name, href: `/region/${region.slug}` },
    { name: c.name, href: base },
    { name: '이용 장소', href: `${base}/use` },
    { name: u.name },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `${c.name} ${u.name} 출장마사지 이용 안내`,
          description: `${c.name} ${u.name} — ${u.desc}`,
          breadcrumb: breadcrumbSchema(crumbs),
        }}
      />
      <Hero
        crumbs={crumbs}
        title={`${c.name} ${u.name} 출장마사지 이용 안내`}
        desc={`${u.desc}. ${c.name} ${u.name} 이용 시 확인해야 할 사항과 준비 방법을 안내합니다.`}
      />

      <Section>
        <div className="prose max-w-none text-gray-700 space-y-4">
          <p>
            {c.name}에서 {u.name}을(를) 이용해 출장마사지를 예약할 때는 {u.desc}
            이 중요합니다. 방문 전 정확한 주소와 출입 방법을 준비하면 원활하게
            이용할 수 있습니다.
          </p>
        </div>
      </Section>

      <Section tone="gray">
        <LinkGrid
          title="예약 전 확인"
          cols={4}
          cards={CHECKS.slice(0, 8).map((ch) => ({
            href: `${base}/check/${ch.slug}`,
            label: ch.name,
          }))}
        />
      </Section>

      <Section>
        <LinkGrid
          title="추천 프로그램"
          cols={4}
          tone="orange"
          cards={PROGRAMS.slice(0, 8).map((p) => ({
            href: `${base}/program/${p.slug}`,
            label: p.name,
          }))}
        />
      </Section>

      <Section tone="gray">
        <LinkGrid
          title="다른 이용 장소"
          cols={4}
          cards={others.map((x) => ({
            href: `${base}/use/${x.slug}`,
            label: x.name,
          }))}
        />
      </Section>
    </main>
  );
}
