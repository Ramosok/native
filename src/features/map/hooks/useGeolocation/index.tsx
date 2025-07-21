import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

import type { LocationObject } from 'expo-location';
import { Platform } from 'react-native';
import MapView from 'react-native-maps';

import { requestLocationWithPermission } from '@/features/map/utils/requestLocationWithPermission';

interface UseGeolocationProps {
  mapRef?: RefObject<MapView | null>;
  autoCenter?: boolean;
}

export const useGeolocation = ({ mapRef, autoCenter = true }: UseGeolocationProps = {}) => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isMountedRef = useRef(true);

  const loadLocation = useCallback(async () => {
    try {
      const loc = await requestLocationWithPermission();
      if (!isMountedRef.current) return;

      setLocation(loc);

      if (Platform.OS !== 'web' && mapRef?.current && autoCenter) {
        mapRef.current.animateToRegion({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
      }
    } catch (e: unknown) {
      if (!isMountedRef.current) return;

      if (e instanceof Error) {
        console.error('[Geolocation error]:', e);
        setError(e.message);
      } else {
        console.error('[Unknown Geolocation error]:', e);
        setError('Неизвестная ошибка при получении геолокации');
      }
    }
  }, [mapRef, autoCenter]);

  useEffect(() => {
    isMountedRef.current = true;
    loadLocation();

    return () => {
      isMountedRef.current = false;
    };
  }, [loadLocation]);

  return {
    location,
    error,
    reload: loadLocation,
    isLoading: location === null && error === null,
  };
};
