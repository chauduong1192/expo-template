import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import { PlusCircleIcon } from '@/components/Icons';
import { HStack } from '@/components/Layout';
import { Tabs } from '@/components/Tabs';
import { Text } from '@/components/Text';

const tabs = [
  {
    title: 'entire',
    icon: <PlusCircleIcon />,
    component: () => (
      <View>
        <Text>entire</Text>
      </View>
    ),
  },
  {
    title: 'account',
    badgeLabel: 1,
    component: () => (
      <View>
        <Text>entire</Text>
      </View>
    ),
  },
  {
    title: 'customerConfirmation',
    component: () => (
      <View>
        <Text>entire</Text>
      </View>
    ),
  },
  {
    title: 'transactionAsset',
    component: () => (
      <View>
        <Text>entire</Text>
      </View>
    ),
  },
  {
    title: 'depositAndWithdrawal',
    component: () => (
      <View>
        <Text>entire</Text>
      </View>
    ),
  },
];

const TabsMeta: ComponentMeta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  args: {
    type: 'hug',
    scrollEnabled: true,
    swipeEnabled: true,
    indexActive: 0,
    sceneContainerStyle: {
      paddingTop: 10,
    },
    indicatorStyle: {},
    tabBarStyle: {},
    tabStyle: {},
    scenes: {
      entire: tabs[0].component,
      account: tabs[1].component,
      customerConfirmation: tabs[2].component,
      transactionAsset: tabs[3].component,
      depositAndWithdrawal: tabs[4].component,
    },
  },
  argTypes: {
    type: {
      options: ['hug', 'full'],
      control: { type: 'radio' },
    },
    scenes: {
      control: {
        type: null,
      },
    },
    tabs: {
      control: {
        type: null,
      },
    },
  },
};

export default TabsMeta;

type TabsStory = ComponentStory<typeof Tabs>;

export const Default: TabsStory = (args) => {
  const _tabs: any = useCallback(() => {
    return tabs.map(({ component, title, badgeLabel, icon }) => ({
      icon,
      title,
      badgeLabel,
      component,
      key: title,
    }));
  }, [])();
  return (
    <HStack width="100%">
      <Tabs {...args} tabs={_tabs} />
    </HStack>
  );
};
