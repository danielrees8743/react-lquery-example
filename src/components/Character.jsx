import './character.css';

export default function Character({ character }) {
  console.log(character);
  return (
    <>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.species}</p>
      <p>{character.status}</p>
    </>
  );
}
