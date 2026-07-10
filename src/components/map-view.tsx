'use client';

import { useEffect, useRef, useState } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Style, Icon } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

import 'ol/ol.css';

import StaticMapView from '@/components/static-map-view';

import { MAPTILER_API_KEY } from '@/lib/constants';

interface MapViewProps {
  address: string;
  lat: number;
  lon: number;
}

const MapView = ({ address, lat, lon }: MapViewProps) => {
  const [isInteractive, setIsInteractive] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);

  // Initialise OpenLayers map when becoming interactive
  useEffect(() => {
    if (!isInteractive || !mapContainerRef.current || mapRef.current) return;

    const map = new Map({
      target: mapContainerRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${MAPTILER_API_KEY}`,
            attributions: '&copy; MapTiler &copy; OpenStreetMap contributors',
            maxZoom: 18,
            crossOrigin: 'anonymous',
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([lon, lat]),
        zoom: 15,
      }),
    });

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            geometry: new Point(fromLonLat([lon, lat])),
          }),
        ],
      }),
      style: new Style({
        image: new Icon({
          scale: 0.8,
          anchor: [0.5, 1],
          crossOrigin: 'anonymous',
          src: '/maptiler-marker-icon.png', // local image in public folder
        }),
      }),
    });

    map.addLayer(vectorLayer);

    mapRef.current = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.dispose();
        mapRef.current = null;
      }
    };
  }, [isInteractive, lat, lon]);

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {!isInteractive ? (
        <div
          onClick={() => setIsInteractive(true)}
          className="relative flex cursor-pointer items-center justify-center"
        >
          <StaticMapView address={address} lat={lat} lon={lon} />
        </div>
      ) : (
        <div
          ref={mapContainerRef}
          className="h-50 w-full overflow-hidden rounded-lg shadow-md sm:h-125"
        />
      )}
    </div>
  );
};

export default MapView;
