import { makeStyles, useTheme } from '@rneui/themed';
import { useRef, useState } from 'react';
import { Pressable, TextInput as RNTextInput } from 'react-native';

import { InputAdornment } from './InputAdornment';
import { type InputStates, type InputProps } from './types';
import { Box } from '../Layout';

import { convertHexToRGBA } from '@/utils/color';

export const Input = ({
  disabled = false,
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
  const [state, setState] = useState<InputStates>('blur');

  const {
    theme: {
      colors: {
        elements: { midEm, lowEm, highEm },
      },
    },
  } = useTheme();

  const styles = useStyles({ disabled, error, state, leftIcon, rightIcon });

  const inputRef = useRef<RNTextInput>(null);

  const handleContainerPress = () => {
    if (!disabled) {
      inputRef?.current?.focus?.();
    }
  };

  const handleOnFocus = () => {
    setState('focus');
  };

  const handleOnBlur = () => {
    setState('blur');
  };

  const placeholderTextColor = disabled ? midEm : lowEm;
  const selectionColor = disabled ? 'transparent' : highEm;
  const isBottomShadow = state === 'focus' || !!error;

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
      <Box
        style={[styles.lineBottom, isBottomShadow && styles.lineBottomShadow]}
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
      state,
      error,
      leftIcon,
      rightIcon,
    }: Pick<InputProps, 'disabled' | 'error' | 'leftIcon' | 'rightIcon'> & {
      state: InputStates;
    },
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
      lineHeight: 18,
      fontFamily: 'inter-regular',
      color: disabled ? midEm : highEm,
      height: 20,
    },
    lineBottom: {
      borderRadius: 6,
      bottom: 0,
      right: 0,
      left: 0,
      height: 2,
      position: 'absolute',
      backgroundColor: error
        ? danger
        : state === 'focus'
          ? highEm
          : interactive,
    },
    lineBottomShadow: {
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
