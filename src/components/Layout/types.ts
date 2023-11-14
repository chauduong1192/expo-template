import { type ViewProps } from 'react-native';
import {
  type BorderProps,
  type ColorProps,
  type FlexboxProps,
  type PositionProps,
  type SpaceProps,
  type LayoutProps as StyledLayoutProps,
} from 'styled-system';

export interface LayoutProps
  extends SpaceProps,
    StyledLayoutProps,
    FlexboxProps,
    PositionProps,
    BorderProps,
    ColorProps,
    ViewProps {
  gap?: number;
}
