import { FC } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';

import { Colors } from '@/lib/theme/colors';
import { TABS } from '@/shared/components/CustomTabBar/constants';
import { Text } from '@/shared/ui';

import styles from './styles';

export const CustomTabBar: FC<BottomTabBarProps> = ({ state, navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {TABS.map((tab, index) => {
          const isFocused = state.index === index;

          const onPress = (): void => {
            if (!isFocused) {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              navigation.navigate(tab.route);
            }
          };

          return (
            <TouchableWithoutFeedback key={tab.route} onPress={onPress}>
              <View style={[styles.tab, isFocused ? styles.activeTab : styles.inactiveTab]}>
                <Ionicons
                  name={tab.icon}
                  size={24}
                  color={isFocused ? Colors.black : Colors.white}
                />
                {isFocused && <Text style={styles.tabText}>{tab.name}</Text>}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
};
