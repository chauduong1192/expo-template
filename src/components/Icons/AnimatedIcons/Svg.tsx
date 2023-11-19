import { type ComponentPropsWithoutRef } from 'react';
import { Svg as _Svg } from 'react-native-svg';

export interface SvgProps extends ComponentPropsWithoutRef<'svg'> {}

export const Svg = ({
  children,
  width = 32,
  height = 32,
  viewBox = '0 0 32 32',
}: SvgProps) => {
  return (
    <_Svg fill="none" height={height} viewBox={viewBox} width={width}>
      {children}
    </_Svg>
  );
};
