import { render, screen, fireEvent } from "@testing-library/react";
import FilterButton from "../filterButton/index";

describe('filterButton', ()=> {

    test('should render button with placeholder text', () => {
        const placeholder = 'Test Placeholder';
    
        render(<FilterButton placeholder={placeholder} />);
    
        expect(screen.getByText(placeholder)).toBeInTheDocument();
    });

    test('should toggle background color, border color, and text color when clicked', () => {
        const placeholder = 'Test Placeholder';
      
        render(<FilterButton placeholder={placeholder} />);
        const button = screen.getByRole('button');
      
        expect(button).toHaveStyle('background-color: transparent');
        expect(button).toHaveStyle('border: 1.5px solid #DBDBDB');
        expect(button).toHaveStyle('color: #848484');
      
        fireEvent.click(button);
      
        expect(button).toHaveStyle('background-color: #F7F7F8');
        expect(button).toHaveStyle('border: 1.5px solid #4DA6B3');
        expect(button).toHaveStyle('color: #4DA6B3');
    });

    test('should call onClick function when button is clicked', () => {
        const placeholder = 'Test Placeholder';
        const onClick = jest.fn();
    
        render(<FilterButton placeholder={placeholder} onClick={onClick} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
    
        expect(onClick).toHaveBeenCalledTimes(1);
    });
})