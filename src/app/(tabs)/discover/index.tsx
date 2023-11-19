import { ScrollView } from 'react-native-gesture-handler';

import { ScreenContainer } from '@/components/ScreenContainer';
import { Text } from '@/components/Text';

export default function DiscoverScreen() {
  return (
    <ScreenContainer>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 16,
          marginBottom: 100,
        }}
      >
        <Text fontFamily="nb-architekt" shadowText size="l">
          Discover
        </Text>
      </ScrollView>
    </ScreenContainer>
  );
}
