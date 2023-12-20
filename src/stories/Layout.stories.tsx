import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { Box, HStack, VStack } from '@/components/Layout';

const ExampleBox = () => (
  <Box backgroundColor="white" borderRadius={8} height={50} width={50} />
);
const LayoutMeta: ComponentMeta<typeof Box> = {
  title: 'Layout',
  component: Box,
  args: {
    flexDirection: 'column',
    gap: 8,
  },
  argTypes: {
    flexDirection: {
      options: ['column', 'row'],
      control: { type: 'radio' },
    },
  },
};

export default LayoutMeta;

type LayoutStory = ComponentStory<typeof Box>;

export const BoxView: LayoutStory = (args) => (
  <Box {...args}>
    <ExampleBox />
    <ExampleBox />
    <ExampleBox />
    <ExampleBox />
  </Box>
);
export const VerticalStackView: LayoutStory = (args) => (
  <VStack {...args}>
    <ExampleBox />
    <ExampleBox />
    <ExampleBox />
    <ExampleBox />
    <ExampleBox />
    <ExampleBox />
  </VStack>
);

VerticalStackView.args = {
  gap: 16,
};

export const HorizontalStackView: LayoutStory = (args) => (
  <HStack {...args}>
    <ExampleBox />
    <ExampleBox />
    <ExampleBox />
    <ExampleBox />
    <ExampleBox />
    <ExampleBox />
  </HStack>
);

HorizontalStackView.args = {
  gap: 16,
};
