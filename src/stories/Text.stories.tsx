import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { VStack } from '@/components/Layout';
import { Text } from '@/components/Text';

const TextMeta: ComponentMeta<typeof Text> = {
  title: 'Text',
  component: Text,
  args: {
    size: '2xs',
    fontFamily: 'inter',
    fontWeight: '400',
    shadowText: false,
    style: {},
  },
  argTypes: {
    size: {
      options: ['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'],
      control: { type: 'radio' },
    },
    fontFamily: {
      options: ['inter', 'nb-architekt'],
      control: { type: 'radio' },
    },
    fontWeight: {
      options: ['400', '500', '600', '700'],
      control: { type: 'radio' },
    },
  },
};

export default TextMeta;

type TextStory = ComponentStory<typeof Text>;

export const All: TextStory = () => (
  <VStack gap={10}>
    {['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'].map((size, idx) => (
      <Text key={idx} size={size as any}>
        {`The quick brown fox jumps over the lazy dog. - ${size}`}
      </Text>
    ))}
  </VStack>
);

export const Default: TextStory = (args) => (
  <VStack gap={10}>
    <Text {...args}>The quick brown fox jumps over the lazy dog.</Text>
  </VStack>
);
