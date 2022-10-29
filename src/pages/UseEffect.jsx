import './useEffect.css';
import { useState, useEffect } from 'react';
import Character from '../components/Character';
import fetchCharacters from '../hooks/useFectchCharacters';

export default function UseEffect() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        const data = await res.json();
        setData(data);
      } catch (error) {
        setIsError(true);
        setError(error);
      }
      setIsLoading(false);
    };
    fetchCharacters();
  }, [page]);

  return (
    <div className="useEffect">
      <h2>Rick and Morty with the UseEffect hook</h2>
      {isLoading && (
        <div className="loader-3">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      )}
      {isError && <h1>Error: {error.message}</h1>}
      <button
        className="btn"
        onClick={() => setPage((old) => old - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="pageNum">{page}</span>
      <button
        className="btn"
        onClick={() => setPage((old) => old + 1)}
        disabled={!data.info?.next}
      >
        Next
      </button>

      <div className="container">
        {data.results &&
          data.results.map((character) => {
            return (
              <div key={character.id} className="card">
                <Character character={character} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

//   return (
//     <div>
//       <main className="useEffect"></main>
//     </div>
//   );
// }
