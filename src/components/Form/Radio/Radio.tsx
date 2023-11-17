import { makeStyles } from '@rneui/themed';
import { Pressable, type ViewProps } from 'react-native';

import { Description } from '../Description';
import { type InputProps } from '../Input/types';

import { Box, VStack } from '@/components/Layout';
import { Text } from '@/components/Text';
import { BORDER_RADIUS_FULL } from '@/constants';
import { useBehaviorState } from '@/hooks';

export interface RadioProps
  extends ViewProps,
    Pick<InputProps, 'disabled' | 'label' | 'description'> {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
}

export const Radio = ({
  value = false,
  disabled = false,
  label,
  description,
  style,
  onValueChange,
  ...props
}: RadioProps) => {
  const styles = useStyles({ disabled, value });

  const { handlePressIn, handlePressOut } = useBehaviorState();

  const handleChange = () => {
    if (disabled) return;
    onValueChange?.(!value);
  };

  return (
    <Pressable
      aria-label="radio"
      {...props}
      accessibilityRole="radio"
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
        {value && <Box style={styles.circle} />}
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
    { disabled, value: isChecked }: Pick<RadioProps, 'disabled' | 'value'>,
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
      borderRadius: BORDER_RADIUS_FULL,
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
    circle: {
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
