import Constants from 'expo-constants';

export const BASE_URL = Constants?.expoConfig?.extra?.apiBaseUrl;

if (!BASE_URL) throw new Error('BASE_URL is not defined');
