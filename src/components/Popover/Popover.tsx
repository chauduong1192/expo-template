import { makeStyles } from '@rneui/themed';
import React, {
  type ComponentPropsWithRef,
  useState,
  type ReactNode,
} from 'react';
import { TouchableOpacity } from 'react-native';
import _Popover, { PopoverPlacement } from 'react-native-popover-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ACTIVE_OPACITY, BORDER_RADIUS_BASE } from '@/constants';

export interface PopoverProps extends ComponentPropsWithRef<typeof _Popover> {}

export const Popover = ({ children, from, ...props }: PopoverProps) => {
  const [showPopover, setShowPopover] = useState(false);
  const styles = useStyles();
  const insets = useSafeAreaInsets();
  return (
    <_Popover
      animationConfig={{
        duration: 300,
      }}
      arrowSize={{
        width: 0,
        height: 0,
      }}
      backgroundStyle={styles.backdrop}
      displayAreaInsets={insets}
      from={
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          style={styles.fromContainer}
          onPress={() => setShowPopover(true)}
        >
          {from as ReactNode}
        </TouchableOpacity>
      }
      isVisible={showPopover}
      offset={4}
      placement={PopoverPlacement.TOP}
      popoverStyle={styles.popover}
      onRequestClose={() => setShowPopover(false)}
      {...props}
    >
      {children}
    </_Popover>
  );
};

const useStyles = makeStyles(
  ({
    colors: {
      surface: { floating },
      border: { separator },
    },
  }) => ({
    popover: {
      borderRadius: BORDER_RADIUS_BASE,
      borderWidth: 1,
      borderColor: separator,
      backgroundColor: floating,
      minWidth: 100,
      minHeight: 100,
    },
    backdrop: {
      backgroundColor: 'transparent',
    },
    fromContainer: {
      alignSelf: 'flex-start',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
    },
  }),
);
