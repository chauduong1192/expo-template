import { useTheme } from '@rneui/themed';
import {
  Switch as NativeSwitch,
  type SwitchProps as NativeSwitchProps,
} from 'react-native-switch';

import { Description } from '@/components/Form/Description';
import { type InputProps } from '@/components/Form/Input/types';
import { Label } from '@/components/Form/Label';
import { Box, HStack, VStack } from '@/components/Layout';
import { BORDER_RADIUS_BASE } from '@/constants';

interface SwitchProps
  extends NativeSwitchProps,
    Pick<InputProps, 'label' | 'description'> {}

export const Switch = ({
  disabled,
  value,
  label,
  description,
  ...rest
}: SwitchProps) => {
  const {
    theme: {
      colors: {
        controls: { secondary, primary },
        elements: { disabled: disabledBg, midEm },
        others: { orange },
      },
    },
  } = useTheme();

  const hasLabel = !!label;

  return (
    <HStack gap={20} justifyContent="space-between">
      {hasLabel && (
        <VStack flex={1} gap={2}>
          <Label>{label}</Label>
          <Description>{description}</Description>
        </VStack>
      )}
      <NativeSwitch
        backgroundActive={orange}
        backgroundInactive={secondary}
        barHeight={24}
        changeValueImmediately
        circleActiveColor={disabled ? disabledBg : primary}
        circleBorderWidth={0}
        circleInActiveColor={disabled ? disabledBg : primary}
        circleSize={20}
        disabled={disabled}
        innerCircleStyle={{ borderRadius: BORDER_RADIUS_BASE }}
        renderActiveText={false}
        renderInActiveText={false}
        renderInsideCircle={() => (
          <HStack alignItems="center" flex={1} gap={2} justifyContent="center">
            <Box
              backgroundColor={midEm}
              borderRadius={3}
              height={8}
              width={2}
            />
            <Box
              backgroundColor={midEm}
              borderRadius={3}
              height={8}
              width={2}
            />
          </HStack>
        )}
        switchBorderRadius={6}
        switchLeftPx={2}
        switchRightPx={2}
        switchWidthMultiplier={2.3}
        value={value}
        {...rest}
      />
    </HStack>
  );
};
