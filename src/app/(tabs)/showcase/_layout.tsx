import { type NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Stack } from 'expo-router/stack';

import { HeaderCustom } from '@/components/HeaderCustom';

export default () => {
  const renderHeaderCustom = (props: NativeStackHeaderProps) => {
    return <HeaderCustom {...props} title="Components" />;
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
