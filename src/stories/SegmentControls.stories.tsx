import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React, { useState } from 'react';

import { HStack } from '@/components/Layout';
import { SegmentControls } from '@/components/SegmentControls';

const SegmentControlsMeta: ComponentMeta<typeof SegmentControls> = {
  title: 'SegmentControls',
  component: SegmentControls,
  args: {
    containerMargin: 20,
    currentIndex: 0,
    segments: ['Label', 'Label', 'Label'],
    size: 's',
  },
  argTypes: {
    size: {
      options: ['xs', 's'],
      control: { type: 'radio' },
    },
  },
  decorators: [
    (Story) => (
      <HStack>
        <Story />
      </HStack>
    ),
  ],
};

export default SegmentControlsMeta;

type SegmentControlsStory = ComponentStory<typeof SegmentControls>;

export const Default: SegmentControlsStory = (args) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <SegmentControls {...args} currentIndex={tabIndex} onChange={setTabIndex} />
  );
};
