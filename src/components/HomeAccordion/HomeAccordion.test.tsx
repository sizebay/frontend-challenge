import React from 'react';
import { render } from '@testing-library/react';
import { HomeAccordion } from '.';
import { dataHome } from '@/mocks';

describe('HomeAccordion component', () => {
  test('renders accordion items correctly', () => {
    const { getAllByRole } = render(<HomeAccordion />);
    const accordionItems = getAllByRole('button');
    expect(accordionItems.length).toBe(dataHome.features.description.length);
  });

  test('renders correct start content for each accordion item', () => {
    const { getAllByTestId } = render(<HomeAccordion />);
    const startContentElements = getAllByTestId('start-content');
    expect(startContentElements.length).toBe(
      dataHome.features.description.length
    );
  });

  test('renders correct indicator for each accordion item', () => {
    const { getAllByTestId } = render(<HomeAccordion />);
    const indicatorElements = getAllByTestId('indicator');
    expect(indicatorElements.length).toBe(dataHome.features.description.length);
  });
});
