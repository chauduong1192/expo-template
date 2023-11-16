import { KeyboardAvoidingView } from 'react-native';

import { Description } from './Description';
import { HelperText } from './HelperText';
import { Input } from './Input';
import { Label } from './Label';
import { type InputProps } from './types';
// import { useAppTheme } from '@/theme';
import { VStack } from '../Layout';
// import { cloneIcon } from '~/utils/icon';

/**
 * A reusable input component that renders a label, description, input, and helper text.
 * @returns The rendered input component.
 */
export const InputWithLabel = ({
  disabled = false,
  error = false,
  // isMasked = true,
  // type = 'input',
  label,
  description,
  helperText,
  inputProps,
  inputStyleProps,
  leftIcon,
  rightIcon,
  rightAdornmentProps,
  placeholder,
  value,
  onChangeText,
  ...props
}: InputProps) => {
  return (
    <KeyboardAvoidingView {...props}>
      <VStack>
        <Label>{label}</Label>
        <Description>{description}</Description>
      </VStack>
      <Input
        {...{
          disabled,
          inputProps,
          inputStyleProps,
          leftIcon,
          style: props.style,
          rightIcon,
          placeholder,
          value,
          onChangeText,
          error,
          rightAdornmentProps,
        }}
      />
      <HelperText error={error}>{helperText}</HelperText>
    </KeyboardAvoidingView>
  );
};
