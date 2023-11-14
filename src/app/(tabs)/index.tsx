import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/Text';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text fontWeight="700" size="xl">
        Home
      </Text>
      {['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'].map((size, idx) => (
        <Text key={idx} size={size as any}>
          The quick brown fox jumps over the lazy dog.
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
