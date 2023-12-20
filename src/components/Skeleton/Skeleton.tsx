import { Skeleton as _Skeleton, type SkeletonProps } from '@rneui/themed';
import React from 'react';

export interface _SkeletonProps extends SkeletonProps {}

export const Skeleton = (props: SkeletonProps) => {
  return <_Skeleton {...props} />;
};
