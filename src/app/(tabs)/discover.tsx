import { StyleSheet, View, Text } from 'react-native';

import { ArrowRightIcon } from '@/components/Icons';

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DiscoverScreen</Text>
      <View style={styles.separator} />
      <ArrowRightIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d0e13',
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
