import { makeStyles, useTheme } from '@rneui/themed';
import { Pressable } from 'react-native';
import {
  CodeField,
  Cursor,
  MaskSymbol,
  isLastFilledCell,
  useBlurOnFulfill,
  useClearByFocusCell,
  type RenderCellOptions,
} from 'react-native-confirmation-code-field';

import { BottomBorder } from '@/components/Form/BottomBorder';
import { Text } from '@/components/Text';

const DEFAULT_CELL_COUNT = 6;

interface CodeInputFieldProps {
  value: string;
  error?: boolean;
  onChangeText: (text: string) => void;
  cellCount?: number;
  isMasked?: boolean;
  disabled?: boolean;
}

export const CodeInputField = ({
  value,
  error,
  disabled,
  onChangeText,
  cellCount = DEFAULT_CELL_COUNT,
  isMasked = true,
  ...rest
}: CodeInputFieldProps) => {
  const {
    theme: {
      colors: {
        elements: { highEm, lowEm },
      },
    },
  } = useTheme();

  const styles = useStyles({ disabled });

  const ref = useBlurOnFulfill({ value, cellCount });
  const [_, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeText,
  });

  const renderCell = ({ index, symbol, isFocused }: RenderCellOptions) => {
    let textChild: JSX.Element | null = null;

    if (symbol) {
      textChild = isMasked ? (
        <MaskSymbol
          isLastFilledCell={isLastFilledCell({ index, value })}
          maskSymbol="x"
        >
          {symbol}
        </MaskSymbol>
      ) : (
        <>{symbol}</>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Pressable style={[styles.cellContainer]}>
        <Text
          size="l"
          style={{
            color: textChild ? highEm : lowEm,
            // NOTE: use lineHeight to center the text
            // this issue might be from the font height
            lineHeight: 18,
          }}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {textChild ?? 'x'}
        </Text>
        <BottomBorder error={error} isFocused={isFocused} />
      </Pressable>
    );
  };
  return (
    <CodeField
      {..._}
      {...rest}
      caretHidden={false}
      cellCount={cellCount}
      editable={!disabled}
      keyboardType="number-pad"
      ref={ref}
      renderCell={renderCell}
      textContentType="oneTimeCode"
      value={value}
      onChangeText={(e) => {
        if (disabled) return;
        onChangeText(e);
      }}
    />
  );
};

const useStyles = makeStyles(
  (
    {
      colors: {
        base: { bg, bgAlternate },
        elements: { disabled: disableBg },
      },
    },
    { disabled }: Pick<CodeInputFieldProps, 'disabled'>,
  ) => ({
    cellContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 6,
      borderTopWidth: 1,
      borderColor: bg,
      backgroundColor: disabled ? disableBg : bgAlternate,
      justifyContent: 'center',
      alignItems: 'center',
      width: 52,
      height: 48,
    },
  }),
);