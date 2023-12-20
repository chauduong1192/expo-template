import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { InputSearch } from '@/components/Form/InputSearch';

const InputSearchMeta: ComponentMeta<typeof InputSearch> = {
  title: 'InputSearch',
  component: InputSearch,
  args: {
    placeholder: 'Search something here...',
  },
};

export default InputSearchMeta;

type InputSearchStory = ComponentStory<typeof InputSearch>;

export const Default: InputSearchStory = (args) => <InputSearch {...args} />;
