import { ApiParams } from 'models';
// import { ApiParams, Pokemon } from 'models';
// import { ApiResponse } from 'models/models/pokemons.model';
import { useEffect, useState } from 'react';
import { List } from 'ui';
import { useSelector } from "react-redux";
import { fetchPokemons } from './services/pokemons.service';
import { RootState } from './shared/store/store';

// const api = "https://pokeapi.co/api/v2/pokemon"

const App = () => {

  // const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  // const [totalPokemons, setTotalPokemons] = useState<number>(0);

  const [params, setParams] = useState<ApiParams>({ limit: 100, offset: 0 });

  const { pokemons, totalPokemons } = useSelector((state: RootState) => state.pokemonsSlice)

  // useEffect(() => {
  //   const url = new URL(api);
  //   for (const [key, value] of Object.entries(params))
  //     url.searchParams.set(key, value.toString());
  //   fetch(url, {
  //     method: "GET",
  //   }).then(async (response) => {
  //     if (!response.ok) {
  //       throw new Error("Something wrong in the response");
  //     }
  //     return await response.json();
  //   }).then(({ results, count }: ApiResponse) => {

  //     setPokemons(results || []);
  //     setTotalPokemons(count || 0);
  //   }).catch(() => {
  //     setTotalPokemons(0);
  //     setPokemons([]);
  //   })
  // }, [params]);

  useEffect(() => {
    fetchPokemons(params);
  }, [params]);

  const paginate = (btn: "prev" | "next") => {
    switch (btn) {
      case "next":
        if (params.offset + params.limit < totalPokemons) {
          setParams({ ...params, offset: params.offset + params.limit });
        }
        break;

      case "prev":
        if (params.offset - params.limit >= 0) {
          setParams({ ...params, offset: params.offset - params.limit });
        }
        break
    }
  }
  return (
    <div className="poke-ball">
      <h2>Pokemon list {totalPokemons}:</h2>
      <List {...{ pokemons, params, totalPokemons }} />
      {totalPokemons ? <div className='mt-5'>
        <button onClick={() => paginate("prev")}>Prev</button>
        <button className='ml-1' onClick={() => paginate("next")}>Next</button>
      </div> : ""}
    </div>
  )
}

export default App;
