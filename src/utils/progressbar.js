export const getValue = (todos) => {
  return todos.filter(({ state }) => state === 'Done').length
}

export const getMaxValue = (todos) => {
  return todos.length === 0 ? 999 : todos.length
}
