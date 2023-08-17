import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from '.';

describe('Loading component', () => {
  test('renders the loading spinner', () => {
    const { getByLabelText } = render(<Loading />);
    const loadingSpinner = getByLabelText('Loading...');
    expect(loadingSpinner).toBeInTheDocument();
  });
});
