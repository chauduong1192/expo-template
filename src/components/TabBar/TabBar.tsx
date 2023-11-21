import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTheme } from '@rneui/themed';
import { usePathname } from 'expo-router';
import React, { useEffect, type ReactElement } from 'react';
import { Dimensions } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BorderTopAnimated } from './BorderTopAnimated';
import { TabItem } from './TabItem';

import { HStack } from '@/components/Layout';

interface TabBarProps extends BottomTabBarProps {
  icons?: ReactElement[];
}
const windowWidth = Dimensions.get('window').width;

export const TabBar = ({ state, descriptors, navigation }: TabBarProps) => {
  const currentPathname = usePathname();
  const translateX = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(translateX.value, {
          duration: 200,
        }),
      },
    ],
  }));
  const {
    theme: {
      colors: {
        base: { bgEmphasized },
        border: { interactiveHovered },
      },
    },
  } = useTheme();

  const insets = useSafeAreaInsets();

  const DEFAULT_TAB_ITEM_WIDTH = windowWidth / state.routes?.length;

  useEffect(() => {
    if (state.routeNames.includes(currentPathname.replace('/', ''))) {
      translateX.value = DEFAULT_TAB_ITEM_WIDTH * state.index;
    }
  }, [currentPathname]);

  return (
    <HStack
      backgroundColor={bgEmphasized}
      borderColor={interactiveHovered}
      borderRadius={12}
      borderTopWidth={1}
      bottom={0}
      overflow="hidden"
      paddingBottom={insets.bottom}
      position="absolute"
    >
      <BorderTopAnimated
        animatedStyles={animatedStyles}
        defaultWidth={DEFAULT_TAB_ITEM_WIDTH}
      />
      {state.routes.map((route, index) => (
        <TabItem
          descriptors={descriptors}
          index={index}
          key={index.toString()}
          navigation={navigation}
          route={route}
          state={state}
        />
      ))}
    </HStack>
  );
};
