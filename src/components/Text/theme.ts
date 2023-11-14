import { type StyleProp, type TextStyle } from 'react-native';

import {
  type FontSizeTypes,
  type FontWeightTypes,
  type FontFamilyTypes,
} from './types';

export const _fontWeight: Record<FontWeightTypes, string> = {
  400: 'regular',
  500: 'medium',
  600: 'semibold',
  700: 'bold',
};

export const _fontFamily: Record<
  Extract<FontFamilyTypes, 'inter' | 'nbArchitekt'>,
  string
> = {
  inter: 'inter-',
  nbArchitekt: 'nbArchitekt',
};

export enum font {
  INTER = 'inter-',
  NB_ARCHITEKT = 'nbArchitekt',
}

export const _fontSize: Record<FontSizeTypes, StyleProp<TextStyle>> = {
  '2xs': {
    fontSize: 10,
    lineHeight: 10,
  },
  xs: {
    fontSize: 12,
    lineHeight: 18,
  },
  s: {
    fontSize: 14,
    lineHeight: 20,
  },
  m: {
    fontSize: 16,
    lineHeight: 24,
  },
  l: {
    fontSize: 18,
    lineHeight: 24,
  },
  xl: {
    fontSize: 20,
    lineHeight: 32,
  },
  '2xl': {
    fontSize: 24,
    lineHeight: 32,
  },
  '3xl': {
    fontSize: 28,
    lineHeight: 36,
  },
};
