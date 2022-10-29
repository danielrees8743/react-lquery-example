import './character.css';

export default function Character({ character }) {
  return (
    <>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
    </>
  );
}
