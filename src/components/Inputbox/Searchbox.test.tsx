import { describe, expect, it } from 'vitest';

import { render, screen} from '../../tests/utils/test-utils';

import Inputbox from './index'; 


describe('Inputbox', () => {
  it('should be possible view Inputbox with the "default" text', () => {
    render(<Inputbox text='default' event={() => []}/>);

    expect(screen.getByPlaceholderText('default')).toBeDefined();
  });

  it('should be not  possible view Inputbox icon when not pass prop', () => {
    render(<Inputbox text='default' event={() => []}/>);

    expect(screen.queryByTestId('inputbox-icon')).toBeNull();
  });

  it('should be possible view Inputbox icon when pass prop', () => {
    render(<Inputbox text='default' event={() => []} icon={<>fake icon</>}/>);

    expect(screen.queryByTestId('inputbox-icon')).toBeDefined();
  });

  it('should be possible view Inputbox icon with white color', () => {
    render(<Inputbox text='default' event={() => []} icon={<>fake icon</>} iconColor="#FFF"/>);

    expect(screen.queryByTestId('inputbox-icon')).toHaveStyle('color: #fff');
  });

  it('should be possible view Inputbox icon with transparent BG when no pass props', () => {
    render(<Inputbox 
      text='default' event={() => []}
      icon={<>fake icon</>}
      iconColor="#FFF"
    />);

    expect(screen.queryByTestId('inputbox-icon')).toHaveStyle('background-color: transparent');
  });

  it('should be possible view Inputbox icon with background color', () => {
    render(<Inputbox 
      text='default' event={() => []}
      icon={<>fake icon</>}
      iconColor="#FFF"
      iconBg
    />);

    expect(screen.queryByTestId('inputbox-icon')).toHaveStyle('background-color: #4DA6B3');
  });
});