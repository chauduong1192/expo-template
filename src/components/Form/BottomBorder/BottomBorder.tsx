import { makeStyles, useTheme } from '@rneui/themed';
import { View } from 'react-native';

import { convertHexToRGBA } from '@/utils/color';

interface BottomBorderProps {
  error?: boolean;
  isFocused?: boolean;
}

export const BottomBorder = ({
  error = false,
  isFocused = false,
  ...props
}: BottomBorderProps) => {
  const styles = useStyles({ error });
  const {
    theme: {
      colors: {
        elements: { highEm },
        controls: { danger },
        border: { interactive },
      },
    },
  } = useTheme();
  return (
    <View
      {...props}
      style={[
        styles.lineBottom,
        (!!error || isFocused) && styles.lineBottomShadow,
        {
          backgroundColor: error ? danger : isFocused ? highEm : interactive,
        },
      ]}
    />
  );
};

const useStyles = makeStyles(
  (
    {
      colors: {
        white,
        controls: { danger },
        border: { interactive },
      },
    },
    { error }: { error: boolean },
  ) => ({
    lineBottom: {
      borderRadius: 6,
      bottom: 0,
      height: 2,
      left: 0,
      right: 0,
      position: 'absolute',
      backgroundColor: error ? danger : interactive,
    },
    lineBottomShadow: {
      // Ios
      shadowColor: convertHexToRGBA(error ? danger : white, 0.45),
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 8,
      shadowOpacity: 1,
      // Android
      elevation: 5,
    },
  }),
);
