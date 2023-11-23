import { useTheme } from '@rneui/themed';
import { type PropsWithChildren } from 'react';
import { SafeAreaView, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Box } from '../Layout';

import { TAB_BOTTOM_HEIGHT } from '@/constants';

interface ScreenContainerProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
  withScroll?: boolean;
}

export const ScreenContainer = ({
  withScroll = false,
  style,
  children,
}: ScreenContainerProps) => {
  const {
    theme: {
      colors: {
        base: { bg },
      },
    },
  } = useTheme();

  return (
    <SafeAreaView style={[{ backgroundColor: bg, flex: 1 }]}>
      <Box
        as={Animated.View}
        entering={FadeIn.duration(500)}
        flex={1}
        height="100%"
        position="relative"
        style={style}
        width="100%"
        {...(withScroll && {
          as: Animated.ScrollView,
          contentContainerStyle: {
            paddingBottom: TAB_BOTTOM_HEIGHT,
          },
          showsHorizontalScrollIndicator: false,
          showsVerticalScrollIndicator: false,
        })}
      >
        {children}
      </Box>
    </SafeAreaView>
  );
};
