import { useTheme } from '@rneui/themed';
import {
  type ColorValue,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import { type TabsTypeVariants } from './types';

import { convertHexToRGBA } from '@/utils/color';

export const _variant = (): Record<
  TabsTypeVariants,
  {
    tabStyle: StyleProp<ViewStyle>;
    tabBarStyle: StyleProp<ViewStyle>;
    indicatorStyle: StyleProp<ViewStyle>;
    labelFocusedStyle: StyleProp<TextStyle>;
    labelStyle: StyleProp<TextStyle>;
    iconFocusedColor: ColorValue;
    iconColor: ColorValue;
  }
> => {
  const {
    theme: {
      colors: {
        white,
        elements: { highEm, lowEm },
        border: { interactive },
      },
    },
  } = useTheme();
  return {
    hug: {
      tabStyle: {
        width: 'auto',
        minWidth: 52,
      },
      tabBarStyle: {
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderColor: interactive,
      },
      indicatorStyle: {
        backgroundColor: highEm,
        shadowColor: convertHexToRGBA(white, 0.45),
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 8,
        shadowOpacity: 1,
        elevation: 5,
      },
      labelFocusedStyle: {
        color: highEm,
        textShadowColor: convertHexToRGBA(white, 0.37),
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 4,
      },
      labelStyle: {
        color: lowEm,
      },
      iconFocusedColor: highEm,
      iconColor: lowEm,
    },
    full: {
      tabStyle: {
        minWidth: 0,
      },
      tabBarStyle: {
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderColor: interactive,
      },
      indicatorStyle: {
        backgroundColor: highEm,
        shadowColor: convertHexToRGBA(white, 0.45),
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 8,
        shadowOpacity: 1,
        elevation: 5,
      },
      labelFocusedStyle: {
        fontWeight: 'bold',
        color: highEm,
        textShadowColor: convertHexToRGBA(white, 0.37),
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 4,
      },
      labelStyle: {
        fontWeight: '400',
        color: lowEm,
      },
      iconFocusedColor: highEm,
      iconColor: lowEm,
    },
  };
};
