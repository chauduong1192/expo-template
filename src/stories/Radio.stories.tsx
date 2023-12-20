import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';
import { useToggle } from 'usehooks-ts';

import { Checkbox as Radio } from '@/components/Form/Checkbox';
import { VStack } from '@/components/Layout';

const RadioMeta: ComponentMeta<typeof Radio> = {
  title: 'Radio',
  component: Radio,
  args: {
    disabled: false,
    type: 'radio',
  },
  decorators: [
    (Story) => (
      <VStack>
        <Story />
      </VStack>
    ),
  ],
};

export default RadioMeta;

type RadioStory = ComponentStory<typeof Radio>;

export const Default: RadioStory = (args) => {
  const [switchValue, toggle] = useToggle();
  return <Radio {...args} value={switchValue} onValueChange={toggle} />;
};

export const WithLabelDesc: RadioStory = (args) => {
  const [switchValue, toggle] = useToggle();
  return <Radio {...args} value={switchValue} onValueChange={toggle} />;
};
WithLabelDesc.args = {
  description: 'Description goes here',
  label: 'Label',
};
