import { useTheme } from '@rneui/themed';
import React, { type ReactElement } from 'react';
import { type ViewProps } from 'react-native';

import { BorderTopLight } from '@/components/BorderTopLight';
import { Button } from '@/components/Button';
import { CloseIcon } from '@/components/Icons';
import { HStack } from '@/components/Layout';
import { Text } from '@/components/Text';

interface ModalHeaderProps extends ViewProps {
  title?: string | ReactElement;
  onClose?: () => void;
}

export const ModalHeader = ({ title, onClose, ...props }: ModalHeaderProps) => {
  const {
    theme: {
      colors: {
        elements: { highEm },
        border: { separatorEmphasized },
      },
    },
  } = useTheme();
  return (
    <HStack
      alignItems="center"
      borderBottomWidth={1}
      borderColor={separatorEmphasized}
      gap={8}
      justifyContent="space-between"
      paddingX={20}
      paddingY={16}
      {...props}
    >
      <BorderTopLight style={{ opacity: 0.32 }} />
      {typeof title === 'string' ? (
        <Text
          fontFamily="nb-architekt"
          shadowText
          size="l"
          style={{ color: highEm }}
        >
          {title}
        </Text>
      ) : (
        title
      )}
      {onClose && (
        <Button
          iconLeft={<CloseIcon />}
          size="xs"
          variant="tertiary"
          onPress={onClose}
        />
      )}
    </HStack>
  );
};
