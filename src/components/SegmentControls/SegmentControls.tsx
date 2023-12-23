import { makeStyles } from '@rneui/themed';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { SegmentItem, type SegmentItemProps } from './SegmentItem';

import { HStack } from '@/components/Layout';
import { BORDER_RADIUS_BASE } from '@/constants';

export interface SegmentControlsProps
  extends Pick<SegmentItemProps, 'size' | 'currentIndex'> {
  segments: string[];
  onChange?: (index: number) => void;
  containerMargin?: number;
}

const DEFAULT_SPRING_CONFIG = {
  stiffness: 150,
  damping: 20,
  mass: 1,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};
const windowWidth = Dimensions.get('window').width;

export const SegmentControls = ({
  size,
  segments,
  onChange,
  currentIndex = 0,
  containerMargin = 0,
  ...props
}: SegmentControlsProps) => {
  const width = windowWidth - containerMargin * 2;
  const translateValue = width / segments.length;
  const tabTranslateValue = useSharedValue(0);
  const segmentControlVariant = useVariants();

  // useCallBack with an empty array as input, which will call inner lambda only once and memoize the reference for future calls
  const memoizedTabPressCallback = useCallback(
    (index: number) => {
      onChange?.(index);
    },
    [onChange],
  );
  useEffect(() => {
    const transitionMultiplier = 1;
    tabTranslateValue.value = withSpring(
      currentIndex * (translateValue * transitionMultiplier),
      DEFAULT_SPRING_CONFIG,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const tabTranslateAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: tabTranslateValue.value }],
  }));

  return (
    <HStack as={Animated.View} flex={1} gap={4} position="relative" {...props}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            width: width / segments.length - 4,
          },
          tabTranslateAnimatedStyles,
          segmentControlVariant.container,
        ]}
      />
      {segments?.map((item, idx) => (
        <SegmentItem
          currentIndex={currentIndex}
          index={idx}
          key={idx}
          label={item}
          size={size}
          onPress={memoizedTabPressCallback}
        />
      ))}
    </HStack>
  );
};

const useVariants = makeStyles(
  ({
    colors: {
      controls: { secondary },
    },
  }) => ({
    container: {
      backgroundColor: secondary,
      borderRadius: BORDER_RADIUS_BASE,
    },
  }),
);
