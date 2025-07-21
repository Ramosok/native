import { FC } from 'react';

import { View, StyleSheet, Button, Dimensions, Platform } from 'react-native';

import { NavigatorScreen } from '@/features/map/ui/NavigatorScreen';
import { authStore } from '@/lib/stores/auth';

const { width, height } = Dimensions.get('window');

const Navigator: FC = () => {
  const handleLogOut = () => {
    authStore.getState().logout();
  };

  return (
    <>
      <NavigatorScreen />
      <View style={styles.bottomPanel}>
        <Button title="Выйти" onPress={handleLogOut} />
      </View>
    </>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width,
    height,
  },
  bottomPanel: {
    position: 'absolute',
    bottom: 30,
    left: 16,
    right: 16,
  },
});
