import { Image, type ImageProps } from 'expo-image';
import React from 'react';
// import { type ImageProps } from 'react-native';

export interface LogoProps extends Partial<ImageProps> {}

const logoUrl = require('../../../assets/images/logo.png');

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const Logo = ({ ...props }: LogoProps) => {
  return (
    <Image
      contentFit="cover"
      {...props}
      placeholder={blurhash}
      source={logoUrl}
      style={[{ width: 88, height: 16 }, props.style]}
      transition={500}
    />
  );
};
