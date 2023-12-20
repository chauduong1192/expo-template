import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';
import { useToggle } from 'usehooks-ts';

import { Checkbox } from '@/components/Form/Checkbox';

const CheckboxMeta: ComponentMeta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    disabled: false,
  },
};

export default CheckboxMeta;

type CheckboxStory = ComponentStory<typeof Checkbox>;

export const Default: CheckboxStory = (args) => {
  const [switchValue, toggle] = useToggle();
  return <Checkbox {...args} value={switchValue} onValueChange={toggle} />;
};

export const WithLabelDesc: CheckboxStory = (args) => {
  const [switchValue, toggle] = useToggle();
  return <Checkbox {...args} value={switchValue} onValueChange={toggle} />;
};
WithLabelDesc.args = {
  description: 'Description goes here',
  label: 'Label',
};
