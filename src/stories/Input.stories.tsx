import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React, { useState } from 'react';

import { InputWithLabel } from '@/components/Form';
import { Input } from '@/components/Form/Input';
import { PlusCircleIcon } from '@/components/Icons';

const InputMeta: ComponentMeta<typeof Input> = {
  title: 'Input',
  component: Input,
  args: {
    placeholder: 'Enter something here',
    disabled: false,
    inputProps: {},
    inputStyleProps: {},
    error: false,
    helperText: 'Helper text',
  },
};

export default InputMeta;

type InputStory = ComponentStory<typeof Input>;

export const Default: InputStory = (args) => <Input {...args} />;
export const WithIcons: InputStory = (args) => (
  <Input
    {...args}
    leftIcon={<PlusCircleIcon />}
    rightIcon={<PlusCircleIcon />}
  />
);

export const WithLabel: InputStory = (args) => <InputWithLabel {...args} />;
WithLabel.args = {
  label: 'Your name',
  description: 'Description goes here',
  placeholder: 'Input Your Name',
};

export const WithCodeType: InputStory = (args) => {
  const [code, setCode] = useState<string>('');
  return <InputWithLabel {...args} value={code} onChangeText={setCode} />;
};

WithCodeType.args = {
  label: 'Your name',
  description: 'Description goes here',
  placeholder: 'Input Your Name',
  type: 'code',
};
