import React, {
  cloneElement,
  useEffect,
  useState,
  type ReactElement,
} from 'react';
import { StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

import { _variant } from './theme';
import {
  type IconProps,
  type LabelProps,
  type RouteProps,
  type TabBarProps,
} from './types';

import { Badge } from '@/components/Badge';
import { HStack } from '@/components/Layout';
import { Text } from '@/components/Text';

interface TabsProps {
  scenes: {
    [key: string]: React.ComponentType;
  };
  tabs: RouteProps[];
  indexActive?: number;
  type?: 'hug' | 'full';
  scrollEnabled?: boolean;
  onChangeIndex?: (index: number) => void;
  tabStyle?: StyleProp<ViewStyle>;
  tabBarStyle?: StyleProp<ViewStyle>;
  indicatorStyle?: StyleProp<ViewStyle>;
  sceneContainerStyle?: StyleProp<ViewStyle>;
  swipeEnabled?: boolean;
}

export const Tabs = ({
  scenes,
  tabs,
  indexActive = 0,
  type = 'hug',
  scrollEnabled = true,
  onChangeIndex,
  tabStyle: _tabStyle,
  tabBarStyle: _tabBarStyle,
  indicatorStyle: _customIndicatorStyle,
  sceneContainerStyle,
  swipeEnabled = true,
  ...rest
}: TabsProps) => {
  const {
    labelFocusedStyle,
    labelStyle,
    iconFocusedColor,
    iconColor,
    indicatorStyle,
    tabBarStyle,
    tabStyle,
  } = _variant()?.[type];

  const [index, setIndex] = useState(indexActive);

  useEffect(() => {
    setIndex(indexActive);
  }, [indexActive]);

  const handleChangeIndex = (idx: number) => {
    onChangeIndex?.(idx);
    setIndex(idx);
  };

  const renderScene = SceneMap(scenes ?? {});

  const renderLabel = ({
    focused,
    route: { title, badgeLabel },
  }: LabelProps) => (
    <HStack alignItems="center" justifyContent="center">
      <Text
        fontFamily="nb-architekt"
        shadowText={focused}
        size="l"
        style={[
          focused ? labelFocusedStyle : labelStyle,
          { textTransform: 'uppercase', alignSelf: 'flex-start' },
        ]}
      >
        {title}
      </Text>
      {badgeLabel && (
        <Badge
          style={{
            marginLeft: 12,
          }}
        >
          {badgeLabel}
        </Badge>
      )}
    </HStack>
  );

  const renderIcon = ({ focused, route: { icon } }: IconProps) => {
    if (!icon) {
      return <></>;
    }
    return cloneElement(icon as ReactElement, {
      color: focused ? iconFocusedColor : iconColor,
      width: 24,
      height: 24,
    });
  };

  const renderTabBar = (props: TabBarProps<any>) => (
    <TabBar
      {...props}
      indicatorStyle={[indicatorStyle, _customIndicatorStyle]}
      renderIcon={renderIcon}
      renderLabel={renderLabel}
      scrollEnabled={scrollEnabled}
      style={[tabBarStyle, _tabBarStyle]}
      tabStyle={[styles.tabStyle, tabStyle, _tabStyle]}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes: tabs }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      sceneContainerStyle={sceneContainerStyle}
      swipeEnabled={swipeEnabled}
      onIndexChange={handleChangeIndex}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
