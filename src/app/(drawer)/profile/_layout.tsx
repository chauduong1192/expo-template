import { type NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';

import { HeaderCustom } from '@/components/HeaderCustom';

export default function ProfileLayout() {
  const renderHeaderCustom = (props: NativeStackHeaderProps) => {
    return <HeaderCustom backButton title="profile" {...props} />;
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
