import { type NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Stack, router } from 'expo-router';

import { Button } from '@/components/Button';
import { HeaderCustom } from '@/components/HeaderCustom';
import { ProfileDrip } from '@/components/Icons';
import { Box, VStack } from '@/components/Layout';
import { ScreenContainer } from '@/components/ScreenContainer';
import { Text } from '@/components/Text';

export default function NotFoundScreen() {
  const renderHeaderCustom = (props: NativeStackHeaderProps) => {
    return <HeaderCustom {...props} title="Oops!" />;
  };

  return (
    <ScreenContainer>
      <Stack.Screen options={{ header: renderHeaderCustom }} />
      <VStack alignItems="center" flex={1} gap={20} justifyContent="center">
        <ProfileDrip />
        <Text fontFamily="nb-architekt" size="l">
          I think you're lost
        </Text>
        <Box>
          <Button variant="secondary" onPress={router.back}>
            <Text>Back home</Text>
          </Button>
        </Box>
      </VStack>
    </ScreenContainer>
  );
}
