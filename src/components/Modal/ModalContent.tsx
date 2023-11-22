import React from 'react';
import { type ViewProps } from 'react-native';

import { VStack } from '@/components/Layout';

interface ModalContentProps extends ViewProps {}

export const ModalContent = ({ children, ...props }: ModalContentProps) => {
  return (
    <VStack flex={1} padding={20} width="100%" {...props}>
      {children}
    </VStack>
  );
};
