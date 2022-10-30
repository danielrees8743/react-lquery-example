const fetchCharacters = async (page) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  if (!res.ok) {
    throw new Error(`Something went wrong: ${res.url}`);
  }
  return await res.json();
};

export default fetchCharacters;
