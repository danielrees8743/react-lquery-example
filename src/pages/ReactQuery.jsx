import './reactQuery.css';
import reactQueryLogo from '../assets/react-query-logo.svg';
import { useQuery } from '@tanstack/react-query';
import fetchCharacters from '../hooks/useFectchCharacters';
import Character from '../components/Character';
import { useState } from 'react';

const ReactQuery = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery(
    ['richAndMorty', page],
    () => fetchCharacters(page),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return (
      <div className="loader-3">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    );
  }
  if (isError) return <h1>Error: {error.message}</h1>;

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
      <span className="pageNum">{page}</span>
      <button
        className="btn"
        disabled={!data.info.next}
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
