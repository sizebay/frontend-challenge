import { render, screen } from '@testing-library/react';
import ProgressBar from '../../../Components/ProgressBar';
import '@testing-library/jest-dom'

test('it should check if the Progress Bar is on screen', () => {
  render(<ProgressBar />)

  const progressBar = screen.getByTestId('progress-bar')

  expect(progressBar).toBeInTheDocument()
});