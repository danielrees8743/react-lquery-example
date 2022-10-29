import './reactQuery.css';
import reactQueryLogo from '../assets/react-query-logo.svg';
import { useQuery } from '@tanstack/react-query';
import fetchCharacters from '../hooks/useFectchCharacters';
import Character from '../components/Character';

const ReactQuery = () => {
  const { data, isLoading, isFetching, isError, error } = useQuery(
    ['richAndMorty'],
    () => fetchCharacters(),
    {}
  );

  if (isLoading || isFetching) {
    return (
      <div class="loader-3">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
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
        <h2>Rick And Morty Characters</h2>
      </div>
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
