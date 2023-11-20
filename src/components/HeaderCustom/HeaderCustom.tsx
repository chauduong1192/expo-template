import { type NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import React, { type ReactNode } from 'react';
import { type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderButton } from './HeaderButton';

import { CareLeft } from '@/components/Icons';
import { Box, HStack, VStack } from '@/components/Layout';
import { Text } from '@/components/Text';
import { cloneIcon } from '@/utils/icon';

export interface HederCustomProps
  extends Partial<NativeStackHeaderProps>,
    ViewProps {
  title?: string;
  rightIcon?: ReactNode;
  rightPress?: () => void;
  backButton?: boolean;
}

const commonIconSize = {
  width: 24,
  height: 24,
};

export const HeaderCustom = ({
  navigation,
  rightIcon,
  rightPress,
  children,
  backButton = true,
  title,
  ...props
}: HederCustomProps) => {
  const {
    theme: {
      colors: {
        white,
        elements: { highEm },
        base: { bgAlternate },
      },
    },
  } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <VStack backgroundColor={bgAlternate}>
      <Box height={insets.top} />
      <HStack
        alignItems="center"
        backgroundColor={bgAlternate}
        gap={8}
        height={64}
        justifyContent="space-between"
        // not sure why styled can not read the paddingX or paddingLeft...
        style={{ paddingHorizontal: 8 }}
        {...props}
      >
        {children ?? (
          <>
            <HeaderButton onPress={backButton ? navigation?.goBack : undefined}>
              {backButton && <CareLeft {...commonIconSize} color={highEm} />}
            </HeaderButton>
            <Text
              fontFamily="nb-architekt"
              shadowText
              size="m"
              style={{ flex: 1, textAlign: 'center', color: white }}
            >
              {title}
            </Text>
            <HeaderButton onPress={rightPress}>
              {cloneIcon(rightIcon, {
                ...commonIconSize,
                color: highEm,
              })}
            </HeaderButton>
          </>
        )}
      </HStack>
    </VStack>
  );
};
