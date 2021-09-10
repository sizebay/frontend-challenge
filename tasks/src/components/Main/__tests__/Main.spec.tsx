import { render } from '@testing-library/react';

import Main from '..';

describe('<Main/>', () => {
  it('should match snapshot', () => {
    const container = render(<Main />);

    expect(container).toMatchSnapshot();
  });
});
