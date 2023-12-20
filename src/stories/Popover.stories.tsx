import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';
import { PopoverPlacement } from 'react-native-popover-view';

import { Box } from '@/components/Layout';
import { Popover } from '@/components/Popover';
import { Text } from '@/components/Text';

const PopoverMeta: ComponentMeta<typeof Popover> = {
  title: 'Popover',
  component: Popover,
  args: {
    placement: PopoverPlacement.BOTTOM,
  },
  argTypes: {
    placement: {
      options: [
        PopoverPlacement.BOTTOM,
        PopoverPlacement.CENTER,
        PopoverPlacement.LEFT,
        PopoverPlacement.RIGHT,
        PopoverPlacement.TOP,
      ],
      control: { type: 'radio' },
    },
  },
};

export default PopoverMeta;

type PopoverStory = ComponentStory<typeof Popover>;

export const Default: PopoverStory = (args) => (
  <Box>
    <Popover {...args} from={<Text>Click me to open popover</Text>}>
      <Box minHeight={200} minWidth={200} padding={2}>
        <Text>popover content</Text>
      </Box>
    </Popover>
  </Box>
);
