import React, { useEffect, useState } from 'react';

import { SegmentItem, type SegmentItemProps } from './SegmentItem';

import { HStack } from '@/components/Layout';

export interface SegmentControlsProps
  extends Pick<SegmentItemProps, 'size' | 'currentIndex'> {
  options: SegmentItemProps[];
  onPress?: (item: SegmentItemProps) => void;
  indexActive?: number;
}

export const SegmentControls = ({
  size,
  options,
  onPress,
  indexActive = 0,
  ...props
}: SegmentControlsProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(indexActive);

  useEffect(() => {
    setCurrentIndex(indexActive);
  }, [indexActive]);

  const handlePress = (item: SegmentItemProps, index: number) => {
    setCurrentIndex(index);
    onPress?.(item);
  };
  return (
    <HStack gap={4} {...props}>
      {options?.map((item, idx) => (
        <SegmentItem
          {...item}
          currentIndex={currentIndex}
          index={idx}
          key={idx}
          size={size}
          onPress={() => handlePress(item, idx)}
        >
          {item.children}
        </SegmentItem>
      ))}
    </HStack>
  );
};
