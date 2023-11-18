import { type ReactElement, type ReactNode } from 'react';
import {
  type NavigationState,
  type Route,
  type SceneRendererProps,
} from 'react-native-tab-view';

export type RouteProps = Omit<Route, 'icon'> & {
  icon?: ReactNode | ReactElement | null;
} & Route;

export type TabsTypeVariants = 'hug' | 'full';

export type TabBarProps<T extends RouteProps> = SceneRendererProps & {
  navigationState: NavigationState<T>;
};
export type Scene<T extends RouteProps> = {
  route: T;
};
export type LabelProps = Scene<RouteProps> & {
  focused: boolean;
  color: string;
};
export type IconProps = Scene<RouteProps> & {
  focused: boolean;
  color: string;
};
