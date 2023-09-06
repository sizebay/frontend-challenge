import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../searchBar/index";



describe('searchBar', ()=> {

    test('should render search bar with correct placeholder and value', () => {
        const placeholder = 'Search';
        const value = 'Test';
    
        render(<SearchBar placeholder={placeholder} value={value} onChange={() => {}} width="200px" />);
    
        expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
        expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    });

    test('should update value when user inputs text', () => {
        const placeholder = 'Search';
        const onChange = jest.fn();
    
        render(<SearchBar placeholder={placeholder} value="" onChange={onChange} width="200px" />);
    
        const input = screen.getByPlaceholderText(placeholder);
        fireEvent.change(input, { target: { value: 'Test' } });
    
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ target: expect.objectContaining({ value: 'Test' }) }));
    });

    test('should clear input and update value when user clicks clear button', () => {
        const placeholder = 'Search';
        const onChange = jest.fn();
    
        render(<SearchBar placeholder={placeholder} value="Test" onChange={onChange} width="200px" />);
    
        const clearButton = screen.getByTestId('icon-container');
        fireEvent.click(clearButton);
    
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ target: expect.objectContaining({ value: '' }) }));
    });
})
