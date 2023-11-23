import { type BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { type NavigationState } from '@react-navigation/native';
import { useTheme } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { BadgeDot } from '@/components/BadgeDot';
import { Box } from '@/components/Layout';
import { Text } from '@/components/Text';
import { TAB_BOTTOM_HEIGHT } from '@/constants';

export type TabBarIconProps = {
  focused?: boolean;
  color?: string;
  size?: number;
  animatedProps?: Partial<{
    fill: string;
  }>;
};

interface TabItemProps extends Omit<BottomTabBarProps, 'insets'> {
  route: NavigationState['routes'][0];
  index: number;
}

const AnimatedText = Animated.createAnimatedComponent(Text);

export const TabItem = ({
  state,
  descriptors,
  navigation,
  route,
  index,
}: TabItemProps) => {
  const {
    theme: {
      colors: {
        elements: { lowEm, highEm },
      },
    },
  } = useTheme();

  const { options } = descriptors[route.key];

  const label = options.tabBarLabel ?? options.title ?? route.name;

  const isFocused = state.index === index;

  const color = isFocused ? highEm : lowEm;
  const animatedStyles = useAnimatedStyle(() => ({
    color: withTiming(color, { duration: 200 }),
  }));

  const animatedProps = useAnimatedProps(() => ({
    ...(index !== 2 && {
      fill: withTiming(color, { duration: 200 }),
    }),
    ...(index === 2 && { stroke: withTiming(color, { duration: 200 }) }),
  }));

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({ name: route.name, params: {}, merge: true });
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  return (
    <Box flex={1} height={TAB_BOTTOM_HEIGHT}>
      <Box
        accessibilityLabel={options.tabBarAccessibilityLabel}
        accessibilityRole="button"
        accessibilityState={{ selected: isFocused }}
        activeOpacity={1}
        alignItems="center"
        as={TouchableOpacity}
        flex={1}
        gap={6}
        key={index}
        paddingY={16}
        testID={options.tabBarTestID}
        onLongPress={onLongPress}
        onPress={onPress}
      >
        <Box
          alignItems="center"
          height={24}
          justifyContent="center"
          position="relative"
          width={24}
        >
          {options?.tabBarIcon?.({
            animatedProps,
          } as any)}
          {options.tabBarBadge && <BadgeDot />}
        </Box>
        <AnimatedText
          fontWeight="500"
          size="xs"
          style={[animatedStyles, { textTransform: 'capitalize' }]}
        >
          {label as string}
        </AnimatedText>
      </Box>
    </Box>
  );
};
