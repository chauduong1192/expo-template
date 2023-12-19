import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import * as React from 'react';

import { EmptyState } from './EmptyState';

const EmptyStateMeta: ComponentMeta<typeof EmptyState> = {
  title: 'EmptyState',
  component: EmptyState,
  args: {
    title: 'No notifications yet',
    description:
      'Once you follow other users, your notifications will show here.',
  },
};

export default EmptyStateMeta;

type EmptyStateStory = ComponentStory<typeof EmptyState>;

export const Basic: EmptyStateStory = (args) => <EmptyState {...args} />;
