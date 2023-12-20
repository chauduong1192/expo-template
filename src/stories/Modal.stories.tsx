import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import {
  type ComponentStory,
  type ComponentMeta,
} from '@storybook/react-native';
import React from 'react';

import { Button } from '@/components/Button';
import { Box } from '@/components/Layout';
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/components/Modal';
import { Text } from '@/components/Text';
import { useModal } from '@/hooks';
import { useModalAlert } from '@/hooks/useModalAlert';

const ModalMeta: ComponentMeta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  args: {
    snapPoints: ['70%'],
  },
  decorators: [
    (Story) => (
      <BottomSheetModalProvider>
        <Story />
      </BottomSheetModalProvider>
    ),
  ],
};

export default ModalMeta;

type ModalStory = ComponentStory<typeof Modal>;

export const DefaultModal: ModalStory = (args) => {
  const { ref, onOpen, onClose } = useModal();
  return (
    <Box alignItems="center" justifyContent="center">
      <Button onPress={() => onOpen?.()}>Open modal</Button>
      <Modal ref={ref} {...args}>
        <ModalHeader title="Edit featured collectibles" onClose={onClose} />
        <ModalContent>
          <Text>modal content</Text>
          <Text>modal content</Text>
          <Text>modal content</Text>
          <Text>modal content</Text>
          <Text>modal content</Text>
          <Text>modal content</Text>
          <Text>modal content</Text>
          <Text>modal content</Text>
          <Text>modal content</Text>
        </ModalContent>
        <ModalFooter>
          <Button variant="secondary" onPress={onClose}>
            Cancel
          </Button>
          <Button fullWidth onPress={onClose}>
            Purchase
          </Button>
        </ModalFooter>
      </Modal>
    </Box>
  );
};

export const AlertModal: ComponentStory<any> = (args) => {
  const { renderModal: renderAlertModal, onOpen: onOpenAlert } = useModalAlert({
    ...args,
    actionButtons: [
      {
        label: 'Close',
        variant: 'secondary',
        closeOnPress: true,
      },
      {
        label: 'Try again',
        closeOnPress: true,
      },
    ],
    snapPoints: ['35%'],
  });
  return (
    <>
      <Box alignItems="center" justifyContent="center" position="relative">
        <Button onPress={onOpenAlert}>Open alert modal</Button>
      </Box>
      {renderAlertModal}
    </>
  );
};

AlertModal.args = {
  type: 'success',
  description: 'Description content',
  title: 'Well done!',
};

AlertModal.argTypes = {
  type: {
    options: ['success', 'loading'],
    control: { type: 'radio' },
  },
};
