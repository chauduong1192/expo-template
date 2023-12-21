import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import { type CommonProps } from '@/types/common';

export interface BorderTopLightProps extends CommonProps {}

export const BorderTopLight = ({ ...props }: BorderTopLightProps) => {
  return (
    <LinearGradient
      colors={[
        'rgba(255, 255, 255, 0)',
        'rgba(255, 255, 255, 0.83)',
        'rgba(235, 236, 239, 0)',
      ]}
      end={{ x: 1, y: 0 }}
      start={{ x: 0, y: 0 }}
      style={[
        {
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          height: 1,
          width: '100%',
          zIndex: 1,
        },
        props.style,
      ]}
    />
  );
};
