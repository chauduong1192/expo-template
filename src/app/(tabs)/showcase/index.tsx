import React from 'react';

import { ScreenContainer } from '@/components/ScreenContainer';
import { Showcase } from '@/features/showcase';

export default function ShowcaseScreen() {
  return (
    <ScreenContainer withScroll>
      <Showcase />
    </ScreenContainer>
  );
}
