import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCity, regions } from '@/lib/regions';
import { PROGRAMS, USES, CHECKS, findItem } from '@/lib/cityMenu';
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
    r.cities.flatMap((c) =>
      PROGRAMS.map((p) => ({ city: c.slug, slug: p.slug }))
    )
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
  const p = findItem(PROGRAMS, slug);
  if (!found || !p) return {};
  const { city: c } = found;
  const title = `${c.name} ${p.name} 출장마사지 안내 | 간다GO`;
  const description = `${c.name} ${p.name} 출장마사지 안내. ${p.desc}. 이용 장소·예약 전 확인 기준을 함께 안내합니다.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${c.slug}/program/${p.slug}` },
    openGraph: { title, description, url: `${SITE}/${c.slug}/program/${p.slug}`, type: 'website', siteName: '간다GO' },
  };
}

export default async function ProgramDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city, slug } = await params;
  const found = getCity(city);
  const p = findItem(PROGRAMS, slug);
  if (!found || !p) notFound();
  const { region, city: c } = found;
  const base = `/${c.slug}`;
  const others = PROGRAMS.filter((x) => x.slug !== p.slug);

  const crumbs = [
    { name: '홈', href: '/' },
    { name: region.name, href: `/region/${region.slug}` },
    { name: c.name, href: base },
    { name: '마사지 프로그램', href: `${base}/program` },
    { name: p.name },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `${c.name} ${p.name} 출장마사지 안내`,
          description: `${c.name} ${p.name} — ${p.desc}`,
          breadcrumb: breadcrumbSchema(crumbs),
        }}
      />
      <Hero
        crumbs={crumbs}
        title={`${c.name} ${p.name} 출장마사지`}
        desc={`${p.desc}. ${c.name} 지역에서 ${p.name} 프로그램을 이용할 때의 기준과 예약 전 확인 사항을 안내합니다.`}
      />

      <Section>
        <div className="prose max-w-none text-gray-700 space-y-4">
          <p>
            {p.name}은(는) {p.desc.replace(/\.$/, '')}입니다. {c.name} 출장마사지
            예약 시 프로그램에 따라 준비물과 소요 시간이 달라질 수 있으므로,
            예약 전 원하는 프로그램과 이용 장소를 함께 확인하는 것이 좋습니다.
          </p>
          <p>
            {c.name} 내 호텔·오피스텔·아파트·자택 등 이용 장소별 확인 사항은
            아래 링크에서 확인할 수 있습니다.
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
          title="예약 전 확인"
          cols={4}
          cards={CHECKS.slice(0, 8).map((ch) => ({
            href: `${base}/check/${ch.slug}`,
            label: ch.name,
          }))}
        />
      </Section>

      <Section tone="gray">
        <LinkGrid
          title="다른 프로그램"
          cols={4}
          tone="orange"
          cards={others.map((x) => ({
            href: `${base}/program/${x.slug}`,
            label: x.name,
          }))}
        />
      </Section>
    </main>
  );
}
