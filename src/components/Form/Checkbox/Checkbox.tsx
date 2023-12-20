import { makeStyles, useTheme } from '@rneui/themed';
import { Pressable, type ViewProps } from 'react-native';

import { Description } from '@/components/Form/Description';
import { type InputProps } from '@/components/Form/Input/types';
import { CheckIcon } from '@/components/Icons';
import { Box, VStack } from '@/components/Layout';
import { Text } from '@/components/Text';
import { BORDER_RADIUS_BASE, BORDER_RADIUS_FULL } from '@/constants';
import { useBehaviorState } from '@/hooks';

export interface CheckboxProps
  extends ViewProps,
    Pick<InputProps, 'disabled' | 'label' | 'description'> {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  type?: 'checkbox' | 'radio';
}

export const Checkbox = ({
  value = false,
  disabled = false,
  label,
  description,
  style,
  type = 'checkbox',
  onValueChange,
  ...props
}: CheckboxProps) => {
  const isRadio = type === 'radio';

  const styles = useStyles({ disabled, value, isRadio });
  const {
    theme: {
      colors: {
        elements: { disabled: disabledBg, highEm },
      },
    },
  } = useTheme();

  const { handlePressIn, handlePressOut } = useBehaviorState();

  const handleChange = () => {
    if (disabled) return;
    onValueChange?.(!value);
  };

  return (
    <Pressable
      aria-label={type}
      {...props}
      accessibilityRole={type}
      accessibilityState={{ disabled, checked: value }}
      disabled={disabled}
      style={[
        styles.container,
        { alignItems: description ? 'flex-start' : 'center' },
        style,
      ]}
      onPress={handleChange}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Box style={styles.checkbox}>
        {value &&
          (!isRadio ? (
            <CheckIcon
              color={disabled ? disabledBg : highEm}
              height={12}
              width={12}
            />
          ) : (
            <Box style={styles.insideCheckbox} />
          ))}
      </Box>
      <VStack gap={2}>
        <Text size="xs" style={styles.label}>
          {label}
        </Text>
        <Description>{description}</Description>
      </VStack>
    </Pressable>
  );
};

const useStyles = makeStyles(
  (
    {
      colors: {
        elements: { disabled: disableBg, highEm },
        controls: { secondary, primary },
        border: { interactive, interactiveAlpha, separatorEmphasized },
      },
    },
    {
      disabled,
      value: isChecked,
      isRadio,
    }: Pick<CheckboxProps, 'disabled' | 'value'> & { isRadio: boolean },
  ) => ({
    container: {
      flexDirection: 'row',
      gap: 12,
      alignSelf: 'flex-start',
    },
    checkbox: {
      position: 'relative',
      backgroundColor: isChecked ? secondary : 'transparent',
      width: 20,
      height: 20,
      borderRadius: isRadio ? BORDER_RADIUS_FULL : BORDER_RADIUS_BASE,
      borderWidth: 1,
      borderColor: isChecked ? interactiveAlpha : interactive,
      justifyContent: 'center',
      alignItems: 'center',

      // disabled state
      ...(disabled && {
        backgroundColor: secondary,
        borderColor: separatorEmphasized,
      }),
    },
    insideCheckbox: {
      width: 8,
      height: 8,
      backgroundColor: primary,
      borderRadius: BORDER_RADIUS_FULL,
      // disabled state
      ...(disabled && {
        backgroundColor: disableBg,
      }),
    },
    label: {
      color: highEm,
    },
  }),
);
