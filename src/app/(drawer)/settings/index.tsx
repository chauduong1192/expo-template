import { Link } from 'expo-router';

import { VStack } from '@/components/Layout';
import { ScreenContainer } from '@/components/ScreenContainer';
import { Text } from '@/components/Text';

export default function SettingsScreen() {
  return (
    <ScreenContainer>
      <VStack gap={30} paddingX={20} paddingY={16}>
        <Text fontFamily="nb-architekt" shadowText size="l">
          Settings Content
        </Text>
        <Link href="/profile">
          <Text>Go to Profile</Text>
        </Link>
      </VStack>
    </ScreenContainer>
  );
}
