import { useTheme } from '@rneui/themed';

import { WarningCircleIcon } from '@/components/Icons';
import { HStack } from '@/components/Layout';
import { Text, type TextProps } from '@/components/Text';

interface HelperTextProps extends TextProps {
  error?: boolean;
}

export const HelperText = ({ children, error, ...props }: HelperTextProps) => {
  const {
    theme: {
      colors: {
        controls: { danger },
        elements: { midEm },
      },
    },
  } = useTheme();

  if (!children) return null;

  return (
    <HStack alignItems="center" gap={4}>
      {error && <WarningCircleIcon color={danger} height={16} width={16} />}
      {typeof children === 'string' ? (
        <Text size="xs" style={{ color: error ? danger : midEm }} {...props}>
          {children}
        </Text>
      ) : (
        children
      )}
    </HStack>
  );
};
