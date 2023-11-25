import { Link } from 'expo-router';

import { VStack } from '@/components/Layout';
import { ScreenContainer } from '@/components/ScreenContainer';
import { Text } from '@/components/Text';

export default function SettingScreen() {
  return (
    <ScreenContainer>
      <VStack gap={30} paddingX={20} paddingY={16}>
        <Text fontFamily="nb-architekt" shadowText size="l">
          Setting
        </Text>
        <Link href="/about">
          <Text>About</Text>
        </Link>
        <Link href="/user/bacon">
          <Text>View User</Text>
        </Link>
      </VStack>
    </ScreenContainer>
  );
}
