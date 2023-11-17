import { useTheme } from '@rneui/themed';
import { type StyleProp, type TextStyle, type ViewStyle } from 'react-native';

import { type ButtonStates, type ButtonVariants } from './types';

import { convertHexToRGBA } from '@/utils/color';

export const _variant = (): Record<
  ButtonVariants,
  Record<
    ButtonStates,
    { content: StyleProp<ViewStyle>; text: StyleProp<TextStyle> }
  >
> => {
  const {
    theme: {
      colors: {
        controls: {
          primary,
          primaryHovered,
          secondary,
          secondaryHovered,
          danger,
          dangerHovered,
        },
        base: { bg },
        elements: { disabled, highEm },
        greys,
        greyOverlap,
      },
    },
  } = useTheme();

  return {
    primary: {
      idle: {
        content: {
          backgroundColor: primary,
        },
        text: {
          color: bg,
        },
      },
      hovered: {
        content: {
          backgroundColor: primaryHovered,
        },
        text: {
          color: bg,
        },
      },
      disabled: {
        content: {
          backgroundColor: primaryHovered,
        },
        text: {
          color: disabled,
        },
      },
    },
    secondary: {
      idle: {
        content: {
          backgroundColor: secondary,
        },
        text: {
          color: highEm,
        },
      },
      hovered: {
        content: {
          backgroundColor: secondaryHovered,
        },
        text: {
          color: highEm,
        },
      },
      disabled: {
        content: {
          backgroundColor: secondary,
        },
        text: {
          color: disabled,
        },
      },
    },
    tertiary: {
      idle: {
        content: {
          backgroundColor: 'transparent',
        },
        text: {
          color: highEm,
        },
      },
      hovered: {
        content: {
          backgroundColor: secondaryHovered,
        },
        text: {
          color: highEm,
        },
      },
      disabled: {
        content: {
          backgroundColor: 'transparent',
        },
        text: {
          color: disabled,
        },
      },
    },
    danger: {
      idle: {
        content: {
          backgroundColor: danger,
        },
        text: {
          color: highEm,
        },
      },
      hovered: {
        content: {
          backgroundColor: dangerHovered,
        },
        text: {
          color: highEm,
        },
      },
      disabled: {
        content: {
          backgroundColor: secondary,
        },
        text: {
          color: disabled,
        },
      },
    },
    overlay: {
      idle: {
        content: {
          backgroundColor: greyOverlap,
          backdropFilter: 'blur(4px)',
        },
        text: {
          color: highEm,
        },
      },
      hovered: {
        content: {
          backgroundColor: convertHexToRGBA(greyOverlap, 0.9),
        },
        text: {
          color: highEm,
        },
      },
      disabled: {
        content: {
          backgroundColor: convertHexToRGBA(greys[400], 0.6),
          backdropFilter: 'blur(6px)',
        },
        text: {
          color: disabled,
        },
      },
    },
  };
};

export const _size = {
  xs: {
    content: {
      paddingHorizontal: 12,
      paddingVertical: 7,
      gap: 4,
    },
    text: {
      fontSize: 12,
      lineHeight: 18,
    },
  },
  s: {
    content: {
      paddingHorizontal: 16,
      paddingVertical: 10,
      gap: 8,
    },
    text: {
      fontSize: 14,
      lineHeight: 20,
    },
  },
  m: {
    content: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      gap: 8,
    },
    text: {
      fontSize: 16,
      lineHeight: 24,
    },
  },
};

export const _icon_button_size = {
  xs: {
    content: {
      padding: 8,
    },
  },
  s: {
    content: {
      padding: 11,
    },
  },
  m: {
    content: {
      padding: 14,
    },
  },
};

export const _icon = {
  xs: 16,
  s: 18,
  m: 20,
};
