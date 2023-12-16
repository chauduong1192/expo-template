import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@rneui/themed';
import { render } from '@testing-library/react-native';
import { type ReactNode } from 'react';

import { theme } from '@/config/theme';

/**
 * Renders the app theme based on the current device color scheme.
 * @returns The rendered app theme with the provided children components.
 */
export const renderApp = (children: ReactNode) => {
  theme.mode = 'light';

  return render(
    <ThemeProvider theme={theme}>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </ThemeProvider>,
  );
};
