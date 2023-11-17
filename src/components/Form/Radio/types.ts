import { type ReactNode } from 'react';
import { type StyleProp, type TextStyle, type ViewProps } from 'react-native';

export type CheckboxProps = ViewProps & {
  value?: boolean;
  disabled?: boolean;
  label?: ReactNode;
  onValueChange?: (value: boolean) => void;
  labelStyle?: StyleProp<TextStyle>;
};
