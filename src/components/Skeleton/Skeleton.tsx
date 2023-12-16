import { Skeleton, type SkeletonProps } from '@rneui/themed';
import React from 'react';

export interface _SkeletonProps extends SkeletonProps {}

export const _Skeleton = (props: SkeletonProps) => {
  return <Skeleton {...props} />;
};
