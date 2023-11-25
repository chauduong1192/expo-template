import { useTheme } from '@rneui/themed';
import React, { Suspense } from 'react';

import { VStack } from '@/components/Layout';
import { ScreenContainer } from '@/components/ScreenContainer';
import { Text } from '@/components/Text';

const Showcase = React.lazy(() =>
  import('@/features/showcase/routes/Showcase').then((module) => ({
    default: module.Showcase,
  })),
);

export default function ShowcaseScreen() {
  const {
    theme: {
      colors: {
        base: { bg },
      },
    },
  } = useTheme();
  return (
    <Suspense
      fallback={
        <VStack alignItems="center" bg={bg} flex={1} justifyContent="center">
          <Text>Loading...</Text>
        </VStack>
      }
    >
      <ScreenContainer withScroll>
        <Showcase />
      </ScreenContainer>
    </Suspense>
  );
}
