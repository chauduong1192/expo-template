import { Link } from 'expo-router';

import { VStack } from '@/components/Layout';
import { ScreenContainer } from '@/components/ScreenContainer';
import { Text } from '@/components/Text';

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <VStack gap={30} paddingX={20} paddingY={16}>
        <Text fontFamily="nb-architekt" shadowText size="l">
          Game
        </Text>
        <Link href="/home">
          <Text>Go to home page</Text>
        </Link>
      </VStack>
    </ScreenContainer>
  );
}
