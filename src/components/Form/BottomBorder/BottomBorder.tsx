import { makeStyles } from '@rneui/themed';
import { View, type ViewProps } from 'react-native';
import Animated from 'react-native-reanimated';

import { BORDER_RADIUS_BASE } from '@/constants';
import { convertHexToRGBA } from '@/utils/color';

interface BottomBorderProps extends ViewProps {
  error?: boolean;
  isFocused?: boolean;
  disabled?: boolean;
  width?: number;
}

export const BottomBorder = ({
  error = false,
  disabled = false,
  style,
  width,
}: BottomBorderProps) => {
  const styles = useStyles({ error });
  return (
    <>
      <View style={[styles.lineBottom, styles.lineMaskBottom]} />
      <Animated.View
        style={[
          styles.lineBottom,
          styles.lineOverrideBottom,
          { width: disabled ? 0 : width },
          style,
        ]}
      />
    </>
  );
};

const useStyles = makeStyles(
  (
    {
      colors: {
        white,
        elements: { highEm },
        controls: { danger },
        border: { interactive },
      },
    },
    { error }: { error: boolean },
  ) => ({
    lineBottom: {
      borderRadius: BORDER_RADIUS_BASE,
      bottom: 0,
      height: 2,
      left: 0,
      right: 0,
      position: 'absolute',
    },
    lineMaskBottom: {
      zIndex: 0,
      right: 0,
      backgroundColor: interactive,
    },
    lineOverrideBottom: {
      zIndex: 1,
      backgroundColor: error ? danger : highEm,
      shadowColor: convertHexToRGBA(error ? danger : white, 0.45),
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 8,
      shadowOpacity: 1,
      elevation: 5,
    },
  }),
);
