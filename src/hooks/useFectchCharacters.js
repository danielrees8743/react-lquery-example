const fetchCharacters = async (page) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  return await res.json();
};

export default fetchCharacters;
