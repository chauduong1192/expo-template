import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { Badge } from '@/components/Badge';

const BadgeMeta: ComponentMeta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  args: {
    emphasis: 'medium',
    children: 1,
  },
  argTypes: {
    emphasis: {
      options: ['high', 'medium', 'low'],
      control: { type: 'radio' },
    },
  },
};

export default BadgeMeta;

type BadgeStory = ComponentStory<typeof Badge>;

export const Default: BadgeStory = (args) => <Badge {...args} />;
