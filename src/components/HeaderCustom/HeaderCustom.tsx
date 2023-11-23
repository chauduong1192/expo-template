import { type NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import React, { useMemo, type ReactNode, type ReactElement } from 'react';
import { SafeAreaView, type ViewProps } from 'react-native';

import { HeaderButton } from './HeaderButton';

import { CareLeft } from '@/components/Icons';
import { HStack, VStack } from '@/components/Layout';
import { Text } from '@/components/Text';
import { cloneIcon } from '@/utils/icon';

export interface HederCustomProps
  extends Partial<NativeStackHeaderProps>,
    ViewProps {
  title?: string | ReactElement;
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

  const renderTitle = useMemo(() => {
    if (typeof title === 'string') {
      return (
        <Text
          fontFamily="nb-architekt"
          shadowText
          size="m"
          style={{ flex: 1, textAlign: 'center', color: white }}
        >
          {title}
        </Text>
      );
    }
    return title;
  }, [title, white]);

  return (
    <VStack as={SafeAreaView} backgroundColor={bgAlternate}>
      <HStack
        alignItems="center"
        backgroundColor={bgAlternate}
        gap={8}
        height={64}
        justifyContent="space-between"
        // not sure why styled can not read the paddingX or paddingLeft...
        style={{ paddingHorizontal: 16 }}
        {...props}
      >
        {children ?? (
          <>
            <HeaderButton onPress={backButton ? navigation?.goBack : undefined}>
              {backButton && <CareLeft {...commonIconSize} color={highEm} />}
            </HeaderButton>
            {renderTitle}
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
