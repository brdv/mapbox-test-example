export const buildDataSource = (
  features: GeoJSON.Feature[]
): mapboxgl.GeoJSONSourceRaw => ({
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features
  }
});
