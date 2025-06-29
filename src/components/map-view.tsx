'use client';

import { useEffect } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';

// Import the whole library
import * as maptilerClient from '@maptiler/client';

// Or import only the bits you need
// import {
//   config,
//   geocoding,
//   geolocation,
//   coordinates,
//   data,
//   staticMaps,
//   elevation,
//   math,
// } from '@maptiler/client';

type MapViewProps = {
  eventLocation: string;
};

const MapView = ({ eventLocation }: MapViewProps) => {
  // add your API key
  maptilerClient.config.apiKey =
    process.env.NEXT_PUBLIC_MAPTILER_PROTECTED_API_KEY!;

  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  useEffect(() => {
    // Geocoding -> https://api.maptiler.com/geocoding/Seattle%20Art%20Gallery.json?key=API_KEY
    // Coordinates -> https://api.maptiler.com/coordinates/search/Seattle%20Art%20Gallery.json?key=API_KEY
    const findCoordinateSystem = async () => {
      // in an async function, or as a 'thenable':
      // const result = await maptilerClient.coordinates.search(eventLocation);
      const result = await maptilerClient.geocoding.forward(eventLocation);

      console.log('findCoordinateSystem result: ', result);
    };

    findCoordinateSystem();
  }, [eventLocation]);

  return <div id="map" className="max-w-5xl mx-auto h-[500px]"></div>;
};

export default MapView;
