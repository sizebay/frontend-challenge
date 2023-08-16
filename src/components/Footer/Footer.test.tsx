import React from 'react';
import { render } from '@testing-library/react';

import { Footer } from '.';

describe('Footer component', () => {
  test('renders Sizebay logo', () => {
    const { getByAltText } = render(<Footer />);
    const logo = getByAltText('Sizebay logo');
    expect(logo).toBeInTheDocument();
  });

  test('renders front-end challenge text', () => {
    const { getByText } = render(<Footer />);
    const challengeText = getByText('Front-end challenge Sizebay');
    expect(challengeText).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText('copyright © Samuel Ramos');
    expect(copyrightText).toBeInTheDocument();
  });
});
