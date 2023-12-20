import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { BorderTopLight } from '@/components/BorderTopLight';
import { VStack } from '@/components/Layout';

const BorderTopLightMeta: ComponentMeta<typeof BorderTopLight> = {
  title: 'BorderTopLight',
  component: BorderTopLight,
  args: {
    style: {
      top: '50%',
    },
  },
};

export default BorderTopLightMeta;

type BorderTopLightStory = ComponentStory<typeof BorderTopLight>;

export const Default: BorderTopLightStory = (args) => (
  <VStack
    alignItems="center"
    height="100%"
    justifyContent="center"
    position="relative"
    width="100%"
  >
    <BorderTopLight {...args} />
  </VStack>
);
