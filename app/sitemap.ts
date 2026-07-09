import { MetadataRoute } from 'next';
import { regions } from '@/lib/regions';
import { PROGRAMS, USES, CHECKS, INFO } from '@/lib/cityMenu';
import { SEOUL_AREA_GROUPS, SEOUL_LIFE_ZONES, cityHasAreaGroups } from '@/lib/seoul';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gandago-massage.com';
  const now = new Date().toISOString().split('T')[0];
  const e = (
    path: string,
    priority: number,
    changeFrequency: 'daily' | 'weekly' | 'monthly' = 'weekly'
  ) => ({ url: `${baseUrl}${path}`, lastModified: now, changeFrequency, priority });

  const out: MetadataRoute.Sitemap = [
    e('', 1, 'daily'),
    e('/region', 0.9),
    e('/program', 0.8),
    e('/use', 0.8),
    e('/check', 0.8),
    e('/contact', 0.7, 'monthly'),
    e('/inquiry', 0.6, 'monthly'),
    e('/privacy', 0.5, 'monthly'),
    e('/service-policy', 0.5, 'monthly'),
  ];

  // 권역
  regions.forEach((r) => out.push(e(`/region/${r.slug}`, 0.8)));

  // 도시별 페이지
  regions.forEach((r) =>
    r.cities.forEach((c) => {
      const b = `/${c.slug}`;
      out.push(e(b, 0.8, 'daily'));
      out.push(e(`${b}/gu`, 0.7));
      c.districts.forEach((d) => out.push(e(`${b}/gu/${d.slug}`, 0.6)));
      out.push(e(`${b}/program`, 0.6));
      PROGRAMS.forEach((p) => out.push(e(`${b}/program/${p.slug}`, 0.5)));
      out.push(e(`${b}/use`, 0.6));
      USES.forEach((u) => out.push(e(`${b}/use/${u.slug}`, 0.5)));
      out.push(e(`${b}/check`, 0.6));
      CHECKS.forEach((ch) => out.push(e(`${b}/check/${ch.slug}`, 0.5)));
      INFO.forEach((i) => out.push(e(`${b}/${i.slug}`, 0.4, 'monthly')));

      // 서울 전용: 5대 권역 + 생활권
      if (cityHasAreaGroups(c.slug)) {
        out.push(e(`${b}/life`, 0.6));
        SEOUL_AREA_GROUPS.forEach((g) => out.push(e(`${b}/area/${g.slug}`, 0.6)));
        SEOUL_LIFE_ZONES.forEach((z) => out.push(e(`${b}/life/${z.slug}`, 0.6)));
      }
    })
  );

  return out;
}
