import { MAPTILER_API_KEY } from '@/lib/constants';

export async function getCoordinatesFromAddress(
  address: string,
): Promise<{ lat: number; lon: number } | null> {
  if (!MAPTILER_API_KEY) throw new Error('MAPTILER_API_KEY is missing');

  const encoded = encodeURIComponent(address);

  const url = `https://api.maptiler.com/geocoding/${encoded}.json?key=${MAPTILER_API_KEY}&limit=1`;

  const res = await fetch(url);

  if (!res.ok) {
    console.error('Geocoding error:', res.status);

    return null;
  }

  const data = await res.json();

  if (data.features?.length) {
    const [lon, lat] = data.features[0].geometry.coordinates;

    return { lat, lon };
  }

  return null;
}
