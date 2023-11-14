import { useTheme } from '@rneui/themed';
import React from 'react';
import {
  Text as NativeText,
  type TextProps as NativeTextProps,
  type TextStyle,
  type StyleProp,
} from 'react-native';

import { _fontFamily, _fontSize, _fontWeight, font } from './theme';
import {
  type FontFamilyTypes,
  type FontSizeTypes,
  type FontWeightTypes,
} from './types';

const containDash = (str: string) => str.includes('-');

/**
 * Interface for props passed to the Text component.
 * Extends NativeTextProps to add custom text styles.
 */
export interface TextProps extends NativeTextProps {
  /**
   * Optional font size for the text.
   */
  size?: FontSizeTypes;

  /**
   * Optional font family for the text.
   */
  fontFamily?: FontFamilyTypes;

  /**
   * Optional font weight for the text.
   */
  fontWeight?: FontWeightTypes;

  /**
   * Optional TextStyle overrides.
   */
  style?: StyleProp<TextStyle>;
}

export const Text = ({
  size = 's',
  fontFamily = font.INTER,
  fontWeight = '400',
  children,
  style,
  ...props
}: TextProps) => {
  const {
    theme: {
      colors: { elements },
    },
  } = useTheme();

  let fontFam: string = fontFamily;
  if (!containDash(fontFam)) {
    fontFam =
      _fontFamily[
        fontFamily as Extract<FontFamilyTypes, 'inter' | 'nbArchitekt'>
      ];
  }

  const fontFamilyStyle = {
    fontFamily: `${fontFam}${_fontWeight[fontWeight]}`,
  };

  if (!children) return null;

  return (
    <NativeText
      style={[
        _fontSize[size],
        fontFamilyStyle,
        { color: elements.midEm },
        style,
      ]}
      {...props}
    >
      {children}
    </NativeText>
  );
};
