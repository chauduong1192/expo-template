import React from 'react';
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native';

import { Box } from '@/components/Layout';
import { ACTIVE_OPACITY } from '@/constants';

export interface HeaderButtonProps extends TouchableOpacityProps {}

export const HeaderButton = ({
  onPress,
  children,
  ...props
}: HeaderButtonProps) => {
  return (
    <Box
      {...props}
      activeOpacity={ACTIVE_OPACITY}
      alignItems="center"
      as={TouchableOpacity}
      height={24}
      justifyContent="center"
      width={24}
      onPress={onPress}
    >
      {children}
    </Box>
  );
};
