const fetchCharacters = async (page) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/charactes/?page=${page}`
  );
  if (!res.ok) {
    throw new Error(`Something went wrong`);
  }
  return await res.json();
};

export default fetchCharacters;
