import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gandago-massage.com';
  const now = new Date().toISOString().split('T')[0];

  const pages: MetadataRoute.Sitemap = [
    // Main pages
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/program`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/check`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/use`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/service-policy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Region pages
    {
      url: `${baseUrl}/region/capital`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/region/chungcheong`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/region/honam`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/region/yeongnam`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/region/gangwon`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/region/jeju`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Area pages
    {
      url: `${baseUrl}/area/seoul`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/area/busan`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Program pages
    {
      url: `${baseUrl}/program/swedish`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Use pages
    {
      url: `${baseUrl}/use/hotel`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Check pages
    {
      url: `${baseUrl}/check/address`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  return pages;
}
