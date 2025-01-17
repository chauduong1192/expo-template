import { KeyboardAvoidingView } from 'react-native';

import { CodeInput } from '@/components/Form/CodeInput';
import { Description } from '@/components/Form/Description';
import { HelperText } from '@/components/Form/HelperText';
import { Input } from '@/components/Form/Input';
import { type InputProps } from '@/components/Form/Input/types';
import { Label } from '@/components/Form/Label';
import { VStack } from '@/components/Layout';

/**
 * A reusable input component that renders a label, description, input, and helper text.
 * @returns The rendered input component.
 */
export const InputWithLabel = ({
  disabled = false,
  error = false,
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
  type = 'input',
  cellCount,
  isMasked = true,
  onChangeText,
  ...props
}: InputProps) => {
  const renderInput = (() =>
    type === 'input' ? (
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
    ) : (
      <CodeInput
        cellCount={cellCount}
        disabled={disabled}
        error={error}
        isMasked={isMasked}
        value={value}
        onChangeText={onChangeText}
      />
    ))();
  return (
    <KeyboardAvoidingView {...props} style={{ gap: 6 }}>
      <VStack gap={2}>
        <Label>{label}</Label>
        <Description>{description}</Description>
      </VStack>
      {renderInput}
      <HelperText error={error}>{helperText}</HelperText>
    </KeyboardAvoidingView>
  );
};
