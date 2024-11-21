import "./list.css";
import { toTitleCase } from "../../../apps/app/src/shared/utilities";
import { ApiParams, Pokemon } from "../../models";
import store from "../../../apps/app/src/shared/store/store";
import { capturePokemons, setTotalPokemons } from "../../../apps/app/src/shared/store/slices/pokemon.slice";

interface ListProps {
  pokemons: Pokemon[],
  params: ApiParams,
  totalPokemons: number
}
export const List = ({
  pokemons,
  params,
  totalPokemons
}: ListProps) => {


  const freePokemon = (index: number) => {
    store.dispatch(capturePokemons(pokemons.filter((_, i) => index != i)));
    store.dispatch(setTotalPokemons(totalPokemons > 0 ? totalPokemons - 1 : totalPokemons));
  }

  return (<>
    {/* <div className="pokemon-list-container">
      {pokemons.length ?
        <ol start={params.offset + 1}>
          {
            pokemons.map((pokemons, index) => {
              return <li key={"pokemon-" + (params.offset + index + 1)}>{toTitleCase(pokemons.name)}</li>
            })}
        </ol> : <p>No pokemons found!!</p>
      }
    </div> */}

    {/* Displaying the names as grid layout */}
    {pokemons && pokemons.length ?
      <div className="pokemon-list-container">
        {pokemons.map((pokemons, index) => {
          return <div key={"pokemon-" + (params.offset + index + 1)}>
            <p>{params.offset + index + 1}. {toTitleCase(pokemons.name)}</p>
            <button className="remove" onClick={() => freePokemon(index)}>Remove</button>
          </div>
        })}
      </div> : <p>No pokemons found!!</p>
    }
  </>);
}