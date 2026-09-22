import { MAPTILER_API_KEY } from '@/lib/constants';
import { isNetworkError } from '@/lib/network';

export async function getCoordinatesFromAddress(
  address: string,
): Promise<{ lat: number; lon: number } | null> {
  if (!MAPTILER_API_KEY) {
    console.warn('MAPTILER_API_KEY is missing, skipping map geocoding.');

    return null;
  }

  const encoded = encodeURIComponent(address);
  const url = `https://api.maptiler.com/geocoding/${encoded}.json?key=${MAPTILER_API_KEY}&limit=1`;

  try {
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
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return null;
    }

    if (isNetworkError(error)) {
      console.warn('Offline or network error while fetching map coordinates.');

      return null;
    }

    console.error('Unexpected geocoding error:', error);

    return null;
  }
}
