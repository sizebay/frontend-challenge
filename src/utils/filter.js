export const filterArray = (todos, filter, search) => {
  if (search) {
    return todos.filter(
      ({ text, state }) =>
        text.toLowerCase().includes(search.toLowerCase()) && state === filter
    )
  } else {
    return todos.filter(({ state }) => state === filter)
  }
}
