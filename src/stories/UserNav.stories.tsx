import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { UserNav } from '@/components/UserNav';

const UserNavMeta: ComponentMeta<typeof UserNav> = {
  title: 'UserNav',
  component: UserNav,
};

export default UserNavMeta;

type UserNavStory = ComponentStory<typeof UserNav>;

export const Default: UserNavStory = () => <UserNav />;
