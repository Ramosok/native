module.exports = {
  name: 'React Native App',
  slug: 'reactnative',
  version: '1.0.0',
  orientation: 'portrait',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  jsEngine: 'hermes',
  platforms: ['ios', 'android', 'web'],
  privacy: 'unlisted',
  splash: {
    image: './assets/images/splashscreen.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },

  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.anonymous.reactnative',
    buildNumber: '1.0.0',
    jsEngine: 'jsc',
  },
  android: {
    package: 'com.anonymous.reactnative',
    versionCode: 1,
    adaptiveIcon: {
      backgroundColor: '#ffffff',
    },
    edgeToEdgeEnabled: true,
    jsEngine: 'hermes',
  },
  web: {
    bundler: 'metro',
    output: 'static',
    rendererPath: './src/app',
  },
  plugins: [
    [
      'expo-splash-screen',
      {
        image: './assets/images/splashscreen.png',
      },
    ],
    'expo-router',
    [
      'expo-font',
      {
        fonts: ['src/shared/assets/fonts/Inter-VariableFont_opsz,wght.ttf'],
      },
    ],
  ],
  extra: {
    apiBaseUrl: process.env.API_BASE_URL,
    eas: {
      projectId: '7b6f4c79-f8c8-4085-801c-8e79f3709156',
    },
    env: {
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
    },
  },
  experiments: {
    typedRoutes: true,
  },
};
