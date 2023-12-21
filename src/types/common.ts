import { type ViewProps } from 'react-native';

export interface CommonProps
  extends Pick<ViewProps, 'style' | 'children' | 'testID'> {}
