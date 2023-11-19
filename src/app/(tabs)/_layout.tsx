import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';

import { CompassIcon, GamePadIcon, HomeSimpleIcon } from '@/components/Icons';
import { TabBar } from '@/components/TabBar';
import { type TabBarIconProps } from '@/components/TabBar/TabItem';

export const TAB_NAME = ['Home', 'Discover', 'Game'];
export const ICONS = [<HomeSimpleIcon />, <CompassIcon />, <GamePadIcon />];

const tabBars = [
  {
    name: 'home',
    href: '/home',
    tabBarIcon: ({ color, size }: TabBarIconProps) => (
      <HomeSimpleIcon color={color} height={size} width={size} />
    ),
  },
  {
    name: 'discover',
    href: '/discover',
    tabBarIcon: ({ color, size }: TabBarIconProps) => (
      <CompassIcon color={color} height={size} width={size} />
    ),
  },
  {
    name: 'game',
    href: '/game',
    tabBarIcon: ({ color }: TabBarIconProps) => (
      <GamePadIcon color={color} height={20} width={20} />
    ),
    tabBarBadge: 3,
  },
];

export default function TabLayout() {
  const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

  return (
    <Tabs
      // screenOptions={{
      //   headerShown: false,
      // }}
      tabBar={renderTabBar}
    >
      {tabBars.map(({ name, href, tabBarIcon, tabBarBadge }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{ href, tabBarLabel: name, tabBarIcon, tabBarBadge }}
        />
      ))}
    </Tabs>
  );
}
