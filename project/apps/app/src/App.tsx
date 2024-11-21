import { ApiParams, Pokemon } from 'models';
import { ApiResponse } from 'models/models/pokemons.model';
import { useEffect, useState } from 'react';
import { List } from 'ui';

const api = "https://pokeapi.co/api/v2/pokemon"

const App = () => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [params, setParams] = useState<ApiParams>({ limit: 100, offset: 0 });
  const [totalPokemons, setTotalPokemons] = useState<number>(0);

  useEffect(() => {
    const url = new URL(api);
    for (const [key, value] of Object.entries(params))
      url.searchParams.set(key, value.toString());
    fetch(url, {
      method: "GET",
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error("Something wrong in the response");
      }
      return await response.json();
    }).then(({ results, count }: ApiResponse) => {

      setPokemons(results || []);
      setTotalPokemons(count || 0);
    }).catch(() => {
      setTotalPokemons(0);
      setPokemons([]);
    })
  }, [params]);

  const paginate = (btn: "prev" | "next") => {
    switch (btn) {
      case "next":
        if (params.offset + params.limit < totalPokemons) {
          setParams({ ...params, offset: params.offset + params.limit });
        }
        break;

      case "prev":
        if (params.offset - params.limit > 0) {
          setParams({ ...params, offset: params.offset - params.limit });
        }
        break
    }
  }
  return (
    <>
      <h1>Pokemon list {totalPokemons}:</h1>
      <List {...{ pokemons, params }} />
      {pokemons.length && <>
        <button onClick={() => paginate("prev")}>Prev</button>
        <button onClick={() => paginate("next")}>Next</button>
      </>}
    </>
  )
}

export default App;
