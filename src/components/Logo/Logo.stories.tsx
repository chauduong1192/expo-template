import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { Logo } from './Logo';

const LogoMeta: ComponentMeta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
};

export default LogoMeta;

type LogoStory = ComponentStory<typeof Logo>;

export const Basic: LogoStory = (args) => <Logo {...args} />;
