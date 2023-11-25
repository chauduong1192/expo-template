import { type NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import { Stack } from 'expo-router';

import { Avatar } from '@/components/Avatar';
import { HeaderButton, HeaderCustom } from '@/components/HeaderCustom';
import { GearSix } from '@/components/Icons';
import { Logo } from '@/components/Logo';

export default function GameLayout() {
  const {
    theme: {
      colors: {
        elements: { highEm },
      },
    },
  } = useTheme();

  const renderHeaderCustom = (props: NativeStackHeaderProps) => {
    return (
      <HeaderCustom {...props}>
        <HeaderButton>
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
      <Stack.Screen
        name="index"
        options={{
          header: renderHeaderCustom,
        }}
      />
    </Stack>
  );
}
