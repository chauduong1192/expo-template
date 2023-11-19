import { useTheme } from '@rneui/themed';
import React, { type ReactNode } from 'react';
import { type ViewProps } from 'react-native';

import { BorderIcon, ListBulletsIcon } from '../Icons';

import { Box, VStack } from '@/components/Layout';
import { Text } from '@/components/Text';

export interface EmptyStateProps extends ViewProps {
  title: ReactNode;
  description?: ReactNode;
}

export const EmptyState = ({
  title,
  description,
  children,
  ...props
}: EmptyStateProps) => {
  const {
    theme: {
      colors: {
        elements: { highEm, lowEm },
        border: { separator },
        base: { bgEmphasized },
      },
    },
  } = useTheme();

  return (
    <VStack alignItems="center" gap={20} {...props} paddingX={20} paddingY={36}>
      <Box
        alignItems="center"
        height={64}
        justifyContent="center"
        position="relative"
        width={64}
      >
        <BorderIcon
          color={highEm}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 0,
          }}
        />
        <Box
          alignItems="center"
          backgroundColor={bgEmphasized}
          borderColor={separator}
          borderRadius={4}
          borderWidth={1}
          height={37}
          justifyContent="center"
          width={37}
        >
          <ListBulletsIcon color={highEm} height={24} width={24} />
        </Box>
      </Box>
      {children ?? (
        <VStack gap={8} justifyContent="center">
          <Text
            fontFamily="nb-architekt"
            size="l"
            style={{ textAlign: 'center', color: highEm }}
          >
            {title}
          </Text>
          <Text size="s" style={{ textAlign: 'center', color: lowEm }}>
            {description}
          </Text>
        </VStack>
      )}
    </VStack>
  );
};
