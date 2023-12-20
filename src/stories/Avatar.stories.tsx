import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { Avatar } from '@/components/Avatar';

const AvatarMeta: ComponentMeta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
};

export default AvatarMeta;

type AvatarStory = ComponentStory<typeof Avatar>;

export const Default: AvatarStory = (args) => <Avatar {...args} />;
