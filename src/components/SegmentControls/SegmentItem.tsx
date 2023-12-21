import { makeStyles } from '@rneui/themed';
import React, { useCallback, useState } from 'react';
import {
  Pressable,
  type GestureResponderEvent,
  type PressableProps,
} from 'react-native';

import { type ButtonStates } from '../Button/types';
import { Box } from '../Layout';

import { Text } from '@/components/Text';
import { BORDER_RADIUS_BASE } from '@/constants';
import { type CommonProps } from '@/types/common';

export interface SegmentItemProps
  extends CommonProps,
    Omit<PressableProps, 'style' | 'children'> {
  size?: 'xs' | 's';
  index?: number;
  currentIndex?: number;
}

export const SegmentItem = ({
  size = 's',
  index = 0,
  currentIndex = 0,
  onPress,
  onPressIn,
  onPressOut,
  children,
  testID,
  style,
  ...props
}: SegmentItemProps) => {
  const isActive = index === currentIndex;
  const [state, setState] = useState<ButtonStates>('idle');

  const variantStyle = useVariants({ size, isActive, state });

  const handlePressIn = (e: GestureResponderEvent) => {
    onPressIn?.(e);
    setState('hovered');
  };

  const handlePressOut = (e: GestureResponderEvent) => {
    onPressOut?.(e);
    setState('idle');
  };

  const handleOnPress = useCallback(
    (evt: GestureResponderEvent) => {
      onPress?.(evt);
    },
    [onPress],
  );

  return (
    <Pressable
      {...props}
      accessibilityRole="button"
      testID={`${testID}-segment-item-${index}`}
      onPress={handleOnPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Box
        alignItems="center"
        justifyContent="center"
        style={[variantStyle.container, style]}
      >
        <Text shadowText={isActive} style={[variantStyle.label]}>
          {children}
        </Text>
      </Box>
    </Pressable>
  );
};

const useVariants = makeStyles(
  (
    {
      colors: {
        controls: { secondary, secondaryHovered },
        base: { bgEmphasized },
        elements: { midEm, highEm },
      },
    },
    {
      isActive,
      size,
      state,
    }: Pick<SegmentItemProps, 'size'> & {
      isActive: boolean;
      state: ButtonStates;
    },
  ) => ({
    container: {
      // spacing
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: BORDER_RADIUS_BASE,
      ...(size === 'xs' && {
        paddingHorizontal: 12,
        paddingVertical: 8,
      }),

      // background
      backgroundColor: isActive ? secondary : 'transparent',
      ...(state === 'hovered' && {
        backgroundColor: isActive ? secondaryHovered : bgEmphasized,
      }),
    },
    label: {
      // font size
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 20,
      ...(size === 'xs' && {
        fontSize: 12,
        lineHeight: 18,
      }),

      // color
      color: isActive ? highEm : midEm,
      ...(state === 'hovered' && {
        color: highEm,
      }),
    },
  }),
);
