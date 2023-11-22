import React from 'react';
import { type ViewProps } from 'react-native';

import { HStack } from '../Layout';

interface ModalFooterProps extends ViewProps {}

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
