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
      <Drawer.Screen name="(tabs)" />
      <Drawer.Screen name="settings" />
      <Drawer.Screen name="profile" />
      <Drawer.Screen name="invites" />
      <Drawer.Screen name="my-leaderboards" />
      <Drawer.Screen name="vault" />
    </Drawer>
  );
}
