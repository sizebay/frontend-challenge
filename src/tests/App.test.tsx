import { describe, expect, it } from 'vitest';

import { render, screen} from './utils/test-utils';

import App from '../App';


describe('Sample test', () => {
  it('should be possible view "Hello, World!" on screen', () => {
    render(<App />);

    expect(screen.getAllByText(/Hello, World!/i)[0]).toBeInTheDocument();
  });
});