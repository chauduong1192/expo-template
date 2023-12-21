import { useTheme } from '@rneui/themed';
import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

import { Box } from '@/components/Layout';
import { BORDER_RADIUS_FULL } from '@/constants';
import { type CommonProps } from '@/types/common';

export interface BadgeDotProps extends CommonProps {
  isAnimation?: boolean;
}

const ANGLE = 1;
const TIME = 800;
const EASING = Easing.elastic(1);

export const BadgeDot = ({ isAnimation = true, ...props }: BadgeDotProps) => {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: rotation.value }],
  }));
  const {
    theme: {
      colors: {
        base: { bgEmphasized },
        controls: { danger },
      },
    },
  } = useTheme();

  useEffect(() => {
    if (isAnimation) {
      rotation.value = withSequence(
        // deviate left to start from -ANGLE
        withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),
        // wobble between -ANGLE and ANGLE 7 times
        withRepeat(
          withTiming(ANGLE, {
            duration: TIME,
            easing: EASING,
          }),
          6,
          true,
        ),
        // go back to 0 at the end
        withTiming(0, { duration: TIME / 2, easing: EASING }),
      );
    }
  }, [isAnimation, rotation]);

  return (
    <Box
      // {...props}
      alignItems="center"
      as={Animated.View}
      backgroundColor={bgEmphasized}
      borderRadius={BORDER_RADIUS_FULL}
      height={8}
      justifyContent="center"
      position="absolute"
      right={-3}
      style={[animatedStyle, props.style]}
      top={0}
      width={8}
      zIndex={1}
    >
      <Box
        as={Animated.View}
        backgroundColor={danger}
        borderRadius={BORDER_RADIUS_FULL}
        height={6}
        style={animatedStyle}
        width={6}
      />
    </Box>
  );
};
