const fetchCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  return await res.json();
};

export default fetchCharacters;
