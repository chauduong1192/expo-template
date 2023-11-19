import { useTheme } from '@rneui/themed';
import { type PropsWithChildren } from 'react';
import { SafeAreaView, type StyleProp, type ViewStyle } from 'react-native';

import { Box } from '@/components/Layout';

interface ScreenContainerProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const ScreenContainer = ({ style, children }: ScreenContainerProps) => {
  const {
    theme: {
      colors: {
        base: { bgAlternate },
      },
    },
  } = useTheme();

  return (
    <SafeAreaView style={[{ backgroundColor: bgAlternate, flex: 1 }]}>
      {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
      <Box
        flex={1}
        height="100%"
        position="relative"
        style={style}
        width="100%"
      >
        {children}
      </Box>
      {/* </TouchableWithoutFeedback> */}
    </SafeAreaView>
  );
};
