import React from 'react';

import { renderApp } from '@/__tests__/mock/renderApp';
import { Avatar } from '@/components/Avatar';

describe('Avatar', () => {
  it('should render without crashing', () => {
    const { getByTestId } = renderApp(<Avatar testID="avatar-id" />);
    expect(getByTestId('avatar-id')).toBeDefined();
  });
});
