/* eslint-disable no-console */
import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { Banner } from '@/components/Banner';

const BannerMeta: ComponentMeta<typeof Banner> = {
  title: 'Banner',
  component: Banner,
  args: {
    type: 'generic',
    container: 'inline',
    title: 'Title goes here',
    description: 'Description goes here',
    showCloseIcon: true,
    actions: [
      {
        children: 'Label 1',
      },
      {
        children: 'Label 2',
      },
    ],
  },
  argTypes: {
    type: {
      options: ['generic', 'emphasized', 'danger'],
      control: { type: 'radio' },
    },
    container: {
      options: ['inline', 'contained'],
      control: { type: 'radio' },
    },
    icon: {
      control: {
        type: null,
      },
    },
  },
};

export default BannerMeta;

type BannerStory = ComponentStory<typeof Banner>;

export const Default: BannerStory = (args) => <Banner {...args} />;
