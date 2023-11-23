import { useTheme } from '@rneui/themed';
import { type ReactElement, useMemo } from 'react';
import { ActivityIndicator, type ViewProps } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { useModal } from './useModal';

import { Button } from '@/components/Button';
import { type ButtonVariants } from '@/components/Button/types';
import {
  CheckCircleIcon,
  WarningCircleIcon,
  WarningIcon,
} from '@/components/Icons';
import { VStack } from '@/components/Layout';
import { Modal, ModalContent, ModalFooter } from '@/components/Modal';
import { type ModalAlertType } from '@/components/Modal/types';
import { Text } from '@/components/Text';

interface useModalAlertProps extends ViewProps {
  title?: string | ReactElement;
  description?: string | ReactElement;
  type?: ModalAlertType;
  actionButtons?: {
    label: string;
    variant?: ButtonVariants;
    onPress?: () => void;
    testId?: string;
    closeOnPress?: boolean;
    dismissOnPress?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
  }[];
}

const DEFAULT_SIZE = {
  height: 32,
  width: 32,
};

export const useModalAlert = ({
  title,
  description,
  type = 'loading',
  actionButtons = [],
  children,
}: useModalAlertProps) => {
  const { ref, onOpen, onClose, onDismiss } = useModal();
  const {
    theme: {
      colors: {
        elements: { disabled, highEm },
        controls: { danger },
        others: { green, yellow },
      },
    },
  } = useTheme();

  const renderIcon = useMemo(() => {
    switch (type) {
      case 'loading':
        return <ActivityIndicator color={disabled} size={DEFAULT_SIZE.width} />;
      case 'error':
        return <WarningCircleIcon color={danger} {...DEFAULT_SIZE} />;
      case 'warning':
        return <WarningIcon color={yellow} {...DEFAULT_SIZE} />;
      case 'success':
        return <CheckCircleIcon color={green} {...DEFAULT_SIZE} />;
      default:
        return <></>;
    }
  }, [danger, disabled, green, type, yellow]);

  const renderButtons = useMemo(() => {
    if (!actionButtons) {
      return null;
    }
    return actionButtons.map(
      ({ label, variant, onPress, closeOnPress, dismissOnPress, ...props }) => {
        const handleOnPress = () => {
          if (closeOnPress) onClose();
          if (dismissOnPress) onDismiss();
          onPress?.();
        };

        return (
          <Button
            fullWidth
            key={label}
            variant={variant}
            onPress={handleOnPress}
            {...props}
          >
            {label}
          </Button>
        );
      },
    );
  }, [actionButtons, onClose, onDismiss]);

  const renderSuccessImage = useMemo(() => {
    if (type !== 'success') {
      return null;
    }
    return (
      <Animated.Image
        entering={FadeIn.duration(1000)}
        resizeMode="cover"
        source={require('../../assets/images/shape.png')}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
        }}
      />
    );
  }, [type]);

  const renderModal = (() => (
    <Modal ref={ref} snapPoints={['25%']}>
      {renderSuccessImage}
      <ModalContent
        style={{
          paddingTop: 32,
          gap: 8,
          alignItems: 'center',
        }}
      >
        {renderIcon}
        <VStack alignItems="center" gap={6} justifyContent="center">
          <Text
            fontFamily="nb-architekt"
            shadowText
            size="m"
            style={{ color: highEm }}
          >
            {title}
          </Text>
          <Text size="xs">{description}</Text>
        </VStack>
        {children}
      </ModalContent>
      <ModalFooter>{renderButtons}</ModalFooter>
    </Modal>
  ))();

  return {
    onOpen,
    onClose,
    renderModal,
  };
};
