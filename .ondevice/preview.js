import { View } from 'react-native';

export const decorators = [
  (Story) => (
    <View
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0d0e13',
        flexDirection: 'column',
        padding: 20,
      }}
    >
      <Story />
    </View>
  ),
];
