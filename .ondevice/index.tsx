import { getStorybookUI } from '@storybook/react-native';
import './doctools';
import './storybook.requires';
import { useFonts } from 'expo-font';
import { SafeAreaView, useColorScheme } from 'react-native';
import { theme } from '../src/config/theme';
import { ThemeProvider } from '@rneui/themed';

const StorybookUIRoot = getStorybookUI({
  shouldPersistSelection: true,
});

export default () => {
  const [fontsLoaded, error] = useFonts({
    'inter-regular': require('../assets/fonts/Inter-Regular.ttf'),
    'inter-medium': require('../assets/fonts/Inter-Medium.ttf'),
    'inter-semibold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'inter-bold': require('../assets/fonts/Inter-Bold.ttf'),
    'nb-architekt-regular': require('../assets/fonts/NB-Architekt-Regular.ttf'),
  });

  const colorScheme = useColorScheme();
  theme.mode = colorScheme ?? 'light';
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <StorybookUIRoot />
    </ThemeProvider>
  );
};
