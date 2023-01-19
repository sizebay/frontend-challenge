import { AiOutlineSearch } from 'react-icons/ai';
import { describe, expect, it } from 'vitest';

import { render, screen} from '../../tests/utils/test-utils';

import ActionButton from './index'; 


describe('ActionButton', () => {
  it('should be possible view ActionButton with param icon', () => {
    render(<ActionButton icon={<AiOutlineSearch />}/>);

    expect(screen.getByTestId(/action-button/i)).toBeDefined();
  });

  it('should be possible view ActionButton with param background', () => {
    render(<ActionButton 
      icon={<AiOutlineSearch />}
      bg="#4f4f4f"
    />);

    expect(screen.getByTestId(/action-button/i)).toHaveStyle('background-color: #4f4f4f');
  });

  it('should be possible view ActionButton with icon color', () => {
    render(<ActionButton 
      icon={<AiOutlineSearch />}
      color="#4f4f4f"
    />);

    expect(screen.getByTestId(/action-button/i)).toHaveStyle('color: #4f4f4f');
  });
});