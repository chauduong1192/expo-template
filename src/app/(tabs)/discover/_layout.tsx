import { type NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

import { BadgeDot } from '@/components/BadgeDot';
import { HeaderButton, HeaderCustom } from '@/components/HeaderCustom';
import { BellIcon } from '@/components/Icons';
import { Box } from '@/components/Layout';
import { Text } from '@/components/Text';
import { convertHexToRGBA } from '@/utils/color';

const ANGLE = 10;
const TIME = 100;
const EASING = Easing.elastic(1.5);

export default () => {
  const {
    theme: {
      colors: {
        white,
        elements: { lowEm },
        others: { orange },
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
  console.log('rotation.value', rotation.value);

  const renderHeaderCustom = (props: NativeStackHeaderProps) => {
    return (
      <HeaderCustom {...props}>
        <Box
          alignItems="center"
          as={TouchableOpacity}
          height={40}
          justifyContent="center"
          opacity={0.7}
          width={40}
        >
          <LinearGradient
            colors={[
              convertHexToRGBA(orange, 0.9),
              convertHexToRGBA(orange, 0.7),
              convertHexToRGBA(orange, 0.5),
            ]}
            end={{ x: 1, y: 0 }}
            start={{ x: 0, y: 0 }}
            style={{
              width: 24,
              height: 24,
              borderRadius: 2,
            }}
          />
        </Box>
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
};
