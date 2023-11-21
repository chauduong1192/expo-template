import { type NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

import { Avatar } from '@/components/Avatar';
import { BadgeDot } from '@/components/BadgeDot';
import { HeaderButton, HeaderCustom } from '@/components/HeaderCustom';
import { BellIcon } from '@/components/Icons';
import { Box } from '@/components/Layout';
import { Text } from '@/components/Text';

const ANGLE = 10;
const TIME = 100;
const EASING = Easing.elastic(1.5);

export default function DiscoverLayout() {
  const {
    theme: {
      colors: {
        white,
        elements: { lowEm },
      },
    },
  } = useTheme();

  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));

  useEffect(() => {
    rotation.value = withSequence(
      // deviate left to start from -ANGLE
      withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),
      // wobble between -ANGLE and ANGLE 7 times
      withRepeat(
        withTiming(ANGLE, {
          duration: TIME,
          easing: EASING,
        }),
        20,
        true,
      ),
      // go back to 0 at the end
      withTiming(0, { duration: TIME / 2, easing: EASING }),
    );
  }, []);

  const renderHeaderCustom = (props: NativeStackHeaderProps) => {
    return (
      <HeaderCustom {...props}>
        <HeaderButton>
          <Avatar />
        </HeaderButton>
        <Text
          fontFamily="nb-architekt"
          shadowText
          size="m"
          style={{ flex: 1, textAlign: 'center', color: white }}
        >
          Discover
        </Text>
        <HeaderButton>
          <Box
            alignItems="center"
            as={Animated.View}
            height={24}
            justifyContent="center"
            position="relative"
            style={animatedStyle}
            width={24}
          >
            {rotation.value === 0 && (
              <BadgeDot isAnimation={false} style={{ right: 3 }} />
            )}
            <BellIcon color={lowEm} height={24} width={24} />
          </Box>
        </HeaderButton>
      </HeaderCustom>
    );
  };

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: renderHeaderCustom,
        }}
      />
    </Stack>
  );
}
