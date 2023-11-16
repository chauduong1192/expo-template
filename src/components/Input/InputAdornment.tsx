import { useTheme } from '@rneui/themed';
import { type ReactNode } from 'react';
import { Pressable, type PressableProps } from 'react-native';

import { cloneIcon } from '@/utils/icon';

/**
 * Renders an input adornment component with an optional icon.
 * @param {Object} props - The props for the component.
 * @param {ReactNode} icon - The icon to be displayed as the adornment.
 * @returns The rendered input adornment component.
 */
export const InputAdornment = ({
  icon,
  ...props
}: PressableProps & { icon?: ReactNode }) => {
  const {
    theme: {
      colors: {
        elements: { midEm },
      },
    },
  } = useTheme();

  if (!icon) return null;

  return (
    <Pressable {...props}>
      {cloneIcon(icon, { color: midEm, height: 18, width: 18 })}
    </Pressable>
  );
};
