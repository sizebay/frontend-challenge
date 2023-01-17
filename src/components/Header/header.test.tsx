import { describe, expect, it } from 'vitest';
import { actualDate } from '../../shared/helpers/actualDate';

import { render, screen} from '../../tests/utils/test-utils';

import Header from './index';


describe('Header', () => {
  it('should be possible view "Hello, World!" on screen', () => {
    render(<Header />);
    const {day,month,weekday,year} = actualDate();

    expect(screen.getByText(day)).toBeInTheDocument();
    expect(screen.getByText(month)).toBeInTheDocument();
    expect(screen.getByText(weekday)).toBeInTheDocument();
    expect(screen.getByText(year)).toBeInTheDocument();
  });
});