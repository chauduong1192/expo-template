import { useTheme } from '@rneui/themed';

import { Text, type TextProps } from '@/components/Text';

/**
 * Renders an input label component.
 * @returns The rendered input label component.
 */

export const Label = ({ children, ...props }: TextProps) => {
  const {
    theme: {
      colors: {
        elements: { highEm },
      },
    },
  } = useTheme();

  return (
    <Text
      fontWeight="500"
      style={{ color: highEm, marginBottom: 2 }}
      {...props}
    >
      {children}
    </Text>
  );
};
