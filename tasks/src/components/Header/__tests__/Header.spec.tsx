import { render } from '@testing-library/react';
import moment from 'moment';

import Header from '..';

describe('<Header/>', () => {
  it('should match snapshot', () => {
    const container = render(<Header />);

    expect(container).toMatchSnapshot();
  });

  it('should be able to the current date', () => {
    const { getByText, getByRole } = render(<Header />);

    const currentDate = moment().format('DD MMM YYYY');
    const currentDay = moment().format('dddd');

    const date = getByRole('heading', { name: currentDate });
    const dayOfWeek = getByText(currentDay);

    expect(dayOfWeek).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
});
