import { render, screen, fireEvent } from "@testing-library/react";
import OnVoidModal from "../onVoidModal/index";


describe('onVoidModal', ()=> {

    test('should call the onClick function when the button is clicked', () => {
        const onClick = jest.fn();
    
        render(<OnVoidModal onClick={onClick} />);
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
    
        expect(onClick).toHaveBeenCalled();
    });
})