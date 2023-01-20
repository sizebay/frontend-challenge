import { afterEach, describe, expect, it, vitest } from 'vitest';

import { render, screen, userEvent} from '../../tests/utils/test-utils';

import Task from './index';


describe('Task', () => {
  beforeEach(() => {
    global.ResizeObserver = require('resize-observer-polyfill');
  });

  afterEach(() => {
    vitest.clearAllMocks();
  });

  it('should be possible view a task card with "Default" text', () => {
    render(<Task content='Default' event={() => []} id="1" completed/>);

    expect(screen.getByText(/Default/i)).toBeDefined();
  });

  it('not should be possible view a "edit task" popover', async () => {
    render(<Task content='Default' event={() => []} id="1" completed/>);

    expect(screen.queryByTestId('task-edit-popover')).toBeNull();
  });

  it('should be possible view a button to edit and delete task', async () => {
    render(<Task content='Default' event={() => []} id="1" completed/>);
    const taskCard = screen.getByText(/Default/i);
    
    await userEvent.click(taskCard);

    const [deleteBtn, editBtn] = screen.queryAllByTestId('action-button');

    expect(deleteBtn).not.toBeUndefined();
    expect(editBtn).not.toBeUndefined();
  });
});