"use client"

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet icons in Next.js
const iconRetinaUrl = '/leaflet/marker-icon-2x.png';
const iconUrl = '/leaflet/marker-icon.png';
const shadowUrl = '/leaflet/marker-shadow.png';

export default function MapClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delete default icons and replace with raw URLs to prevent Next.js 404s
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default?.src || require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png').default?.src || require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png').default?.src || require('leaflet/dist/images/marker-shadow.png'),
    });
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-slate-100 dark:bg-slate-800 animate-pulse flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800">
        <span className="text-slate-400 font-medium">Đang tải bản đồ...</span>
      </div>
    );
  }

  // Common locations
  const locations = {
    hanoi: [21.0285, 105.8542] as [number, number],
    hai_phong: [20.8449, 106.6881] as [number, number],
    da_nang: [16.0471, 108.2062] as [number, number],
    hcm: [10.8231, 106.6297] as [number, number],
    can_tho: [10.0452, 105.7469] as [number, number],
    truck1: [21.0100, 106.0000] as [number, number], // Somewhere between HN and HP
    truck2: [15.0000, 108.5000] as [number, number], // Between DN and HCM
  };

  const polyline1 = [locations.hanoi, locations.truck1, locations.hai_phong];
  const polyline2 = [locations.da_nang, locations.truck2, locations.hcm];

  // Custom truck icon definition
  const truckIcon = new L.DivIcon({
    className: 'bg-transparent',
    html: `<div class="w-8 h-8 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h2M10 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg></div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  const truckWarningIcon = new L.DivIcon({
    className: 'bg-transparent',
    html: `<div class="w-8 h-8 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg animate-pulse"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h2M10 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg></div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  return (
    <div className="w-full h-full rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 relative z-0">
      <MapContainer 
        center={[16.0, 106.0]} 
        zoom={6} 
        style={{ height: '100%', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Routes */}
        <Polyline positions={polyline1} color="blue" weight={3} opacity={0.6} dashArray="5, 10" />
        <Polyline positions={polyline2} color="green" weight={3} opacity={0.6} dashArray="5, 10" />

        {/* Moving Trucks */}
        <Marker position={locations.truck1} icon={truckIcon}>
          <Popup className="rounded-lg">
            <div className="font-semibold text-sm">Xe 29C-123.45</div>
            <div className="text-xs text-slate-500 mb-1">Tài xế: Lưu Văn A</div>
            <div className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 flex items-center gap-1 rounded inline-flex">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Đang di chuyển: 65km/h
            </div>
            <div className="text-xs mt-2 border-t pt-2 text-slate-600">
              Điểm đến: <strong>Hải Phòng</strong> (Còn 45km)
            </div>
          </Popup>
        </Marker>

        <Marker position={locations.truck2} icon={truckWarningIcon}>
          <Popup>
            <div className="font-semibold text-sm">Xe 15C-678.90</div>
            <div className="text-xs text-slate-500 mb-1">Tài xế: Trần Kim B</div>
            <div className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 flex items-center gap-1 rounded inline-flex">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Cảnh báo: Áp suất lốp
            </div>
            <div className="text-xs mt-2 border-t pt-2 text-slate-600">
              Vị trí: <strong>Cao tốc Đà Nẵng - QNgai</strong>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
