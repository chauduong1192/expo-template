import { useTheme } from '@rneui/themed';
import {
  useState,
  type PropsWithChildren,
  type ReactNode,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import {
  StyleSheet,
  type GestureResponderEvent,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
  ActivityIndicator,
} from 'react-native';
import { styled } from 'styled-components/native';
import {
  layout,
  position,
  space,
  type LayoutProps,
  type PositionProps,
  type SpaceProps,
} from 'styled-system';

import { _size, _variant, _icon, _icon_button_size } from './theme';
import {
  type ButtonSizes,
  type ButtonStates,
  type ButtonVariants,
} from './types';

import { Text } from '@/components/Text';
import { BORDER_RADIUS_BASE } from '@/constants';
import { cloneIcon } from '@/utils/icon';

/**
 * Props for Button component.
 *
 * Extends PressableProps, LayoutProps, SpaceProps and PositionProps.
 *
 * @interface
 *
 * @prop {boolean} [fullWidth=false] - Whether button takes up full width of parent
 * @prop {ButtonVariants} [variant='primary'] - Visual variant of button
 * @prop {ButtonSizes} [size='medium'] - Size of button
 * @prop {ReactNode} [iconLeft] - Icon to show on left side
 * @prop {ReactNode} [iconRight] - Icon to show on right side
 * @prop {boolean} [disabled=false] - Whether button is disabled
 * @prop {boolean} [loading=false] - Whether button shows loading indicator
 * @prop {StyleProp<ViewStyle>} [contentStyle] - Optional style override for button content
 */

export interface ButtonProps
  extends PressableProps,
    LayoutProps,
    SpaceProps,
    PositionProps {
  fullWidth?: boolean;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
}

const StyledPressable = styled.Pressable`
  ${space}
  ${layout}
  ${position}
`;

export const Button = ({
  fullWidth,
  variant = 'primary',
  size = 's',
  iconLeft,
  iconRight,
  loading = false,
  disabled,
  onPress,
  children,
  contentStyle,
  testID,
  onPressIn,
  onPressOut,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const [state, setState] = useState<ButtonStates>('idle');

  const {
    theme: {
      colors: { elements },
    },
  } = useTheme();

  useEffect(() => {
    setState(disabled ? 'disabled' : 'idle');
  }, [disabled]);

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
      if (!loading && !disabled) {
        onPress?.(evt);
      }
    },
    [loading, onPress, disabled],
  );

  const variantStyle = _variant();

  const accessibilityState = useMemo(
    () => ({
      disabled: !!disabled,
      busy: !!loading,
    }),
    [disabled, loading],
  );

  const isIconButton = !children;

  return (
    <StyledPressable
      {...props}
      accessibilityRole="button"
      accessibilityState={accessibilityState}
      disabled={disabled}
      style={[
        styles.content,
        variantStyle[variant][state].content,
        isIconButton ? _icon_button_size[size].content : _size[size].content,
        fullWidth && styles.fullWidth,
        contentStyle,
      ]}
      testID={`${testID}-button`}
      onPress={handleOnPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      {loading ? (
        <ActivityIndicator color={elements?.disabled} size={_icon[size]} />
      ) : (
        <>
          {iconLeft &&
            cloneIcon(iconLeft, {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore – need the color property instead of the style
              color: variantStyle[variant][state].text.color,
              width: _icon[size],
              height: _icon[size],
            })}
          <Text
            selectable={false}
            style={[
              styles.text,
              _size[size].text,
              variantStyle[variant][state].text,
            ]}
          >
            {children}
          </Text>
          {iconRight &&
            cloneIcon(iconRight, {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore – need the color property instead of the style
              color: variantStyle[variant][state].text.color,
              width: _icon[size],
              height: _icon[size],
            })}
        </>
      )}
    </StyledPressable>
  );
};

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    borderRadius: BORDER_RADIUS_BASE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // use alignSelf: flex-start to fit width content
    alignSelf: 'flex-start',
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
  },
  fullWidth: {
    width: '100%',
    flex: 1,
  },
});
