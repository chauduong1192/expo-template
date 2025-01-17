import {
  BottomSheetBackdrop,
  BottomSheetModal,
  type BottomSheetBackdropProps,
  type BottomSheetModalProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { type BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { makeStyles } from '@rneui/themed';
import React, {
  forwardRef,
  useCallback,
  type PropsWithChildren,
  useMemo,
} from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BorderTopLight } from '@/components/BorderTopLight';
import { BORDER_RADIUS_BASE } from '@/constants';

export interface ModalProps extends Omit<BottomSheetModalProps, 'snapPoints'> {
  snapPoints?: BottomSheetModalProps['snapPoints'];
  containerHeight?: number;
  onClose?: () => void;
  onChange?: () => void;
}

export const Modal = forwardRef<
  BottomSheetModalMethods,
  PropsWithChildren<ModalProps>
>(
  (
    { children, onClose, onChange, ...props },
    ref: React.ForwardedRef<BottomSheetModalMethods>,
  ) => {
    const insets = useSafeAreaInsets();
    const styles = useStyles({ insets });

    const handleOnChange = useCallback(
      (_index: number) => {
        onChange?.();
      },
      [onChange],
    );

    const handleOnClose = useCallback(() => {
      onClose?.();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore – need the color property instead of the style
      ref?.current?.close();
    }, [onClose, ref]);

    const renderBackdrop = useCallback(
      (backdropProps: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      ),
      [],
    );

    const initialSnapPoints = useMemo(() => ['50%'], []);

    return (
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.containerBackground}
        bottomInset={insets.bottom}
        detached
        enableOverDrag={false}
        enablePanDownToClose
        handleIndicatorStyle={styles.indicator}
        handleStyle={styles.indicator}
        ref={ref}
        snapPoints={props.snapPoints ?? initialSnapPoints}
        style={styles.container}
        topInset={insets.top}
        onChange={handleOnChange}
        onDismiss={handleOnClose}
        {...props}
      >
        <BottomSheetView>
          <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
              <BorderTopLight style={{ opacity: 0.32 }} />
              {children}
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

const useStyles = makeStyles(
  ({
    colors: {
      base: { bg, bgEmphasized },
      border: { separatorEmphasized },
    },
  }) => ({
    containerBackground: {
      backgroundColor: 'transparent',
    },
    container: {
      marginHorizontal: 10,
    },
    indicator: {
      display: 'none',
    },
    outerContainer: {
      padding: 4,
      backgroundColor: bgEmphasized,
      borderRadius: 10,
      height: '100%',
      width: '100%',
    },
    innerContainer: {
      backgroundColor: bg,
      borderWidth: 1,
      borderRadius: BORDER_RADIUS_BASE,
      borderColor: separatorEmphasized,
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
    },
  }),
);
