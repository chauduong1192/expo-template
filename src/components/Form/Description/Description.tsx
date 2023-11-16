import { Text, type TextProps } from '@/components/Text';

/**
 * Renders an input description component.
 * @returns The rendered input label component.
 */

export const Description = ({ children, ...props }: TextProps) => {
  return (
    <Text size="xs" style={{ marginBottom: 6 }} {...props}>
      {children}
    </Text>
  );
};
