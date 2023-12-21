import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { Button } from '@/components/Button';
import { PlusCircleIcon } from '@/components/Icons';
import { HStack } from '@/components/Layout';

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Label',
    size: 'm',
    disabled: false,
    loading: false,
    variant: 'primary',
    fullWidth: false,
  },
  argTypes: {
    size: {
      options: ['xs', 's', 'm'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'danger', 'overlay'],
      control: { type: 'radio' },
    },
    onPress: { action: 'pressed!' },
  },
  decorators: [
    (Story) => (
      <HStack alignItems="center" justifyContent="center">
        <Story />
      </HStack>
    ),
  ],
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Default: ButtonStory = (args) => <Button {...args} />;
export const WithIcons: ButtonStory = (args) => (
  <Button
    {...args}
    iconLeft={<PlusCircleIcon />}
    iconRight={<PlusCircleIcon />}
  />
);

export const IconButton: ButtonStory = (args) => (
  <Button {...args} iconLeft={<PlusCircleIcon />} />
);
IconButton.args = {
  children: '',
};
