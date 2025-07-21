import { ComponentProps } from 'react';

import { Ionicons } from '@expo/vector-icons';

export type IoniconsName = ComponentProps<typeof Ionicons>['name'];

type TabInfo = {
  name: 'Главная' | 'Маршрут' | 'Профиль';
  icon: IoniconsName;
  route: 'home' | 'navigator' | 'profile';
};

export const TABS: TabInfo[] = [
  { name: 'Главная', icon: 'home', route: 'home' },
  { name: 'Маршрут', icon: 'location-sharp', route: 'navigator' },
  { name: 'Профиль', icon: 'person', route: 'profile' },
];
