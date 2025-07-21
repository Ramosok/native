import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Navigator from '@/app/(protected)/navigator';
import Profile from '@/app/(protected)/profile';
import Home from '@/app/(public)/home/index';
import { CustomTabBar } from '@/shared/components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function HomeLayout() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="navigator" component={Navigator} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}
