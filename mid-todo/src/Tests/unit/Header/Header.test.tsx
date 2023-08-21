import { render, screen } from '@testing-library/react';
import Header from '../../../Components/Header';
import '@testing-library/jest-dom'

test('render date on screen', () => {
  render(<Header />)
	const todaysDate = new Date()
  const day = todaysDate.getDate();
	const month = todaysDate.toLocaleDateString('en-US', {month: 'short'});
	const year = todaysDate.getFullYear();
	const dayOfWeek = todaysDate.toLocaleDateString('en-US', {weekday: 'long'});
	
  const dayScreen = screen.getByText(day)
  const monthScreen = screen.getByText(month)
  const yearScreen = screen.getByText(year)
  const dayWeekScreen = screen.getByText(dayOfWeek)

  expect(dayScreen).toBeInTheDocument();
  expect(monthScreen).toBeInTheDocument();
  expect(yearScreen).toBeInTheDocument();
  expect(dayWeekScreen).toBeInTheDocument();


})
