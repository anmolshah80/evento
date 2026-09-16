import Image from 'next/image';

interface StaticMapViewProps {
  address: string;
  lat: number;
  lon: number;
}

const StaticMapView = ({ address, lat, lon }: StaticMapViewProps) => {
  // Geoapify static map image URL
  const staticMapUrl = `https://maps.geoapify.com/v1/staticmap?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}&style=osm-bright&zoom=15&width=600&height=400&center=lonlat:${lon},${lat}&marker=lonlat:${lon},${lat};type:awesome;color:%23bb3f73;size:x-large`;

  return (
    <>
      <Image
        src={staticMapUrl}
        alt={`Map of ${address}`}
        width={600}
        height={400}
        loading="eager"
        className="h-auto w-full rounded-lg shadow-md md:h-112.5 md:w-175"
        onError={(e) => {
          // fallback if the image fails to load
          e.currentTarget.style.display = 'none';

          // // optionally show a fallback message
          // const fallback = document.createElement('p');

          // fallback.className = 'text-white/50 py-8';
          // fallback.textContent = 'Static map temporarily unavailable';

          // e.currentTarget.parentNode?.appendChild(fallback);
        }}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-black/70 px-4 py-2 text-sm text-white hover:bg-black">
        Click to view interactive map
      </div>
    </>
  );
};

export default StaticMapView;
