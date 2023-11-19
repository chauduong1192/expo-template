import { type NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import { Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';

import { BadgeDot } from '@/components/BadgeDot';
import { HeaderCustom } from '@/components/HeaderCustom';
import { BellIcon } from '@/components/Icons';
import { Box } from '@/components/Layout';
import { Text } from '@/components/Text';
import { ACTIVE_OPACITY } from '@/constants';

export default () => {
  const {
    theme: {
      colors: {
        white,
        elements: { lowEm },
      },
    },
  } = useTheme();

  const renderHeaderCustom = (props: NativeStackHeaderProps) => {
    return (
      <HeaderCustom
        {...props}
        // title="Discover"
      >
        <Box>
          {/* <Button
            iconLeft={backButton && <CareLeft />}
            variant="tertiary"
            onPress={backButton ? navigation?.goBack : null}
          /> */}
        </Box>
        <Text
          fontFamily="nb-architekt"
          shadowText
          size="m"
          style={{ flex: 1, textAlign: 'center', color: white }}
        >
          Discover
        </Text>
        <Box
          activeOpacity={ACTIVE_OPACITY}
          alignItems="center"
          as={TouchableOpacity}
          height={40}
          justifyContent="center"
          width={40}
        >
          <Box
            alignItems="center"
            height={24}
            justifyContent="center"
            position="relative"
            width={24}
          >
            <BadgeDot style={{ right: 3 }} />
            <BellIcon color={lowEm} height={24} width={24} />
          </Box>
        </Box>
      </HeaderCustom>
    );
  };

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: renderHeaderCustom,
        }}
      />
    </Stack>
  );
};
