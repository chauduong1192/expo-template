import { makeStyles } from '@rneui/themed';
import React from 'react';
import { Pressable, type PressableProps } from 'react-native';

import { Text } from '@/components/Text';
import { BORDER_RADIUS_BASE } from '@/constants';
import { type CommonProps } from '@/types/common';

export interface SegmentItemProps
  extends CommonProps,
    Omit<PressableProps, 'style' | 'children' | 'onPress'> {
  size?: 'xs' | 's';
  index?: number;
  currentIndex?: number;
  label: string;
  onPress: (idx: number) => void;
}

export const SegmentItem = ({
  size = 's',
  index = 0,
  currentIndex = 0,
  onPress,
  testID,
  style,
  label,
  ...props
}: SegmentItemProps) => {
  const isActive = index === currentIndex;

  const variantStyle = useVariants({ size, isActive });

  const handleOnPress = () => {
    onPress(index);
  };

  return (
    <Pressable
      {...props}
      accessibilityRole="button"
      style={[variantStyle.container, style]}
      testID={`${testID}-segment-item-${index}`}
      onPress={handleOnPress}
    >
      <Text fontWeight="500" style={[variantStyle.label]}>
        {label}
      </Text>
    </Pressable>
  );
};

const useVariants = makeStyles(
  (
    {
      colors: {
        elements: { midEm, highEm },
      },
    },
    {
      isActive,
      size,
    }: Pick<SegmentItemProps, 'size'> & {
      isActive: boolean;
    },
  ) => ({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: BORDER_RADIUS_BASE,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      ...(size === 'xs' && {
        paddingHorizontal: 12,
        paddingVertical: 8,
      }),
    },
    label: {
      fontSize: 14,
      lineHeight: 20,
      ...(size === 'xs' && {
        fontSize: 12,
        lineHeight: 18,
      }),
      color: isActive ? highEm : midEm,
    },
  }),
);
