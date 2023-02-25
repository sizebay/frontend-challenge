const lastId = Number(localStorage.getItem('lastId') || 0);

function* idGenerator() {
  let id = lastId + 1;
  while (true) {
    localStorage.setItem('lastId', JSON.stringify(id));
    yield id++;
  }
}

const generateId = idGenerator();

export { generateId };
