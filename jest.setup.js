import { jest } from '@jest/globals';

const mockUseForm = jest.fn();

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: mockUseForm,
}));