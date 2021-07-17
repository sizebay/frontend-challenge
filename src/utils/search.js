export const submitSearch = (text, filter, setSearch, setHidden) => {
  if (text) {
    setHidden(true)
    setSearch(text)
  } else {
    setSearch('')
    if (filter != 'Done') setHidden(false)
  }
}

export const changeSearch = (text, filter, setSearch, setHidden) => {
  if (text.length > 1) {
    setHidden(true)
    setSearch(text)
  } else if (text.length >= 1) {
    setSearch('')
    if (filter != 'Done') setHidden(false)
  }
}
