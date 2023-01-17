import { describe, expect, it } from 'vitest';

import { render, screen} from '../../tests/utils/test-utils';

import ProgressBar from './index';


describe('ProgressBar', () => {
  it('should be possible view an empty progress bar', () => {
    render(<ProgressBar/>);

    expect(screen.getByTestId('progress-bar')).toHaveStyle('width: 0%');
  });

  it('should be possible view an half completed progress bar', () => {
    render(<ProgressBar allTasks={100} completedTasks={50}/>);

    expect(screen.getByTestId('progress-bar')).toHaveStyle('width: 50%');
  });

  it('should be possible view an completed progress bar', () => {
    render(<ProgressBar allTasks={100} completedTasks={100}/>);

    expect(screen.getByTestId('progress-bar')).toHaveStyle('width: 100%');
  });
});