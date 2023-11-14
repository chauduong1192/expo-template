import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space } from 'styled-system';

import { type LayoutProps } from './types';

export const Box = styled.View<LayoutProps>`
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${border}
  ${color}
  ${({ gap }) => gap && `gap: ${gap}px;`}
`;
