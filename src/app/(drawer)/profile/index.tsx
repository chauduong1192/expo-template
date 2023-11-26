import { Link } from 'expo-router';

import { VStack } from '@/components/Layout';
import { ScreenContainer } from '@/components/ScreenContainer';
import { Text } from '@/components/Text';

export default function ProfileScreen() {
  return (
    <ScreenContainer>
      <VStack gap={30} paddingX={20} paddingY={16}>
        <Text fontFamily="nb-architekt" shadowText size="l">
          Profile Content
        </Text>
        <Link href="/settings">
          <Text>Go to Settings</Text>
        </Link>
      </VStack>
    </ScreenContainer>
  );
}
