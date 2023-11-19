import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTheme } from '@rneui/themed';
import React, { type ReactElement } from 'react';
import { Dimensions } from 'react-native';
import {
  Easing,
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
  const translateX = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(translateX.value, {
          easing: Easing.elastic(1),
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

  const handlePress = (index: number) => {
    translateX.value = DEFAULT_TAB_ITEM_WIDTH * index;
  };

  return (
    <HStack
      backgroundColor={bgEmphasized}
      borderColor={interactiveHovered}
      borderRadius={12}
      borderTopWidth={1}
      bottom={0}
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
          onPress={handlePress}
        />
      ))}
    </HStack>
  );
};
