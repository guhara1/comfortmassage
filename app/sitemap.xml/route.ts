import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gandago-massage.com';
  const now = new Date().toISOString().split('T')[0];

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
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
  ];

  // Region pages
  const regionPages: MetadataRoute.Sitemap = [
    '/region/capital',
    '/region/chungcheong',
    '/region/honam',
    '/region/yeongnam',
    '/region/gangwon',
    '/region/jeju',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Area pages
  const areaPages: MetadataRoute.Sitemap = [
    '/area/seoul',
    '/area/gyeonggi',
    '/area/incheon',
    '/area/busan',
    '/area/daegu',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Program pages
  const programPages: MetadataRoute.Sitemap = [
    '/program/swedish',
    '/program/thai',
    '/program/aroma',
    '/program/sports',
    '/program/foot',
    '/program/deep-tissue',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Use pages
  const usePages: MetadataRoute.Sitemap = [
    '/use/home',
    '/use/hotel',
    '/use/officetel',
    '/use/apartment',
    '/use/business',
    '/use/station',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Check pages
  const checkPages: MetadataRoute.Sitemap = [
    '/check/address',
    '/check/building-access',
    '/check/apartment-access',
    '/check/hotel-policy',
    '/check/officetel-rule',
    '/check/time',
    '/check/change-policy',
    '/check/privacy',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    ...mainPages,
    ...regionPages,
    ...areaPages,
    ...programPages,
    ...usePages,
    ...checkPages,
  ];
}
