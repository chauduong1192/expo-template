import { type NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';

import { HeaderCustom } from '@/components/HeaderCustom';
import { GearSix } from '@/components/Icons';

export default () => {
  const renderHeaderCustom = (props: NativeStackHeaderProps) => {
    return (
      <HeaderCustom
        {...props}
        rightIcon={<GearSix />}
        rightPress={() => console.log('right press')}
        title="NOTIFICATION"
      />
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
};
