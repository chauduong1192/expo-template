import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { Input } from '@/components/Form/Input';
import { type InputProps } from '@/components/Form/Input/types';
import { CloseIcon, SearchIcon } from '@/components/Icons';

interface InputSearchProps extends Omit<InputProps, 'onChangeText' | 'value'> {
  onSearchValue: (searchValue: string) => void;
}

type SearchStateType = 'search' | 'searching' | 'searched';

const fakeDelay = (ms: number) =>
  new Promise((res: any) => setTimeout(res, ms));

export const InputSearch = ({ onSearchValue, ...props }: InputSearchProps) => {
  const [searchStates, setSearchStates] = useState<SearchStateType>('search');
  const [searchValue, setSearchValue] = useState('');
  const [timeoutToClear, setTimeoutToClear] = useState<any>(0);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutToClear);
    };
  }, [timeoutToClear]);

  const debounce = (
    callback: (value: string) => Promise<void>,
    onChangeText: (value: string) => void,
    ms: number,
  ) => {
    return (value: string) => {
      onChangeText(value);
      clearTimeout(timeoutToClear);
      setTimeoutToClear(
        setTimeout(() => {
          callback(value);
        }, ms),
      );
    };
  };

  const onChangeText = (value: string) => {
    setSearchValue(value);
  };

  const searchCoin = async (value: string) => {
    if (value.trim() === '') {
      onSearchValue?.(value);
      setSearchStates('search');
      return;
    }
    setSearchStates('searching');
    setSearchValue(value);
    await fakeDelay(500);
    setSearchStates('searched');
    onSearchValue?.(value);
  };

  const debouncedSearch = debounce(searchCoin, onChangeText, 500);

  const renderIcon = useMemo(() => {
    if (searchValue) {
      switch (searchStates) {
        case 'searching':
          return <ActivityIndicator size={18} />;
        case 'searched':
          return <CloseIcon />;
        default:
          return <></>;
      }
    }
  }, [searchStates, searchValue]);

  return (
    <Input
      {...props}
      inputProps={{ testID: 'input-search' }}
      leftIcon={<SearchIcon />}
      rightAdornmentProps={{
        onPress: () => debouncedSearch(''),
      }}
      rightIcon={renderIcon}
      value={searchValue}
      onChangeText={debouncedSearch}
    />
  );
};
