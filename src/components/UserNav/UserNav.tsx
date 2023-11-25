import { type DrawerContentComponentProps } from '@react-navigation/drawer';
import { useTheme } from '@rneui/themed';
import React from 'react';
import { type ViewProps } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { DropIcon, GiftIcon } from '@/components/Icons';
import { Box, HStack, VStack } from '@/components/Layout';
import { Text } from '@/components/Text';

export interface UserNavProps
  extends Partial<DrawerContentComponentProps>,
    ViewProps {}

export const UserNav = ({ ...props }: UserNavProps) => {
  const {
    theme: {
      colors: {
        base: { bgEmphasized },
        elements: { highEm, midEm },
        border: { separatorEmphasized },
        surface: { floating },
      },
    },
  } = useTheme();

  return (
    <VStack flex={1} gap={16} height="100%" {...props}>
      <VStack gap={20} padding={12}>
        {/* User Avatar */}
        <HStack gap={12}>
          <Avatar style={{ width: 56, height: 56 }} />
          <VStack gap={6} justifyContent="space-between">
            <Text
              fontFamily="nb-architekt"
              shadowText
              size="l"
              style={{ color: highEm }}
            >
              JOSHUA
            </Text>
            <Box
              backgroundColor={floating}
              borderRadius={4}
              height={26}
              width={116}
            />
          </VStack>
        </HStack>
        {/* Subscriptions/Followers/Following */}
        <HStack>
          <VStack gap={4} minWidth={100} paddingRight={12}>
            <Text fontFamily="nb-architekt" size="xs">
              Subscriptions
            </Text>
            <Text
              fontFamily="nb-architekt"
              shadowText
              size="m"
              style={{ color: highEm }}
            >
              20
            </Text>
          </VStack>
          <VStack
            borderColor={separatorEmphasized}
            borderLeftWidth={1}
            borderRightWidth={1}
            gap={4}
            minWidth={100}
            paddingX={12}
          >
            <Text fontFamily="nb-architekt" size="xs">
              Followers
            </Text>
            <Text
              fontFamily="nb-architekt"
              shadowText
              size="m"
              style={{ color: highEm }}
            >
              673
            </Text>
          </VStack>
          <VStack gap={4} minWidth={100} paddingLeft={12}>
            <Text fontFamily="nb-architekt" size="xs">
              Following
            </Text>
            <Text
              fontFamily="nb-architekt"
              shadowText
              size="m"
              style={{ color: highEm }}
            >
              11
            </Text>
          </VStack>
        </HStack>
      </VStack>

      {/* Droplets  */}
      <VStack backgroundColor={bgEmphasized} borderRadius={6} padding={16}>
        <HStack alignItems="center" gap={12} mb={12}>
          <Text
            fontFamily="nb-architekt"
            size="m"
            style={{ color: highEm, flex: 1 }}
          >
            Droplets
          </Text>
          <HStack alignItems="center" gap={4}>
            <Text
              fontFamily="nb-architekt"
              shadowText
              size="s"
              style={{ color: highEm }}
            >
              45
            </Text>
            <DropIcon color={highEm} height={14} width={14} />
          </HStack>
        </HStack>
        <VStack gap={2}>
          <HStack alignItems="center" gap={4}>
            <GiftIcon color={highEm} height={14} width={14} />
            <Text size="xs" style={{ color: highEm }}>
              We’ve added 45 droplets to your account.
            </Text>
          </HStack>
          <Text size="xs">You earn droplets by staying active on DRiP.</Text>
        </VStack>
        <Button contentStyle={{ marginTop: 8 }} size="xs" variant="secondary">
          Learn more
        </Button>
      </VStack>

      <VStack flex={1} gap={2}>
        <HStack alignItems="center" gap={12} paddingX={2} paddingY={12}>
          <GiftIcon color={midEm} height={20} width={20} />
          <Text size="s">Profile</Text>
        </HStack>
        <HStack alignItems="center" gap={12} paddingX={2} paddingY={12}>
          <GiftIcon color={midEm} height={20} width={20} />
          <Text size="s">Vault</Text>
        </HStack>
        <HStack alignItems="center" gap={12} paddingX={2} paddingY={12}>
          <GiftIcon color={midEm} height={20} width={20} />
          <Text size="s" style={{ flex: 1 }}>
            Invites
          </Text>
          <Badge emphasis="high">2</Badge>
        </HStack>
        <HStack alignItems="center" gap={12} paddingX={2} paddingY={12}>
          <GiftIcon color={midEm} height={20} width={20} />
          <Text size="s">My leaderboards</Text>
        </HStack>
        <HStack alignItems="center" gap={12} paddingX={2} paddingY={12}>
          <GiftIcon color={midEm} height={20} width={20} />
          <Text size="s">Settings</Text>
        </HStack>
      </VStack>
      <HStack alignItems="center" gap={12} paddingX={2} paddingY={12}>
        <GiftIcon color={midEm} height={20} width={20} />
        <Text size="s">Logout</Text>
      </HStack>
    </VStack>
  );
};
