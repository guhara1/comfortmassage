import { MetadataRoute } from 'next';
import { regions } from '@/lib/regions';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gandago-massage.com';
  const now = new Date().toISOString().split('T')[0];

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/region`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/program`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/program/swedish`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/check`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/check/address`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/use`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/use/hotel`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/inquiry`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/service-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const regionPages: MetadataRoute.Sitemap = regions.map((r) => ({
    url: `${baseUrl}/region/${r.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = regions.flatMap((r) =>
    r.cities.map((c) => ({
      url: `${baseUrl}/area/${c.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  );

  const districtPages: MetadataRoute.Sitemap = regions.flatMap((r) =>
    r.cities.flatMap((c) =>
      c.districts.map((d) => ({
        url: `${baseUrl}/area/${c.slug}/${d.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }))
    )
  );

  return [...staticPages, ...regionPages, ...cityPages, ...districtPages];
}
