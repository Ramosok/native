import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerType: 'slide',
          drawerStyle: {
            height: '90%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          },
          overlayColor: 'transparent',
        }}>
        <Drawer.Screen
          name="auth"
          options={{
            drawerLabel: 'Auth',
            title: 'Authentication',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
