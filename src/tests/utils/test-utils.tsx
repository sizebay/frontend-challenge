/* eslint-disable @typescript-eslint/no-explicit-any */
import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

const customRender = (ui: JSX.Element, options = {}) => {
  const Wrapper = ({ children }: any) => (
    <>{children}</>
  );

  render(ui, {
    wrapper: Wrapper,
    ...options,
  });
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };