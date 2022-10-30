import './character.css';

export default function Character({ character }) {
  return (
    <>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>
        Species: <span>{character.species}</span>
      </p>
      <p>
        Status: <span>{character.status}</span>
      </p>
    </>
  );
}
