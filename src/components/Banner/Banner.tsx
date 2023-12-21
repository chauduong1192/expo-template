import { makeStyles } from '@rneui/themed';
import React, { useMemo, type ReactElement, type ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

import { Button, type ButtonProps } from '../Button';
import { CloseIcon, LikeDroplet } from '../Icons';
import { Text } from '../Text';

import { HStack, VStack } from '@/components/Layout';
import { ACTIVE_OPACITY } from '@/constants';
import { type CommonProps } from '@/types/common';
import { cloneIcon } from '@/utils/icon';

interface BannerProps extends CommonProps {
  type?: 'generic' | 'emphasized' | 'danger';
  container?: 'inline' | 'contained';
  title: string;
  description: string;
  showCloseIcon?: boolean;
  icon?: ReactElement;
  actions?: ButtonProps[];
}

export const Banner = ({
  icon,
  style,
  type = 'generic',
  container = 'inline',
  title,
  description,
  showCloseIcon = true,
  actions,
  ...props
}: BannerProps) => {
  const variantStyle = useVariant({ type, container });
  const _icon = icon ?? <LikeDroplet />;

  const renderButtonActions = useMemo(() => {
    if (!actions?.length) return null;
    return (
      <HStack gap={12}>
        {actions.map(({ children, ...buttonProps }, idx) => (
          <Button
            key={idx}
            size="xs"
            variant={type !== 'generic' ? 'overlay' : 'secondary'}
            {...buttonProps}
          >
            {children as ReactNode}
          </Button>
        ))}
      </HStack>
    );
  }, [actions, type]);

  return (
    <HStack
      alignItems="flex-start"
      gap={16}
      minWidth={350}
      padding={12}
      style={[variantStyle?.container, style]}
      {...props}
    >
      {cloneIcon(_icon, {
        color: variantStyle?.icon?.color,
        width: 18,
        height: 18,
      })}
      <VStack flex={1} gap={12} justifyContent="space-between">
        <VStack gap={4}>
          <Text fontWeight="500" style={variantStyle.title}>
            {title}
          </Text>
          <Text style={[variantStyle.title, variantStyle.desc]}>
            {description}
          </Text>
        </VStack>
        {renderButtonActions}
      </VStack>
      {showCloseIcon && (
        <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
          <CloseIcon
            color={variantStyle?.closeIcon?.color}
            height={16}
            width={16}
          />
        </TouchableOpacity>
      )}
    </HStack>
  );
};

const commonContainerStyle = {
  borderWidth: 1,
  borderRadius: 8,
};

const useVariant = makeStyles(
  (
    {
      colors: {
        controls: { danger },
        base: { bgAlternate, bgEmphasizedColored, bgDanger },
        elements: { highEm, midEm, lowEm },
        others: { orange },
        border: {
          separatorEmphasized,
          emphasizedColored,
          danger: borderDanger,
        },
      },
    },
    { type, container }: Pick<BannerProps, 'type' | 'container'>,
  ) => ({
    ...(type === 'generic' && {
      container: {
        backgroundColor: bgAlternate,
        ...(container === 'contained' && {
          borderColor: separatorEmphasized,
          ...commonContainerStyle,
        }),
      },
      title: {
        color: highEm,
      },
      desc: {
        color: lowEm,
      },
      icon: {
        color: highEm,
      },
      closeIcon: {
        color: midEm,
      },
    }),
    ...(type === 'emphasized' && {
      container: {
        backgroundColor: bgEmphasizedColored,
        ...(container === 'contained' && {
          borderColor: emphasizedColored,
          ...commonContainerStyle,
        }),
      },
      title: {
        color: orange,
      },
      desc: {
        color: orange,
      },
      icon: {
        color: orange,
      },
      closeIcon: {
        color: highEm,
      },
    }),
    ...(type === 'danger' && {
      container: {
        backgroundColor: bgDanger,
        ...(container === 'contained' && {
          borderColor: borderDanger,
          ...commonContainerStyle,
        }),
      },
      title: {
        color: danger,
      },
      desc: {
        color: danger,
      },
      icon: {
        color: danger,
      },
      closeIcon: {
        color: highEm,
      },
    }),
  }),
);
