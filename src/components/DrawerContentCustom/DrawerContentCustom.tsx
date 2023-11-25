import { type DrawerContentComponentProps } from '@react-navigation/drawer';
import { useTheme } from '@rneui/themed';
import React from 'react';
import { type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box, VStack } from '@/components/Layout';

export interface DrawerContentCustomProps
  extends Partial<DrawerContentComponentProps>,
    ViewProps {}

export const DrawerContentCustom = ({
  children,
  ...props
}: DrawerContentCustomProps) => {
  const {
    theme: {
      colors: {
        base: { bgAlternate },
        border: { separatorEmphasized },
      },
    },
  } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <VStack
      backgroundColor={bgAlternate}
      borderColor={separatorEmphasized}
      borderRightWidth={1}
      flex={1}
      height="100%"
      style={{ padding: 8 }}
      {...props}
    >
      <Box height={insets.top} />
      {children}
      <Box height={insets.bottom} />
    </VStack>
  );
};
