import { makeStyles } from '@rneui/themed';
import React from 'react';
import { type ViewProps } from 'react-native';

import { Box } from '@/components/Layout';
import { Text } from '@/components/Text';

export interface BadgeProps extends ViewProps {
  emphasis?: 'high' | 'medium' | 'low';
}

export const Badge = ({
  children,
  style,
  emphasis = 'medium',
  ...props
}: BadgeProps) => {
  const styles = useStyles({ emphasis });

  if (!children) return null;

  return (
    <Box {...props} style={[styles?.container, style]}>
      <Text fontFamily="nb-architekt" size="xs" style={styles.label}>
        {children}
      </Text>
    </Box>
  );
};

const useStyles = makeStyles(
  (
    {
      colors: {
        controls: { primary, secondary },
        base: { bg },
        elements: { highEm },
        others: { orange },
      },
    },
    { emphasis }: Pick<BadgeProps, 'emphasis'>,
  ) => ({
    container: {
      minWidth: 20,
      minHeight: 20,
      borderRadius: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: orange,

      ...(emphasis === 'medium' && {
        backgroundColor: primary,
      }),
      ...(emphasis === 'low' && {
        backgroundColor: secondary,
      }),
    },
    label: {
      color: bg,
      ...(emphasis === 'low' && {
        color: highEm,
      }),
    },
  }),
);
