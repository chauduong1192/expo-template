import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';
import { useToggle } from 'usehooks-ts';

import { Switch } from '@/components/Form/Switch';

const SwitchMeta: ComponentMeta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  args: {
    disabled: false,
  },
};

export default SwitchMeta;

type SwitchStory = ComponentStory<typeof Switch>;

export const Default: SwitchStory = (args) => {
  const [switchValue, toggle] = useToggle();
  return <Switch {...args} value={switchValue} onValueChange={toggle} />;
};

export const WithLabelDesc: SwitchStory = (args) => {
  const [switchValue, toggle] = useToggle();
  return <Switch {...args} value={switchValue} onValueChange={toggle} />;
};
WithLabelDesc.args = {
  description: 'Description goes here',
  label: 'Label',
};
