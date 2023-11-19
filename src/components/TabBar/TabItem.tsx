import { type BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { type NavigationState } from '@react-navigation/native';
import { useTheme } from '@rneui/themed';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Box } from '@/components/Layout';
import { Text } from '@/components/Text';
import { BORDER_RADIUS_FULL } from '@/constants';

export type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

interface TabItemProps extends Omit<BottomTabBarProps, 'insets'> {
  route: NavigationState['routes'][0];
  index: number;
  onPress?: (index: number) => void;
}

export const TabItem = ({
  state,
  descriptors,
  navigation,
  route,
  index,
  onPress: _onPress,
}: TabItemProps) => {
  const {
    theme: {
      colors: {
        elements: { lowEm, highEm },
        base: { bgEmphasized },
        controls: { danger },
      },
    },
  } = useTheme();

  const { options } = descriptors[route.key];
  const label = options.tabBarLabel ?? options.title ?? route.name;

  const isFocused = state.index === index;

  const onPress = () => {
    _onPress?.(index);
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
    <Box flex={1} height={72}>
      <TouchableOpacity
        accessibilityLabel={options.tabBarAccessibilityLabel}
        accessibilityRole="button"
        accessibilityState={{ selected: isFocused }}
        activeOpacity={1}
        key={index}
        style={styles.tab}
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
            focused: isFocused,
            color: isFocused ? highEm : lowEm,
            size: 24,
          })}
          {options.tabBarBadge && (
            <Box
              alignItems="center"
              backgroundColor={bgEmphasized}
              borderRadius={BORDER_RADIUS_FULL}
              height={8}
              justifyContent="center"
              position="absolute"
              right={0}
              top={0}
              width={8}
            >
              <Box
                backgroundColor={danger}
                borderRadius={BORDER_RADIUS_FULL}
                height={6}
                width={6}
              />
            </Box>
          )}
        </Box>
        <Text
          fontWeight="500"
          size="xs"
          style={{
            color: isFocused ? highEm : lowEm,
            textTransform: 'uppercase',
          }}
        >
          {label as string}
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    gap: 6,
  },
});
