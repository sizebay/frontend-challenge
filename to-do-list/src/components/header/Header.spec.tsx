import { render, screen } from "@testing-library/react";
import { getCurrentDate } from "../../utils/GetCurrentDate/GetCurrentDate";
import Header from '../header/index'


describe('header', ()=> {

    test('should render header with current date and day of the week', () => {
        render(<Header />);
    
        const currentDate = getCurrentDate();
    
        expect(screen.getByText(currentDate.day)).toBeInTheDocument();
        expect(screen.getByText(currentDate.month)).toBeInTheDocument();
        expect(screen.getByText(currentDate.year)).toBeInTheDocument();
        expect(screen.getByText(currentDate.dayOfWeek)).toBeInTheDocument();
    });
})