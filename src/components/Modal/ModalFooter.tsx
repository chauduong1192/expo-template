import React from 'react';

import { HStack } from '../Layout';

import { type CommonProps } from '@/types/common';

interface ModalFooterProps extends CommonProps {}

export const ModalFooter = ({ children, ...props }: ModalFooterProps) => {
  return (
    <HStack
      alignItems="center"
      gap={18}
      justifyContent="space-between"
      paddingBottom={20}
      paddingX={20}
      width="100%"
      {...props}
    >
      {children}
    </HStack>
  );
};
