import React, { LegacyRef, useEffect, useRef, useState } from 'react';

import mapboxgl from 'mapbox-gl';

import './App.css';

const App = (): JSX.Element => {
  const [lng, setLng] = useState<number>(-70.9);
  const [lat, setLat] = useState<number>(42.35);
  const [zoom, setZoom] = useState<number>(9);
  const [maploaded, setMapLoaded] = useState<boolean>(false);
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

    setMapLoaded(true);

    return () => map.remove();
  }, []);

  return (
    <div>
      {maploaded && (
        <div id="lng-lat-col" className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      )}
      <section
        className="map-container"
        ref={(mapContainer as unknown) as LegacyRef<HTMLElement>}
      />
    </div>
  );
};

export default App;
