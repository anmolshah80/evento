'use client';

import { useEffect } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';

import 'ol/ol.css';

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
  // maptilerClient.config.apiKey = '';

  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [-118.36447399999997, 34.09824],
        zoom: 5,
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
      // const result = await maptilerClient.geocoding.forward(eventLocation);
      const result = await maptilerClient.geocoding.forward(
        '8001 West Sunset Boulevard, Los Angeles, California 90046, United States',
      );

      console.log('findCoordinateSystem result: ', result);
    };

    findCoordinateSystem();
  }, [eventLocation]);

  return <div id="map" className="w-full mx-auto h-[500px]"></div>;
};

export default MapView;

// findCoordinateSystem function result
// const findCoordinateSystemResult = {
//   type: 'FeatureCollection',
//   features: [
//     {
//       type: 'Feature',
//       properties: {
//         ref: 'osm:r113314',
//         country_code: 'us',
//         wikidata: 'Q16559',
//         kind: 'admin_area',
//         place_type_name: ['municipality'],
//       },
//       geometry: {
//         type: 'Point',
//         coordinates: [-97.74369969964027, 30.2711287437164],
//       },
//       bbox: [
//         -97.93676510453224, 30.098513365360464, -97.56052896380424,
//         30.51662574273772,
//       ],
//       center: [-97.74369969964027, 30.2711287437164],
//       place_name: 'Austin, Texas, United States',
//       place_type: ['municipality'],
//       relevance: 0.461333,
//       id: 'municipality.209389',
//       text: 'Austin',
//       place_type_name: ['municipality'],
//       context: [
//         {
//           ref: 'osm:r91939',
//           id: 'county.19731',
//           text: 'Travis',
//           country_code: 'us',
//           wikidata: 'Q110426',
//           kind: 'admin_area',
//           text_en: 'Travis',
//         },
//         {
//           ref: 'osm:r114690',
//           id: 'region.3199',
//           text: 'Texas',
//           country_code: 'us',
//           wikidata: 'Q1439',
//           kind: 'admin_area',
//           language: 'en',
//           text_en: 'Texas',
//           language_en: 'en',
//         },
//         {
//           ref: 'osm:r15806054',
//           id: 'major_landform.4970275',
//           text: 'Shoal Creek',
//           wikidata: 'Q56062828',
//           categories: ['stream'],
//           'osm:tags': {
//             wikipedia: 'en:Shoal Creek, Austin, Texas',
//             type: 'waterway',
//             waterway: 'stream',
//           },
//           text_en: 'Shoal Creek',
//         },
//         {
//           ref: 'osm:r148838',
//           id: 'country.1223',
//           text: 'United States',
//           country_code: 'us',
//           wikidata: 'Q30',
//           kind: 'admin_area',
//           language: 'en',
//           text_en: 'United States',
//           language_en: 'en',
//         },
//         {
//           ref: 'osm:n36966063',
//           id: 'continental_marine.4',
//           text: 'North America',
//           wikidata: 'Q49',
//           categories: ['continent'],
//           language: 'en',
//           'osm:tags': {
//             population: '528720588',
//             place: 'continent',
//             wikipedia: 'en:North America',
//             sqkm: '24709000',
//           },
//           text_en: 'North America',
//           language_en: 'en',
//         },
//       ],
//       language: 'en',
//       text_en: 'Austin',
//       language_en: 'en',
//       place_name_en: 'Austin, Texas, United States',
//     },
//     {
//       type: 'Feature',
//       properties: {
//         ref: 'osm:r137800',
//         country_code: 'us',
//         wikidata: 'Q780944',
//         kind: 'admin_area',
//         place_type_name: ['municipality'],
//       },
//       geometry: {
//         type: 'Point',
//         coordinates: [-92.97464992851019, 43.66799941985306],
//       },
//       bbox: [
//         -93.04922875016928, 43.6417010197728, -92.91901085525751,
//         43.7133411075499,
//       ],
//       center: [-92.97464992851019, 43.66799941985306],
//       place_name: 'Austin, Minnesota, United States',
//       place_type: ['municipality'],
//       relevance: 0.408889,
//       id: 'municipality.213181',
//       text: 'Austin',
//       place_type_name: ['municipality'],
//       context: [
//         {
//           ref: 'osm:r1792988',
//           id: 'county.18597',
//           text: 'Mower',
//           country_code: 'us',
//           wikidata: 'Q490450',
//           kind: 'admin_area',
//           text_en: 'Mower',
//         },
//         {
//           ref: 'osm:r165471',
//           id: 'region.3137',
//           text: 'Minnesota',
//           country_code: 'us',
//           wikidata: 'Q1527',
//           kind: 'admin_area',
//           language: 'en',
//           text_en: 'Minnesota',
//           language_en: 'en',
//         },
//         {
//           ref: 'osm:r10251530',
//           id: 'major_landform.5059425',
//           text: 'Cedar River',
//           categories: ['river'],
//           'osm:tags': {
//             type: 'waterway',
//             waterway: 'river',
//           },
//           text_en: 'Cedar River',
//         },
//         {
//           ref: 'osm:r148838',
//           id: 'country.1223',
//           text: 'United States',
//           country_code: 'us',
//           wikidata: 'Q30',
//           kind: 'admin_area',
//           language: 'en',
//           text_en: 'United States',
//           language_en: 'en',
//         },
//         {
//           ref: 'osm:n36966063',
//           id: 'continental_marine.4',
//           text: 'North America',
//           wikidata: 'Q49',
//           categories: ['continent'],
//           language: 'en',
//           'osm:tags': {
//             population: '528720588',
//             place: 'continent',
//             wikipedia: 'en:North America',
//             sqkm: '24709000',
//           },
//           text_en: 'North America',
//           language_en: 'en',
//         },
//       ],
//       text_en: 'Austin',
//       place_name_en: 'Austin, Minnesota, United States',
//     },
//     {
//       type: 'Feature',
//       properties: {
//         ref: 'osm:r7836417',
//         country_code: 'us',
//         wikidata: 'Q2872106',
//         kind: 'admin_area',
//         place_type_name: ['neighbourhood'],
//       },
//       geometry: {
//         type: 'Point',
//         coordinates: [-87.76486426591873, 41.88803165235631],
//       },
//       bbox: [
//         -87.80622929334639, 41.865461133656375, -87.7393789216876,
//         41.923322104872554,
//       ],
//       center: [-87.76486426591873, 41.88803165235631],
//       place_name: 'Austin, Chicago, United States',
//       place_type: ['neighbourhood'],
//       relevance: 0.408889,
//       id: 'neighbourhood.66261',
//       text: 'Austin',
//       place_type_name: ['neighbourhood'],
//       context: [
//         {
//           ref: 'osm:r122604',
//           id: 'municipality.200983',
//           text: 'Chicago',
//           country_code: 'us',
//           wikidata: 'Q1297',
//           kind: 'admin_area',
//           language: 'en',
//           text_en: 'Chicago',
//           language_en: 'en',
//         },
//         {
//           ref: 'osm:r16017162',
//           id: 'joint_municipality.24402',
//           text: 'West Chicago Township',
//           country_code: 'us',
//           wikidata: 'Q85815001',
//           kind: 'admin_area',
//           text_en: 'West Chicago Township',
//         },
//         {
//           ref: 'osm:r122576',
//           id: 'county.19556',
//           text: 'Cook',
//           country_code: 'us',
//           wikidata: 'Q108418',
//           kind: 'admin_area',
//           text_en: 'Cook',
//         },
//         {
//           ref: 'osm:r122586',
//           id: 'region.3084',
//           text: 'Illinois',
//           country_code: 'us',
//           wikidata: 'Q1204',
//           kind: 'admin_area',
//           language: 'en',
//           text_en: 'Illinois',
//           language_en: 'en',
//         },
//         {
//           ref: 'osm:r148838',
//           id: 'country.1223',
//           text: 'United States',
//           country_code: 'us',
//           wikidata: 'Q30',
//           kind: 'admin_area',
//           language: 'en',
//           text_en: 'United States',
//           language_en: 'en',
//         },
//         {
//           ref: 'osm:n36966063',
//           id: 'continental_marine.4',
//           text: 'North America',
//           wikidata: 'Q49',
//           categories: ['continent'],
//           language: 'en',
//           'osm:tags': {
//             population: '528720588',
//             place: 'continent',
//             wikipedia: 'en:North America',
//             sqkm: '24709000',
//           },
//           text_en: 'North America',
//           language_en: 'en',
//         },
//       ],
//       text_en: 'Austin',
//       place_name_en: 'Austin, Chicago, United States',
//     },
//     {
//       type: 'Feature',
//       properties: {
//         ref: 'osm:r188571',
//         country_code: 'us',
//         wikidata: 'Q1132003',
//         kind: 'admin_area',
//         place_type_name: ['municipality'],
//       },
//       geometry: {
//         type: 'Point',
//         coordinates: [-75.78269328922033, 41.563132944818605],
//       },
//       bbox: [
//         -75.79085625708103, 41.54744212908721, -75.7720871642232,
//         41.5705861274727,
//       ],
//       center: [-75.78269328922033, 41.563132944818605],
//       place_name: 'Factoryville, Pennsylvania, United States',
//       place_type: ['municipality'],
//       relevance: 0.408889,
//       id: 'municipality.217853',
//       text: 'Factoryville',
//       place_type_name: ['municipality'],
//       context: [
//         {
//           ref: 'osm:r417773',
//           id: 'county.18844',
//           text: 'Wyoming',
//           country_code: 'us',
//           wikidata: 'Q495677',
//           kind: 'admin_area',
//           text_en: 'Wyoming',
//         },
//         {
//           ref: 'osm:r162109',
//           id: 'region.3092',
//           text: 'Pennsylvania',
//           country_code: 'us',
//           wikidata: 'Q1400',
//           kind: 'admin_area',
//           language: 'en',
//           text_en: 'Pennsylvania',
//           language_en: 'en',
//         },
//         {
//           ref: 'osm:w1213744046',
//           id: 'major_landform.6772939',
//           text: 'South Branch Tunkhannock Creek',
//           country_code: 'us',
//           categories: ['stream'],
//           'osm:tags': {
//             waterway: 'stream',
//           },
//           text_en: 'South Branch Tunkhannock Creek',
//         },
//         {
//           ref: 'osm:r148838',
//           id: 'country.1223',
//           text: 'United States',
//           country_code: 'us',
//           wikidata: 'Q30',
//           kind: 'admin_area',
//           language: 'en',
//           text_en: 'United States',
//           language_en: 'en',
//         },
//         {
//           ref: 'osm:n36966063',
//           id: 'continental_marine.4',
//           text: 'North America',
//           wikidata: 'Q49',
//           categories: ['continent'],
//           language: 'en',
//           'osm:tags': {
//             population: '528720588',
//             place: 'continent',
//             wikipedia: 'en:North America',
//             sqkm: '24709000',
//           },
//           text_en: 'North America',
//           language_en: 'en',
//         },
//       ],
//       text_en: 'Factoryville',
//       place_name_en: 'Factoryville, Pennsylvania, United States',
//     },
//     {
//       type: 'Feature',
//       properties: {
//         ref: 'osm:r188752',
//         country_code: 'us',
//         wikidata: 'Q1131435',
//         kind: 'admin_area',
//         place_type_name: ['municipality'],
//       },
//       geometry: {
//         type: 'Point',
//         coordinates: [-78.09113547205925, 41.6315276029801],
//       },
//       bbox: [
//         -78.1116721406579, 41.62378220778471, -78.06888822466135,
//         41.650608189316195,
//       ],
//       center: [-78.09113547205925, 41.6315276029801],
//       place_name: 'Austin, Pennsylvania, United States',
//       place_type: ['municipality'],
//       relevance: 0.408889,
//       id: 'municipality.217998',
//       text: 'Austin',
//       place_type_name: ['municipality'],
//       context: [
//         {
//           ref: 'osm:r416679',
//           id: 'county.18326',
//           text: 'Potter',
//           country_code: 'us',
//           wikidata: 'Q501340',
//           kind: 'admin_area',
//           text_en: 'Potter',
//         },
//         {
//           ref: 'osm:r162109',
//           id: 'region.3092',
//           text: 'Pennsylvania',
//           country_code: 'us',
//           wikidata: 'Q1400',
//           kind: 'admin_area',
//           language: 'en',
//           text_en: 'Pennsylvania',
//           language_en: 'en',
//         },
//         {
//           ref: 'osm:w823010274',
//           id: 'major_landform.6778641',
//           text: 'Freeman Run',
//           country_code: 'us',
//           wikidata: 'Q49917035',
//           categories: [],
//           'osm:tags': {},
//           text_en: 'Freeman Run',
//         },
//         {
//           ref: 'osm:r148838',
//           id: 'country.1223',
//           text: 'United States',
//           country_code: 'us',
//           wikidata: 'Q30',
//           kind: 'admin_area',
//           language: 'en',
//           text_en: 'United States',
//           language_en: 'en',
//         },
//         {
//           ref: 'osm:n36966063',
//           id: 'continental_marine.4',
//           text: 'North America',
//           wikidata: 'Q49',
//           categories: ['continent'],
//           language: 'en',
//           'osm:tags': {
//             population: '528720588',
//             place: 'continent',
//             wikipedia: 'en:North America',
//             sqkm: '24709000',
//           },
//           text_en: 'North America',
//           language_en: 'en',
//         },
//       ],
//       text_en: 'Austin',
//       place_name_en: 'Austin, Pennsylvania, United States',
//     },
//   ],
//   query: ['austin', 'laugh', 'factory'],
//   attribution:
//     '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
// };
