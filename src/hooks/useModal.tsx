import { type BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useRef } from 'react';

export const useModal = () => {
  const bottomSheetRef = useRef<BottomSheetModal | null>(null);

  const onOpen = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const onClose = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const onDismiss = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);

  return {
    ref: bottomSheetRef,
    onOpen,
    onClose,
    onDismiss,
  };
};
