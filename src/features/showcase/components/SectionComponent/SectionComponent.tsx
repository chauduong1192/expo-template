import { type ViewProps } from 'react-native';

import { VStack } from '@/components/Layout';
import { Text } from '@/components/Text';

interface SectionComponentProps extends ViewProps {
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
