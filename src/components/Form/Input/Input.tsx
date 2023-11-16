import { makeStyles, useTheme } from '@rneui/themed';
import { useEffect, useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { type InputProps } from './types';

import { InputAdornment } from '@/components/Form';
import { Box } from '@/components/Layout';
import { convertHexToRGBA } from '@/utils/color';

export const Input = ({
  disabled,
  inputProps,
  inputStyleProps,
  leftIcon,
  rightIcon,
  placeholder,
  value,
  onChangeText,
  error = undefined,
  leftAdornmentProps,
  rightAdornmentProps,
  ...props
}: InputProps) => {
  const {
    theme: {
      colors: {
        elements: { midEm, lowEm, highEm },
      },
    },
  } = useTheme();

  const { width: screenWidth } = useWindowDimensions();
  const styles = useStyles({ disabled, error, leftIcon, rightIcon });
  const inputRef = useRef<RNTextInput>(null);
  const offset = useSharedValue(-screenWidth);

  const handleContainerPress = () => {
    if (!disabled) {
      inputRef?.current?.focus?.();
    }
  };

  useEffect(() => {
    if (error) {
      offset.value = withTiming(0);
    }
  }, [error]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const handleOnFocus = () => {
    offset.value = withTiming(0);
  };

  const handleOnBlur = () => {
    offset.value = withTiming(error ? 0 : -screenWidth);
  };

  const placeholderTextColor = disabled ? midEm : lowEm;
  const selectionColor = disabled ? 'transparent' : highEm;

  return (
    <Pressable
      style={[styles.container, props.style]}
      testID={`${props.testID}-input`}
      onPress={handleContainerPress}
    >
      <InputAdornment
        icon={leftIcon}
        style={styles.leftIconAdornment}
        {...leftAdornmentProps}
      />
      <RNTextInput
        ref={inputRef}
        {...inputProps}
        editable={!disabled}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        selectionColor={selectionColor}
        style={[styles.inputStyle, inputStyleProps]}
        value={value}
        onBlur={handleOnBlur}
        onChangeText={onChangeText}
        onFocus={handleOnFocus}
      />
      <InputAdornment
        icon={rightIcon}
        style={styles.rightIconAdornment}
        {...rightAdornmentProps}
      />
      <Box style={[styles.lineBottom, styles.lineMaskBottom]} />
      <Animated.View
        style={[
          styles.lineBottom,
          styles.lineOverrideBottom,
          { width: disabled ? 0 : screenWidth },
          animatedStyles,
        ]}
      />
    </Pressable>
  );
};

const useStyles = makeStyles(
  (
    {
      colors: {
        white,
        base: { bg, bgAlternate },
        elements: { disabled: disableBg, midEm, highEm },
        controls: { danger },
        border: { interactive },
      },
    },
    {
      disabled,
      error,
      leftIcon,
      rightIcon,
    }: Pick<InputProps, 'disabled' | 'error' | 'leftIcon' | 'rightIcon'>,
  ) => ({
    container: {
      overflow: 'hidden',
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      borderRadius: 6,
      borderTopWidth: 1,
      borderColor: bg,
      paddingLeft: leftIcon ? 38 : 12,
      paddingRight: rightIcon ? 38 : 12,
      paddingVertical: 12,
      backgroundColor: disabled ? disableBg : bgAlternate,
    },
    leftIconAdornment: {
      position: 'absolute',
      left: 12,
    },
    rightIconAdornment: {
      position: 'absolute',
      right: 12,
    },
    inputStyle: {
      flex: 1,
      textAlignVertical: 'center',
      fontSize: 14,
      // NOTE: use lineHeight to center the text
      // this issue might be from the font height
      lineHeight: 18,
      fontFamily: 'inter-regular',
      color: disabled ? midEm : highEm,
      height: 20,
    },
    lineBottom: {
      borderRadius: 6,
      bottom: 0,
      height: 2,
      left: 0,
      right: 0,
      position: 'absolute',
    },
    lineMaskBottom: {
      zIndex: 0,
      right: 0,
      backgroundColor: interactive,
    },
    lineOverrideBottom: {
      zIndex: 1,
      backgroundColor: error ? danger : highEm,
      shadowColor: convertHexToRGBA(error ? danger : white, 0.45),
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 8,
      shadowOpacity: 1,
      elevation: 5,
    },
  }),
);
