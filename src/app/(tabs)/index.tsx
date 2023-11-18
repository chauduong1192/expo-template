import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useToggle } from 'usehooks-ts';

import { Button } from '@/components/Button';
import { InputWithLabel, Switch } from '@/components/Form';
import { Checkbox } from '@/components/Form/Checkbox';
import { PlusCircleIcon } from '@/components/Icons';
import { HStack, VStack } from '@/components/Layout';
import { Tabs } from '@/components/Tabs';
import { Text } from '@/components/Text';

const tabs = [
  {
    title: 'entire',
    component: () => (
      <View>
        <Text>entire</Text>
      </View>
    ),
  },
  {
    title: 'account',
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

export default function TabOneScreen() {
  const [value, setValue] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [switchValue, toggle] = useToggle();

  const tabsList = useCallback(() => {
    return tabs.map((tab) => ({
      key: tab.title,
      title: tab.title,
    }));
  }, [])();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text fontWeight="700" size="xl">
          Home
        </Text>
        <VStack gap={10} mb={20} width="100%">
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
            tabs={tabsList}
            type="hug"
          />
          <Checkbox
            description="Description goes here"
            // disabled
            label="Label"
            type="radio"
            value={switchValue}
            onValueChange={toggle}
          />
          <Checkbox
            description="Description goes here"
            // disabled
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
          <Switch
            description="Description goes here"
            // disabled
            label="Label"
            value={switchValue}
            onValueChange={toggle}
          />
          <Switch value={switchValue} onValueChange={toggle} />
          <Switch disabled value={switchValue} onValueChange={toggle} />
          {/* <Input color /> */}
          <InputWithLabel
            description="Description goes here"
            error
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
            helperText="123123"
            label="Your name"
            leftIcon={<PlusCircleIcon />}
            placeholder="Input Your Name"
            value={value}
            onChangeText={(text: string) => setValue(text)}
          />
          <InputWithLabel
            description="Description goes here"
            error
            helperText="Describe the error and ways to fix it"
            label="Your name"
            type="code"
            value={code}
            onChangeText={setCode}
          />
          <InputWithLabel
            description="Description goes here"
            // error
            helperText="123123123"
            label="Your name"
            type="code"
            value={code}
            onChangeText={setCode}
          />
          <InputWithLabel
            description="Description goes here"
            // error
            disabled
            // helperText="123123123"
            label="Your name"
            type="code"
            value={code}
            onChangeText={setCode}
          />
        </VStack>
        {['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'].map((size, idx) => (
          <Text key={idx} size={size as any}>
            The quick brown fox jumps over the lazy dog.
          </Text>
        ))}
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
