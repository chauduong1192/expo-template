import { useTheme } from '@rneui/themed';
import { Link, type Route } from 'expo-router';
import React, { type ReactElement, useMemo, Fragment } from 'react';
import { TouchableOpacity } from 'react-native';

import { Badge } from '@/components/Badge';
import { HStack } from '@/components/Layout';
import { Text } from '@/components/Text';
import { ACTIVE_OPACITY } from '@/constants';
import { type CommonProps } from '@/types/common';
import { cloneIcon } from '@/utils/icon';

export interface NavItemProps extends CommonProps {
  label: string;
  href?: Route<string> | any;
  icon: ReactElement;
  badge?: number;
  onPress?: () => void;
}

export const NavItem = ({
  href,
  label,
  icon,
  badge,
  onPress,
  ...props
}: NavItemProps) => {
  const {
    theme: {
      colors: {
        elements: { midEm },
      },
    },
  } = useTheme();

  const commonIconProps = useMemo(() => {
    return {
      color: midEm,
      width: 20,
      height: 20,
    };
  }, [midEm]);

  const Component = href ? Link : Fragment;

  return (
    <Component {...(href && { asChild: true, href })} {...props}>
      <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={onPress}>
        <HStack alignItems="center" gap={12} paddingX={2} paddingY={12}>
          {cloneIcon(icon, { ...commonIconProps })}
          <Text size="s" style={{ flex: 1 }}>
            {label}
          </Text>
          {badge && <Badge emphasis="high">{badge}</Badge>}
        </HStack>
      </TouchableOpacity>
    </Component>
  );
};
