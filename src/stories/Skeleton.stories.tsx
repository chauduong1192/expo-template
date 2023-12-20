import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { HStack, VStack } from '@/components/Layout';
import { Skeleton } from '@/components/Skeleton';

const SkeletonMeta: ComponentMeta<typeof Skeleton> = {
  title: 'Skeleton',
  component: Skeleton,
};

export default SkeletonMeta;

type SkeletonStory = ComponentStory<typeof Skeleton>;

export const Default: SkeletonStory = () => (
  <VStack gap={10} width="100%">
    <Skeleton height={50} width="auto" />
    <HStack gap={8}>
      <Skeleton circle height={50} width={50} />
      <VStack flex={1} justifyContent="space-between">
        <Skeleton height={20} width="100%" />
        <Skeleton height={20} width="50%" />
      </VStack>
    </HStack>
  </VStack>
);
