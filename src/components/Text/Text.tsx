import { useTheme } from '@rneui/themed';
import React, { forwardRef, type Ref } from 'react';
import {
  Text as NativeText,
  type TextProps as NativeTextProps,
  type TextStyle,
  type StyleProp,
} from 'react-native';

import { _fontSize, _fontWeight, font } from './theme';
import {
  type FontFamilyTypes,
  type FontSizeTypes,
  type FontWeightTypes,
} from './types';

import { convertHexToRGBA } from '@/utils/color';

/**
 * Props for the Text component
 *
 * Extends NativeTextProps from React Native
 *
 * @interface
 *
 * @prop {FontSizeTypes} [size] - Font size
 * @prop {FontFamilyTypes} [fontFamily] - Font family
 * @prop {FontWeightTypes} [fontWeight] - Font weight
 * @prop {StyleProp<TextStyle>} [style] - Additional text styles
 */

export interface TextProps extends NativeTextProps {
  size?: FontSizeTypes;
  fontFamily?: FontFamilyTypes;
  fontWeight?: FontWeightTypes;
  style?: StyleProp<TextStyle>;
  shadowText?: boolean;
  // ref: any;
}

export const Text = forwardRef(
  (
    {
      size = 's',
      fontFamily = font.INTER,
      fontWeight = '400',
      children,
      style,
      shadowText = false,
      ...props
    }: TextProps,
    ref: Ref<any>,
  ) => {
    const {
      theme: {
        colors: {
          elements: { midEm },
          white,
        },
      },
    } = useTheme();

    const fontFamilyStyle = {
      fontFamily: `${fontFamily}-${_fontWeight[fontWeight]}`,
    };

    if (!children) return null;

    return (
      <NativeText
        ref={ref}
        style={[
          _fontSize[size],
          fontFamilyStyle,
          { color: midEm },
          style,
          shadowText && {
            textShadowColor: convertHexToRGBA(white, 0.37),
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 4,
          },
        ]}
        {...props}
      >
        {children}
      </NativeText>
    );
  },
);

// export const Text = ({
//   size = 's',
//   fontFamily = font.INTER,
//   fontWeight = '400',
//   children,
//   style,
//   shadowText = false,
//   ...props
// }: TextProps) => {
//   const {
//     theme: {
//       colors: {
//         elements: { midEm },
//         white,
//       },
//     },
//   } = useTheme();

//   const fontFamilyStyle = {
//     fontFamily: `${fontFamily}-${_fontWeight[fontWeight]}`,
//   };

//   if (!children) return null;

//   return (
//     <NativeText
//       style={[
//         _fontSize[size],
//         fontFamilyStyle,
//         { color: midEm },
//         style,
//         shadowText && {
//           textShadowColor: convertHexToRGBA(white, 0.37),
//           textShadowOffset: { width: 0, height: 0 },
//           textShadowRadius: 4,
//         },
//       ]}
//       {...props}
//     >
//       {children}
//     </NativeText>
//   );
// };
