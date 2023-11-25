import { type DrawerHeaderProps } from '@react-navigation/drawer';
import { useTheme } from '@rneui/themed';
import { Stack } from 'expo-router';
import Drawer from 'expo-router/drawer';

import { Avatar } from '@/components/Avatar';
import { HeaderButton, HeaderCustom } from '@/components/HeaderCustom';
import { GearSix } from '@/components/Icons';
import { Logo } from '@/components/Logo';

export default function HomeLayout() {
  const {
    theme: {
      colors: {
        elements: { highEm },
      },
    },
  } = useTheme();

  const renderHeaderCustom = (props: DrawerHeaderProps) => {
    return (
      <HeaderCustom>
        <HeaderButton onPress={props.navigation.toggleDrawer}>
          <Avatar />
        </HeaderButton>
        <Logo />
        <HeaderButton>
          <GearSix color={highEm} height={24} width={24} />
        </HeaderButton>
      </HeaderCustom>
    );
  };

  return (
    <Stack>
      <Drawer.Screen
        name="index"
        options={{
          header: renderHeaderCustom,
        }}
      />
    </Stack>
  );
}
