import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { Avatar } from '@/components/Avatar';
import { BadgeDot } from '@/components/BadgeDot';
import { HeaderButton, HeaderCustom } from '@/components/HeaderCustom';
import { BellIcon } from '@/components/Icons';
import { Box } from '@/components/Layout';
import { Text } from '@/components/Text';

const HeaderCustomMeta: ComponentMeta<typeof HeaderCustom> = {
  title: 'HeaderCustom',
  component: HeaderCustom,
  args: {
    backButton: true,
    title: 'Title default',
  },

  decorators: [
    (Story) => (
      <Box flex={1} width="100%">
        <Story />
      </Box>
    ),
  ],
};

export default HeaderCustomMeta;

type HeaderCustomStory = ComponentStory<typeof HeaderCustom>;

export const Default: HeaderCustomStory = (args) => <HeaderCustom {...args} />;

export const WithChildren: HeaderCustomStory = (args) => (
  <HeaderCustom {...args}>
    <HeaderButton>
      <Avatar />
    </HeaderButton>
    <Text
      fontFamily="nb-architekt"
      shadowText
      size="m"
      style={{ textAlign: 'center', color: 'white' }}
    >
      Discover
    </Text>
    <HeaderButton>
      <Box
        alignItems="center"
        height={24}
        justifyContent="center"
        position="relative"
        width={24}
      >
        <BadgeDot isAnimation={false} style={{ right: 3 }} />
        <BellIcon height={24} width={24} />
      </Box>
    </HeaderButton>
  </HeaderCustom>
);
