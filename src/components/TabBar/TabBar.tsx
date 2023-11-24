import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTheme } from '@rneui/themed';
import { usePathname } from 'expo-router';
import React, { useEffect, type ReactElement } from 'react';
import { Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TabItem } from './TabItem';
import { BorderTopLight } from '../BorderTopLight';

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
  }, [
    DEFAULT_TAB_ITEM_WIDTH,
    currentPathname,
    state.index,
    state.routeNames,
    translateX,
  ]);

  return (
    <HStack
      backgroundColor={bgEmphasized}
      borderColor={interactiveHovered}
      borderTopLeftRadius={12}
      borderTopRightRadius={12}
      borderTopWidth={1}
      bottom={0}
      overflow="hidden"
      paddingBottom={insets.bottom}
      position="absolute"
    >
      {/* Border top light animated */}
      <Animated.View style={animatedStyles}>
        <BorderTopLight style={{ width: DEFAULT_TAB_ITEM_WIDTH }} />
      </Animated.View>

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
