import { VStack } from '@/components/Layout';
import { Text } from '@/components/Text';
import { type CommonProps } from '@/types/common';

interface SectionComponentProps extends CommonProps {
  title: string;
}
export const SectionComponent = ({
  title,
  children,
}: SectionComponentProps) => (
  <VStack gap={10}>
    <Text fontFamily="nb-architekt" shadowText size="l">
      {title}
    </Text>
    {children}
  </VStack>
);
