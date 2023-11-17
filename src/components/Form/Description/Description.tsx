import { Text, type TextProps } from '@/components/Text';

/**
 * Renders an input description component.
 * @returns The rendered input label component.
 */

export const Description = ({ children, ...props }: TextProps) => {
  if (!children) return null;
  return (
    <Text size="xs" {...props}>
      {children}
    </Text>
  );
};
