'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Event } from '@/types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in Next.js
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

const DefaultIcon = L.icon({
  iconUrl: icon.src,
  iconRetinaUrl: iconRetina.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface EventMapProps {
  events: Event[];
  selectedEventId?: string;
  onEventClick?: (eventId: string) => void;
}

// Component to handle map bounds when events change
function MapBoundsHandler({ events }: { events: Event[] }) {
  const map = useMap();

  useEffect(() => {
    if (events.length > 0) {
      const validCoordinates = events
        .filter(event => event.location.coordinates)
        .map(event => [
          event.location.coordinates!.lat,
          event.location.coordinates!.lng,
        ] as [number, number]);

      if (validCoordinates.length > 0) {
        if (validCoordinates.length === 1) {
          map.setView(validCoordinates[0], 10);
        } else {
          const bounds = L.latLngBounds(validCoordinates);
          map.fitBounds(bounds, { padding: [50, 50] });
        }
      }
    }
  }, [events, map]);

  return null;
}

export default function EventMap({ events, selectedEventId, onEventClick }: EventMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Filter events that have coordinates
  const eventsWithCoordinates = events.filter(event => event.location.coordinates);

  if (!isMounted) {
    return (
      <div className="w-full h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  if (eventsWithCoordinates.length === 0) {
    return (
      <div className="w-full h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-2">No events with locations to display</p>
          <p className="text-gray-400 text-sm">Events will appear on the map when location data is available</p>
        </div>
      </div>
    );
  }

  // Calculate center for initial view (average of all coordinates)
  const centerLat = eventsWithCoordinates.reduce((sum, event) => 
    sum + event.location.coordinates!.lat, 0) / eventsWithCoordinates.length;
  const centerLng = eventsWithCoordinates.reduce((sum, event) => 
    sum + event.location.coordinates!.lng, 0) / eventsWithCoordinates.length;

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapBoundsHandler events={eventsWithCoordinates} />
        {eventsWithCoordinates.map((event) => (
          <Marker
            key={event.id}
            position={[event.location.coordinates!.lat, event.location.coordinates!.lng]}
            eventHandlers={{
              click: () => onEventClick?.(event.id),
            }}
          >
            <Popup>
              <div className="p-2 max-w-xs">
                <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-600">
                    <span className="font-semibold">📍</span> {event.location.venue}
                  </p>
                  <p className="text-gray-600">
                    {event.location.city}, {event.location.country}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">📅</span>{' '}
                    {new Date(event.startDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">🎫</span> {event.registered}/{event.capacity} registered
                  </p>
                  {event.type && (
                    <p className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mt-2">
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </p>
                  )}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
