import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Character } from "./Character";
import { LoadingApi } from "./LoadingApi";
import { NavPage } from "./NavPage";

export const CharacterList = () => {
  const { increment, counter, decrement } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/?page=${counter}`
  );

  const { results } = data || {};

  return (
    <>
      <div className="container">
        <header>
          <p>Page: {counter}</p>

          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              decrement();
            }}
          >
            Previous Page
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              increment();
            }}
          >
            Next Page
          </button>
        </header>

        {isLoading ? (
          <LoadingApi />
        ) : (
          <div className="row">
            {results?.map((info) => {
              return (
                <div key={info.id} className="col-md-4">
                  <Character info={info} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
