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
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.anonymous.reactnative',
    buildNumber: '1.0.0',
  },
  android: {
    package: 'com.anonymous.reactnative',
    versionCode: 1,
    adaptiveIcon: {
      backgroundColor: '#ffffff',
    },
    edgeToEdgeEnabled: true,
  },
  web: {
    bundler: 'metro',
    output: 'static',
    rendererPath: './src/app',
  },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        imageWidth: 200,
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
    ],
  ],
  extra: {
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
