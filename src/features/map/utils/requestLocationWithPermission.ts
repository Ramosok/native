import * as Location from 'expo-location';
import { PermissionsAndroid, Platform } from 'react-native';

export const requestLocationWithPermission = async (): Promise<Location.LocationObject> => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      throw new Error('Нет доступа к геолокации');
    }
  }

  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    throw new Error('Нет доступа к геолокации');
  }

  return await Location.getCurrentPositionAsync({});
};
