import { makeStyles, useTheme } from '@rneui/themed';
import { useEffect, useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  useWindowDimensions,
} from 'react-native';
import {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { type InputProps } from './types';

import { BottomBorder } from '@/components/Form/BottomBorder';
import { InputAdornment } from '@/components/Form/InputAdornment';
import { BORDER_RADIUS_BASE } from '@/constants';

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
  const styles = useStyles({ disabled, leftIcon, rightIcon });
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
        style={[
          styles.leftIconAdornment, // fix top position for right icon with the text area
          inputProps?.multiline && { top: 12 },
        ]}
        {...leftAdornmentProps}
      />
      <RNTextInput
        ref={inputRef}
        {...inputProps}
        editable={!disabled}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        selectionColor={selectionColor}
        style={[
          styles.inputStyle,
          // fix height for text area input
          inputProps?.multiline && { height: 106 },
          inputStyleProps,
        ]}
        value={value}
        onBlur={handleOnBlur}
        onChangeText={onChangeText}
        onFocus={handleOnFocus}
      />
      <InputAdornment
        icon={rightIcon}
        style={[
          styles.rightIconAdornment,
          // fix top position for right icon with the text area
          inputProps?.multiline && { top: 12 },
        ]}
        {...rightAdornmentProps}
      />
      <BottomBorder
        disabled={disabled}
        error={error}
        style={animatedStyles}
        width={screenWidth}
      />
    </Pressable>
  );
};

const useStyles = makeStyles(
  (
    {
      colors: {
        base: { bg, bgAlternate },
        elements: { disabled: disableBg, midEm, highEm },
      },
    },
    {
      disabled,
      leftIcon,
      rightIcon,
    }: Pick<InputProps, 'disabled' | 'leftIcon' | 'rightIcon'>,
  ) => ({
    container: {
      overflow: 'hidden',
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      borderRadius: BORDER_RADIUS_BASE,
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
  }),
);
