import './infiniteScroll.css';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from '../components/Loader';
import Character from '../components/Character';

const initialUrl = `https://rickandmortyapi.com/api/character/`;
const fetchCharacters = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Something went wrong`);
  }
  return await res.json();
};

const InfiniteChatacters = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetcheing,
  } = useInfiniteQuery(
    ['richAndMorty'],
    ({ pageParam = initialUrl }) => fetchCharacters(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.info.next || undefined,
    }
  );

  // console.log(data);

  if (isLoading) return <Loader />;

  if (isError) return <h1 className="error">Error: {error.message}</h1>;

  return (
    <>
      <div className="infinitescroll">
        <h2>Rick And Morty Characters with Infinite Scroll</h2>
        <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
          {isFetcheing && <Loader />}
          <div className="container">
            {data &&
              data.pages.map((pageData) => {
                return pageData.results.map((character) => {
                  return (
                    <div key={character.id} className="card">
                      <Character character={character} />
                    </div>
                  );
                });
              })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default InfiniteChatacters;
