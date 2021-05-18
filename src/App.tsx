import React, { LegacyRef, useEffect, useRef, useState } from 'react';

import mapboxgl from 'mapbox-gl';

import './App.css';
import Test from 'components/Test';

const App = (): JSX.Element => {
  const [lng, setLng] = useState<number>(-70.9);
  const [lat, setLat] = useState<number>(42.35);
  const [zoom, setZoom] = useState<number>(9);
  const [maploaded, setMapLoaded] = useState<boolean>(false);
  const [mainMap, setMainMap] = useState<mapboxgl.Map | null>(null);
  const mapContainer = useRef<HTMLElement>(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibmF3aWRzdGVlbmh1aXMiLCJhIjoiY2tpdWMybW9tMDl6djJ0bno3bDFybWdjdiJ9.bsWX-lNARk_IS2MnQ8J78g';
    const map = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      setLng((map.getCenter().lng.toFixed(4) as unknown) as number);
      setLat((map.getCenter().lat.toFixed(4) as unknown) as number);
      setZoom((map.getZoom().toFixed(2) as unknown) as number);
    });

    setMainMap(map);
    map.on('load', () => {
      setMapLoaded(true);
    });
    return () => map.remove();
  }, []);

  // Build layers, add to map, add onClick

  const addLayer = () => {
    if (mainMap === null) return;
    if (mainMap.getLayer('test-data-layer')) {
      console.log('got here');
      removeOnClick();
      mainMap.removeLayer('test-data-layer');
      mainMap.removeSource('testSource');
      return;
    }
    // const layer = ;
    if (maploaded) {
      const parsedLocation: GeoJSON.Feature = {
        geometry: {
          type: 'Point',
          coordinates: [lng, lat]
        },
        id: 1,
        properties: {
          attributes: 'hi'
        },
        type: 'Feature'
      };

      const data: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
        type: 'FeatureCollection',
        features: [parsedLocation]
      };

      const geoData: mapboxgl.GeoJSONSourceRaw = {
        type: 'geojson',
        data: data
      };

      mainMap.addSource('testSource', geoData);

      mainMap.addLayer({
        id: 'test-data-layer',
        type: 'circle',
        source: 'testSource',
        paint: {
          'circle-radius': 15,
          'circle-color': '#e02810',
          'circle-opacity': 1
        }
      });

      mainMap.on('mouseenter', 'test-data-layer', () => {
        mainMap.getCanvas().style.cursor = 'pointer';
      });
      mainMap.on('mouseleave', 'test-data-layer', () => {
        mainMap.getCanvas().style.cursor = '';
      });

      mainMap.on('click', 'test-data-layer', onClick);
    }
  };

  const removeOnClick = () => {
    mainMap?.off('click', 'test-data-layer', onClick);
  };

  const onClick = () => {
    console.log('clicked');
  };

  return (
    <div>
      {maploaded && (
        <div data-testid="test" id="lng-lat-col" className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      )}
      <section
        className="map-container"
        ref={(mapContainer as unknown) as LegacyRef<HTMLElement>}
      />
      <div className="buttons">
        <button onClick={addLayer}>Toggle Layer</button>
        <button onClick={removeOnClick}>Remove onClick</button>
      </div>
    </div>
  );
};

export default App;
