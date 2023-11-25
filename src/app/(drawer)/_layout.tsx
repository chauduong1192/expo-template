import { useTheme } from '@rneui/themed';
import { Drawer } from 'expo-router/drawer';

import { DrawerContentCustom } from '@/components/DrawerContentCustom';
import { UserNav } from '@/components/UserNav';

export default function DrawerLayout() {
  const {
    theme: {
      colors: {
        base: { bgAlternate },
      },
    },
  } = useTheme();

  return (
    <Drawer
      drawerContent={(props) => (
        <DrawerContentCustom {...props}>
          <UserNav />
        </DrawerContentCustom>
      )}
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: 0,
        drawerStyle: { backgroundColor: bgAlternate, width: 330 },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="setting"
        options={{
          drawerLabel: 'Setting',
          title: 'Setting',
        }}
      />
    </Drawer>
  );
}
