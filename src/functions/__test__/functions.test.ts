import { getCategory } from '../getCategory';
import { getData } from '../getData';

describe('getCategory function', () => {
  test('returns correct category and className for "male"', () => {
    const result = getCategory('male');
    expect(result).toEqual({
      className: 'text-red-500',
      category: 'Masculino'
    });
  });

  test('returns correct category and className for "female"', () => {
    const result = getCategory('female');
    expect(result).toEqual({
      className: 'text-yellow-500',
      category: 'Feminino'
    });
  });

  test('returns correct category and className for "kids"', () => {
    const result = getCategory('kids');
    expect(result).toEqual({
      className: 'text-blue-500',
      category: 'Infantil'
    });
  });

  test('returns default category and className for other categories', () => {
    const result = getCategory('other');
    expect(result).toEqual({ className: 'text-default', category: 'other' });
  });
});

describe('getData function', () => {
  test('returns data from the API', async () => {
    const data = await getData();

    expect(data).toBeDefined();
    expect(data).not.toBeNull();

    expect(Array.isArray(data)).toBe(true);
  });
});
