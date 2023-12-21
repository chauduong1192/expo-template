import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { SegmentControls } from '@/components/SegmentControls';

const SegmentControlsMeta: ComponentMeta<typeof SegmentControls> = {
  title: 'SegmentControls',
  component: SegmentControls,
  args: {
    indexActive: 0,
    options: [
      {
        children: 'Segment',
      },
      {
        children: 'Segment',
      },
      {
        children: 'Segment',
      },
    ],
    size: 's',
  },
  argTypes: {
    size: {
      options: ['xs', 's'],
      control: { type: 'radio' },
    },
  },
};

export default SegmentControlsMeta;

type SegmentControlsStory = ComponentStory<typeof SegmentControls>;

export const Default: SegmentControlsStory = (args) => (
  <SegmentControls {...args} />
);
