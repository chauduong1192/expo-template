import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@rneui/themed';
import { useFonts } from 'expo-font';
import Stack from 'expo-router/stack';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Adding this to resolve react lazy loading https://github.com/expo/expo/issues/23570
import '@expo/metro-runtime';

import { theme } from '@/config/theme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'inter-regular': require('../../assets/fonts/Inter-Regular.ttf'),
    'inter-medium': require('../../assets/fonts/Inter-Medium.ttf'),
    'inter-semibold': require('../../assets/fonts/Inter-SemiBold.ttf'),
    'inter-bold': require('../../assets/fonts/Inter-Bold.ttf'),
    'nb-architekt-regular': require('../../assets/fonts/NB-Architekt-Regular.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  theme.mode = colorScheme ?? 'light';
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <BottomSheetModalProvider>
          <StatusBar style="light" />
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </BottomSheetModalProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
