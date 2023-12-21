import React from 'react';

import { VStack } from '@/components/Layout';
import { type CommonProps } from '@/types/common';

interface ModalContentProps extends CommonProps {}

export const ModalContent = ({ children, ...props }: ModalContentProps) => {
  return (
    <VStack flex={1} padding={20} width="100%" {...props}>
      {children}
    </VStack>
  );
};
