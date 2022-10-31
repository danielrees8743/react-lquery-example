import './character.css';

export default function Character({ character }) {
  return (
    <>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <div className="details-container">
        <div className="details">
          <p>
            Species: <span>{character.species}</span>
          </p>
          <p>
            Gender: <span>{character.gender}</span>
          </p>
          <p>
            Status:{' '}
            <span
              style={
                character.status === 'Alive'
                  ? { color: 'green' }
                  : { color: 'red' }
              }
            >
              {character.status}
            </span>
          </p>
        </div>
        <div className="details">
          <p>
            Origin: <span>{character.origin.name}</span>
          </p>
          <p>
            Location: <span className="loc">{character.location.name}</span>
          </p>
          <p>
            Episodes: <span> {character.episode.length}</span>
          </p>
        </div>
      </div>
    </>
  );
}
