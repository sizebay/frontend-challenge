export const getCategory = (category: string) => {
  if (category === 'male') {
    return { className: 'text-red-500', category: 'Masculino' };
  } else if (category === 'female') {
    return { className: 'text-yellow-500', category: 'Feminino' };
  } else if (category === 'kids') {
    return { className: 'text-blue-500', category: 'Infantil' };
  }
  return { className: 'text-default', category };
};
