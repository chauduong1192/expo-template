import styled from 'styled-components/native';

import { Box } from './Box';
import { type LayoutProps } from './types';

export const HStack = styled(Box)<LayoutProps>`
  flex-direction: row;
`;
