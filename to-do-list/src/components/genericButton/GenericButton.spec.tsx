import { fireEvent, render, screen } from "@testing-library/react";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GenericButton from "../genericButton/index";


describe('filterButton', ()=> {

    test('should render button with default width, height, and margin', () => {
        const backgroundColor = 'blue';
        const icon = <FontAwesomeIcon icon={faCheck} />;
  
        render(<GenericButton backgroundColor={backgroundColor} icon={icon} />);
  
        const button = screen.getByRole('button');
        expect(button).toHaveStyle({ width: '', height: '', margin: '' });
    });

    test('should call onClick function when button is clicked', () => {
        const backgroundColor = 'blue';
        const icon = <FontAwesomeIcon icon={faCheck} />;
        const onClick = jest.fn();
  
        render(<GenericButton onClick={onClick} icon={icon} backgroundColor={backgroundColor} />);
        const button = screen.getByTestId('icon-container');
        fireEvent.click(button);
  
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test('should render button with provided width, height, and margin', () => {
        const backgroundColor = 'blue';
        const icon = <FontAwesomeIcon icon={faCheck} />;
        const width = '100px';
        const height = '50px';
        const margin = '10px';
    
        render(<GenericButton backgroundColor={backgroundColor} icon={icon} width={width} height={height} margin={margin} />);
    
        const button = screen.getByRole('button');
        expect(button).toHaveStyle({ width, height, margin });
    });
})