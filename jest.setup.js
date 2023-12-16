import '@testing-library/jest-dom';
import '@testing-library/jest-native/extend-expect';

jest.mock('@gorhom/bottom-sheet', () => require('@gorhom/bottom-sheet/mock'));

// Suggestion from https://github.com/react-native-webview/react-native-webview/issues/2934#issuecomment-1524101977
jest.mock('react-native-webview', () => {
  const { View } = require('react-native');
  return {
    WebView: View,
  };
});

// providers mock with default value
// jest.mock('~/contexts/useApiSDK', () => ({
//   useHanbitcoApiSDK: () => ({
//     hanbitcoSDK: {
//       getMarketList: jest.fn(),
//       getAccountsInfo: jest.fn(),
//       getFavorites: jest.fn(),
//       addFavorite: jest.fn(),
//       removeFavorite: jest.fn(),
//       getCandlesForPair: jest.fn(),
//       getTradingPairFeeRates: jest.fn(),
//       resendResetPasswordAuthCode: jest.fn(),
//     },
//   }),
// }));
