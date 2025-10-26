import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import { useEffect, useState } from 'react';

const DropPointMap = () => {
  const [dropPoints, setDropPoints] = useState([]);

  useEffect(() => {
    const fetchDropPoints = async () => {
      try {
        // Fetch data dari OpenLitterMap (khusus Indonesia)
        const response = await axios.get('https://api.openlittermap.com/api/v0.1/litter-data?country_code=ID');

        // Ambil data yang punya koordinat valid
        const features = response.data?.features || [];
        const points = features.map((f, i) => ({
          id: i,
          name: f.properties?.category || 'Litter Point',
          lat: f.geometry?.coordinates?.[1],
          lng: f.geometry?.coordinates?.[0],
          desc: f.properties?.material || 'Data dari OpenLitterMap',
        })).filter(p => p.lat && p.lng);

        setDropPoints(points);
      } catch (err) {
        console.error('Error fetching OpenLitterMap data:', err);
      }
    };

    fetchDropPoints();
  }, []);

  const markerIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <MapContainer center={[-2.5, 118]} zoom={4.5} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dropPoints.map((point) => (
          <Marker key={point.id} position={[point.lat, point.lng]} icon={markerIcon}>
            <Popup>
              <strong>{point.name}</strong>
              <br />
              {point.desc}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default DropPointMap;