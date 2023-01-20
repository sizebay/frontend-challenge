import { describe, expect, it } from 'vitest';

import { render, screen} from '../../tests/utils/test-utils';

import Checkbox from './index';


describe('Checkbox', () => {
  it('should be possible view checkbox with the "default" text', () => {
    render(<Checkbox checkboxRef={{current: {checked: false}}} text='default'/>);

    expect(screen.getByText('default')).toBeDefined();
  });

  it('should be possible view checkbox with small size by default', () => {
    render(<Checkbox checkboxRef={{current: {checked: false}}} text='default'/>);

    expect(screen.getByText('default')).toHaveStyle('width: 75px');
  });

  it('should be possible view checkbox with small size setted by props', () => {
    render(<Checkbox checkboxRef={{current: {checked: false}}} text='default' width='small'/>);

    expect(screen.getByText('default')).toHaveStyle('width: 75px');
  });

  it('should be possible view checkbox with large size', () => {
    render(<Checkbox checkboxRef={{current: {checked: false}}} text='default' width='large'/>);

    expect(screen.getByText('default')).toHaveStyle('width: 100px');
  });
});