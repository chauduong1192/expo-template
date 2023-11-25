import { useTheme } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { type ViewProps } from 'react-native';

import { Box } from '@/components/Layout';
import { convertHexToRGBA } from '@/utils/color';

export interface AvatarProps extends ViewProps {}

export const Avatar = ({ style, ...props }: AvatarProps) => {
  const {
    theme: {
      colors: {
        others: { orange },
      },
    },
  } = useTheme();
  return (
    <Box
      alignItems="center"
      borderRadius={2}
      justifyContent="center"
      {...props}
    >
      {/* LinearGradient should be replace by Image and get avatar url source from api */}
      <LinearGradient
        colors={[
          convertHexToRGBA(orange, 0.9),
          convertHexToRGBA(orange, 0.7),
          convertHexToRGBA(orange, 0.5),
        ]}
        end={{ x: 1, y: 0 }}
        start={{ x: 0, y: 0 }}
        style={[
          {
            width: 24,
            height: 24,
            borderRadius: 2,
          },
          style,
        ]}
      />
    </Box>
  );
};
