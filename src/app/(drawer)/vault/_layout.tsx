import { type NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';

import { HeaderCustom } from '@/components/HeaderCustom';

export default function VaultLayout() {
  const renderHeaderCustom = (props: NativeStackHeaderProps) => {
    return <HeaderCustom backButton title="Vault" {...props} />;
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
