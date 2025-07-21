import { ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { DarkTheme, LightTheme } from '@/lib/theme';
import { QueryProvider } from '@/providers/QueryProvider';

export default function RootLayout() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : LightTheme;

  return (
    <QueryProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView>
          <ThemeProvider value={theme}>
            <StatusBar style="light" animated />
            <Slot screenOptions={{ headerShown: false }} />
          </ThemeProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </QueryProvider>
  );
}
