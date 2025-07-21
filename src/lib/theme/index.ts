import {
  DarkTheme as NavigationDark,
  DefaultTheme as NavigationLight,
  type Theme as NavigationTheme,
} from '@react-navigation/native';
import type { StatusBarStyle } from 'expo-status-bar';

type ExtendedTheme = NavigationTheme & {
  statusBar: StatusBarStyle;
};

export const LightTheme: ExtendedTheme = {
  ...NavigationLight,
  statusBar: 'dark',
};

export const DarkTheme: ExtendedTheme = {
  ...NavigationDark,
  statusBar: 'light',
};
