import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { InputWithLabel as TextAreaWithLabel } from '@/components/Form';
import { Input as TextArea } from '@/components/Form/Input';
import { PlusCircleIcon } from '@/components/Icons';

const TextAreaMeta: ComponentMeta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
  args: {
    placeholder: 'Enter something here',
    disabled: false,
    error: false,
    helperText: 'Helper text',
    inputProps: {
      multiline: true,
    },
    inputStyleProps: { paddingTop: 0 },
    style: { alignItems: 'flex-start' },
  },
};

export default TextAreaMeta;

type TextAreaStory = ComponentStory<typeof TextArea>;

export const Default: TextAreaStory = (args) => <TextArea {...args} />;
export const WithIcons: TextAreaStory = (args) => (
  <TextArea
    {...args}
    leftIcon={<PlusCircleIcon />}
    rightIcon={<PlusCircleIcon />}
  />
);

export const WithLabel: TextAreaStory = (args) => (
  <TextAreaWithLabel {...args} />
);
WithLabel.args = {
  label: 'Your name',
  description: 'Description goes here',
  placeholder: 'TextArea Your Name',
};
