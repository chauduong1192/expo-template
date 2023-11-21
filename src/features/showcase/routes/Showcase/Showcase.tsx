import { useTheme } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import { useToggle } from 'usehooks-ts';

import { BadgeDot } from '@/components/BadgeDot';
import { Button } from '@/components/Button';
import { EmptyState } from '@/components/EmptyState';
import { InputWithLabel, Checkbox, Input, Switch } from '@/components/Form';
import { BellIcon, PlusCircleIcon } from '@/components/Icons';
import { Box, HStack, VStack } from '@/components/Layout';
import { Tabs } from '@/components/Tabs';
import { Text } from '@/components/Text';
import { SectionComponent } from '@/features/showcase/components';

const tabs = [
  {
    title: 'entire',
    icon: <PlusCircleIcon />,
    component: () => (
      <View>
        <Text>entire</Text>
      </View>
    ),
  },
  {
    title: 'account',
    badgeLabel: 1,
    component: () => (
      <View>
        <Text>entire</Text>
      </View>
    ),
  },
  {
    title: 'customerConfirmation',
    component: () => (
      <View>
        <Text>entire</Text>
      </View>
    ),
  },
  {
    title: 'transactionAsset',
    component: () => (
      <View>
        <Text>entire</Text>
      </View>
    ),
  },
  {
    title: 'depositAndWithdrawal',
    component: () => (
      <View>
        <Text>entire</Text>
      </View>
    ),
  },
];

