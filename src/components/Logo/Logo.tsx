import React from 'react';
import { type ImageProps, Image } from 'react-native';

export interface LogoProps extends Partial<ImageProps> {}

const logoUrl = require('../../../assets/images/logo.png');

export const Logo = ({ ...props }: LogoProps) => {
  return (
    <Image
      resizeMode="cover"
      {...props}
      source={logoUrl}
      style={[{ width: 88, height: 16 }, props.style]}
    />
  );
};
