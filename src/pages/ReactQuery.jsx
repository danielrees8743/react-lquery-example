import './reactQuery.css';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import fetchCharacters from '../hooks/useFectchCharacters';
import Character from '../components/Character';
import Loader from '../components/Loader';
import reactQueryLogo from '../assets/react-query-logo.svg';

const ReactQuery = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isPreviousData, isError, error } = useQuery(
    ['richAndMorty', page],
    () => fetchCharacters(page),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) return <Loader />;

  if (isError) return <h1 className="error">Error: {error.message}</h1>;

  return (
    <>
      <div className="reactQuery">
        <img
          className="react-query-img"
          src={reactQueryLogo}
          alt="react-query-logo"
        />
        <h2>Rick And Morty Characters with React Query</h2>
      </div>
      <button
        className="btn"
        onClick={() => setPage((old) => old - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="pageNum">
        {page} of {data.info.pages}
      </span>
      <button
        className="btn"
        disabled={isPreviousData || !data.info.next}
        onClick={() => setPage((old) => old + 1)}
      >
        Next
      </button>
      <div className="container">
        {data &&
          data.results.map((character) => {
            return (
              <div key={character.id} className="card">
                <Character character={character} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ReactQuery;