export const Showcase = () => {
  const [value, setValue] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [switchValue, toggle] = useToggle();

  const {
    theme: {
      colors: {
        elements: { lowEm },
      },
    },
  } = useTheme();

  return (
    <VStack gap={30} paddingX={20} paddingY={16}>
      {/* Badge dot animation */}
      <SectionComponent title="Badge Dot Animation">
        <Box
          alignItems="center"
          height={24}
          justifyContent="center"
          position="relative"
          width={24}
        >
          <BadgeDot style={{ right: 3 }} />
          <BellIcon color={lowEm} height={24} width={24} />
        </Box>
      </SectionComponent>

      {/* Empty state component */}
      <SectionComponent title="Empty State">
        <EmptyState
          description="Once you follow other users, your notifications will show here."
          title="No notifications yet"
        />
      </SectionComponent>

      {/* Tabs component */}
      <SectionComponent title="Tabs">
        <Tabs
          indexActive={0}
          sceneContainerStyle={{
            paddingTop: 10,
          }}
          scenes={{
            entire: tabs[0].component,
            account: tabs[1].component,
            customerConfirmation: tabs[2].component,
            transactionAsset: tabs[3].component,
            depositAndWithdrawal: tabs[4].component,
          }}
          tabs={
            tabs.map(({ component, title, badgeLabel, icon }) => ({
              icon,
              title,
              badgeLabel,
              component,
              key: title,
            })) as any
          }
        />
      </SectionComponent>

      {/* Checkbox component */}
      <SectionComponent title="Checkbox and Radio">
        <Checkbox
          description="Description goes here"
          label="Label"
          type="radio"
          value={switchValue}
          onValueChange={toggle}
        />
        <Checkbox
          description="Description goes here"
          label="Label"
          value={switchValue}
          onValueChange={toggle}
        />
        <Checkbox
          description="Description goes here"
          disabled
          label="Label"
          type="radio"
          value={switchValue}
          onValueChange={toggle}
        />
        <Checkbox
          description="Description goes here"
          disabled
          label="Label"
          value={switchValue}
          onValueChange={toggle}
        />
      </SectionComponent>

      {/* Switch component */}
      <SectionComponent title="Switch">
        <Switch
          description="Description goes here"
          label="Label"
          value={switchValue}
          onValueChange={toggle}
        />
        <Switch value={switchValue} onValueChange={toggle} />
        <Switch disabled value={switchValue} onValueChange={toggle} />
      </SectionComponent>

      {/* Input component */}
      <SectionComponent title="Input And Input With Label">
        <Input
          placeholder="Enter something here"
          value={value}
          onChangeText={setValue}
        />
        <InputWithLabel
          description="Description goes here"
          label="Your name"
          leftIcon={<PlusCircleIcon />}
          placeholder="Input Your Name"
          rightAdornmentProps={{
            onPress: () => console.log(123123123),
          }}
          rightIcon={<PlusCircleIcon />}
          value={value}
          onChangeText={(text: string) => setValue(text)}
        />
        <InputWithLabel
          description="Description goes here"
          disabled
          label="Your name"
          leftIcon={<PlusCircleIcon />}
          placeholder="Input Your Name"
          rightIcon={<PlusCircleIcon />}
          value="123123"
          onChangeText={(text: string) => setValue(text)}
        />
        <InputWithLabel
          description="Description goes here"
          error
          helperText="Error text here"
          label="Your name"
          leftIcon={<PlusCircleIcon />}
          placeholder="Input Your Name"
          value={value}
          onChangeText={(text: string) => setValue(text)}
        />
      </SectionComponent>

      {/* Code Input component */}
      <SectionComponent title="Code Input">
        <InputWithLabel
          description="Description goes here"
          helperText="123123123"
          label="Your name"
          type="code"
          value={code}
          onChangeText={setCode}
        />
        <InputWithLabel
          description="Description goes here"
          disabled
          label="Your name"
          type="code"
          value={code}
          onChangeText={setCode}
        />
        <InputWithLabel
          description="Description goes here"
          disabled
          helperText=" Helper Text here"
          label="Your name"
          type="code"
          value={code}
          onChangeText={setCode}
        />
        <InputWithLabel
          description="Description goes here"
          error
          helperText="Error Text"
          label="Your name"
          type="code"
          value={code}
          onChangeText={setCode}
        />
      </SectionComponent>

      {/* Textarea component */}
      <SectionComponent title="TextArea">
        <InputWithLabel
          description="Description goes here"
          inputProps={{ multiline: true }}
          inputStyleProps={{ paddingTop: 0 }}
          label="Your name"
          leftIcon={<PlusCircleIcon />}
          placeholder="text area"
          rightIcon={<PlusCircleIcon />}
          style={{ alignItems: 'flex-start' }}
          value={value}
          onChangeText={setValue}
        />
        <InputWithLabel
          description="Description goes here"
          error
          helperText="Error text here"
          inputProps={{ multiline: true }}
          inputStyleProps={{ paddingTop: 0 }}
          label="Your name"
          leftIcon={<PlusCircleIcon />}
          placeholder="text area"
          rightIcon={<PlusCircleIcon />}
          style={{ alignItems: 'flex-start' }}
          value={value}
          onChangeText={setValue}
        />
      </SectionComponent>

      {/* Typography component */}
      <SectionComponent title="Typography">
        {['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'].map((size, idx) => (
          <Text key={idx} size={size as any}>
            {`The quick brown fox jumps over the lazy dog. - ${size}`}
          </Text>
        ))}
      </SectionComponent>

      {/* Button component */}
      <SectionComponent title="Button">
        <HStack flexWrap="wrap" gap={20} p={20} width="100%">
          <VStack gap={10}>
            <Button
              iconLeft={<PlusCircleIcon />}
              iconRight={<PlusCircleIcon />}
              size="m"
            >
              Label
            </Button>
            <Button
              iconLeft={<PlusCircleIcon />}
              iconRight={<PlusCircleIcon />}
              size="s"
            >
              Label
            </Button>
            <Button
              iconLeft={<PlusCircleIcon />}
              iconRight={<PlusCircleIcon />}
              size="xs"
            >
              Label
            </Button>
            <Button
              disabled
              iconLeft={<PlusCircleIcon />}
              iconRight={<PlusCircleIcon />}
              loading
              size="xs"
            >
              Label
            </Button>
          </VStack>
          <VStack gap={10}>
            <Button size="m" variant="secondary">
              Following
            </Button>
            <Button size="s" variant="secondary">
              See history
            </Button>
            <Button size="xs" variant="secondary">
              See history
            </Button>
            <Button disabled size="xs" variant="secondary">
              Following
            </Button>
          </VStack>
          <VStack gap={10}>
            <Button size="m" variant="tertiary">
              Label
            </Button>
            <Button size="s" variant="tertiary">
              Label
            </Button>
            <Button size="xs" variant="tertiary">
              Label
            </Button>
            <Button disabled size="xs" variant="tertiary">
              Label
            </Button>
          </VStack>
          <VStack gap={10}>
            <Button size="m" variant="danger">
              Label
            </Button>
            <Button size="s" variant="danger">
              Label
            </Button>
            <Button size="xs" variant="danger">
              Label
            </Button>
            <Button disabled size="xs" variant="danger">
              Label
            </Button>
          </VStack>
          <VStack gap={10}>
            <Button size="m" variant="overlay">
              Label
            </Button>
            <Button size="s" variant="overlay">
              Label
            </Button>
            <Button size="xs" variant="overlay">
              Label
            </Button>
            <Button disabled size="xs" variant="overlay">
              Label
            </Button>
          </VStack>
          <VStack gap={10} width="100%">
            <Button fullWidth size="m" variant="overlay">
              Label
            </Button>
            <Button fullWidth size="s" variant="overlay">
              Label
            </Button>
            <Button fullWidth size="xs" variant="overlay">
              Label
            </Button>
            <Button disabled fullWidth size="xs" variant="overlay">
              Label
            </Button>
          </VStack>
          <VStack gap={10} width="100%">
            <Button
              fullWidth
              iconLeft={<PlusCircleIcon />}
              iconRight={<PlusCircleIcon />}
              size="m"
              variant="overlay"
            >
              Label
            </Button>
            <Button
              fullWidth
              iconLeft={<PlusCircleIcon />}
              iconRight={<PlusCircleIcon />}
              size="s"
              variant="overlay"
            >
              Label
            </Button>
            <Button
              fullWidth
              iconLeft={<PlusCircleIcon />}
              iconRight={<PlusCircleIcon />}
              size="xs"
              variant="overlay"
              onPress={() => console.log('123123')}
            >
              Label
            </Button>
            <Button
              disabled
              iconLeft={<PlusCircleIcon />}
              size="xs"
              variant="overlay"
              onPress={() => console.log('123123')}
            />

            <Button
              disabled
              fullWidth
              iconLeft={<PlusCircleIcon />}
              iconRight={<PlusCircleIcon />}
              loading
              size="xs"
              variant="overlay"
              onPress={() => console.log('123123')}
            >
              Label
            </Button>
          </VStack>
        </HStack>
      </SectionComponent>
    </VStack>
  );
};