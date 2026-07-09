import { notFound } from 'next/navigation';
import { getCity } from '@/lib/regions';
import {
  cityHasAreaGroups,
  SEOUL_AREA_GROUPS,
  SEOUL_TOP_LIFE_ZONES,
} from '@/lib/seoul';
import CityMenu from '@/components/CityMenu';

export default async function CityLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const found = getCity(city);
  if (!found) notFound();
  const { city: c } = found;
  const hasAreaGroups = cityHasAreaGroups(city);

  return (
    <div>
      <CityMenu
        citySlug={c.slug}
        cityName={c.name}
        hasAreaGroups={hasAreaGroups}
        areaGroups={hasAreaGroups ? SEOUL_AREA_GROUPS : []}
        topLifeZones={hasAreaGroups ? SEOUL_TOP_LIFE_ZONES : []}
      />
      <div className="pb-16 lg:pb-0">{children}</div>
    </div>
  );
}
