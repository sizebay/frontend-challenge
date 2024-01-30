import { jest } from '@jest/globals';

// Crie um mock manualmente para useForm
const mockUseForm = jest.fn();

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: mockUseForm,
}));