module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      'react-native-reanimated/plugin',
      ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
