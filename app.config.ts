import 'dotenv/config';

export default {
  name: 'React Native App',
  slug: 'react-native-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  jsEngine: 'hermes' as const,
  platforms: ['ios', 'android', 'web'] as const,
  privacy: 'unlisted' as const,

  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain' as const,
    backgroundColor: '#ffffff',
  },

  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.yourcompany.reactnative',
    buildNumber: '1.0.0',
  },

  android: {
    package: 'com.yourcompany.reactnative',
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    edgeToEdgeEnabled: true,
  },

  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/favicon.png',
    rendererPath: './src/app',
  },

  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        image: './assets/splash.png',
        imageWidth: 200,
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
    ],
  ],

  experiments: {
    typedRoutes: true,
  },

  extra: {
    env: {
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
    },
  },
};
