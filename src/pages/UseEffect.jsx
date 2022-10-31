import './useEffect.css';
import { useState, useEffect } from 'react';
import Character from '../components/Character';
import reactLogo from '../assets/react-logo.svg';
import Loader from '../components/Loader';

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

        if (!res.ok) {
          throw new Error(`Something went wrong please check: ${res.url}`);
        }
        const data = await res.json();

        setIsLoading(false);
        setData(data);
        setError(null);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setError(error);
      }
      setIsLoading(false);
    };
    fetchCharacters();
  }, [page]);

  return (
    <div className="useEffect">
      <img className="useEffect-logo" src={reactLogo} alt="" />
      <h2>Rick and Morty with the UseEffect hook</h2>
      {isLoading && <Loader />}
      {isError && <h1 className="error">Error: {error.message}</h1>}
      <button
        className="btn"
        onClick={() => setPage((old) => old - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="pageNum">
        {page} of {data.info && data.info.pages}
      </span>
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
