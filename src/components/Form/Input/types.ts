import { type ReactElement, type ReactNode } from 'react';
import {
  type PressableProps,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import { type CommonProps } from '@/types/common';

/**
 * Props for Input component.
 *
 * Extends CommonProps and TextInputProps.
 *
 * @interface
 *
 * @prop {boolean} [isMasked=false] - Whether input is masked, e.g. password field
 * @prop {string} [name] - Name attribute for form input
 * @prop {('input'|'code')} [type='input'] - Type of input field
 * @prop {ReactNode} [label] - Input label
 * @prop {ReactNode} [description] - Input description
 * @prop {boolean} [disabled=false] - Whether input is disabled
 * @prop {boolean} [error=false] - Whether to display error state
 * @prop {ReactNode} [helperText] - Helper text below input
 * @prop {TextInputProps} [inputProps] - Additional TextInput props
 * @prop {StyleProp<ViewStyle & TextStyle>} [inputStyleProps] - Additional input styles
 * @prop {ReactElement} [leftIcon] - Left icon or button
 * @prop {PressableProps} [leftAdornmentProps] - Props for left icon pressable
 * @prop {ReactElement} [rightIcon] - Right icon or button
 * @prop {PressableProps} [rightAdornmentProps] - Props for right icon pressable
 * @prop {string} [placeholder] - Input placeholder text
 * @prop {string} value - Input value
 * @prop {number} cellCount - Number of cell to be used in the input when type is 'code'
 * @prop {Function} onChangeText - Input change handler
 */

export interface InputProps
  extends CommonProps,
    Pick<TextInputProps, 'textContentType'> {
  isMasked?: boolean;
  name?: string;
  type?: 'input' | 'code';
  label?: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
  error?: boolean;
  helperText?: ReactNode;
  inputProps?: TextInputProps;
  inputStyleProps?: StyleProp<ViewStyle & TextStyle>;
  leftIcon?: ReactElement;
  leftAdornmentProps?: PressableProps;
  rightIcon?: ReactElement;
  rightAdornmentProps?: PressableProps;
  placeholder?: string;
  value: string;
  cellCount?: number;
  onChangeText: (text: string) => void;
}

export type InputStates = 'blur' | 'focus';
