import { FC, useRef, useState } from 'react';

import { View, KeyboardAvoidingView, SafeAreaView, Text } from 'react-native';
import MapView, { UrlTile, Marker, Polyline } from 'react-native-maps';

import { useGeolocation } from '@/features/map/hooks/useGeolocation';
import { Input } from '@/shared/ui/FormFieds/Input';

import styles from './styles';

export const NavigatorScreen: FC = () => {
  const mapRef = useRef<MapView | null>(null);
  const { location, error } = useGeolocation({ mapRef });

  const [searchValue, setSearchValue] = useState('');

  const routeCoords = [
    { latitude: 55.751244, longitude: 37.618423 },
    { latitude: 56.8587, longitude: 35.9176 },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.searchInputWrapper}>
          <Input
            placeholder="Поиск места или адреса..."
            value={searchValue}
            onChangeText={setSearchValue}
            containerStyle={styles.inputContainer}
          />
        </View>

        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: 55.751244,
            longitude: 37.618423,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
          showsUserLocation
          showsMyLocationButton>
          <UrlTile
            urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maximumZ={19}
            flipY={false}
          />

          {location && (
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Вы здесь"
              pinColor="blue"
            />
          )}

          <Polyline coordinates={routeCoords} strokeColor="#007AFF" strokeWidth={4} />
        </MapView>

        {error && <Text style={{ color: 'red', padding: 16 }}>{error}</Text>}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
