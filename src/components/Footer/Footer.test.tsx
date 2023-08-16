import React from 'react';
import { render, screen } from '@testing-library/react';

import { Footer } from '.';

describe('Footer', () => {
  test('renders Sizebay logo', () => {
    render(<Footer />);
    const logoElement = screen.getByAltText('Sizebay logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/copyright © Samuel Ramos/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
