import "./list.css";
import { toTitleCase } from "../../../apps/app/src/shared/utilities";
import { ApiParams, Pokemon } from "../../models";

interface ListProps {
  pokemons: Pokemon[],
  params: ApiParams
}
export const List = ({
  pokemons,
  params
}: ListProps) => {

  return (<>
    <div className="pokemon-list-container">
      {/* {pokemons.length ?
        <ol start={params.offset + 1}>
          {
            pokemons.map((pokemons, index) => {
              return <li key={"pokemon-" + (params.offset + index + 1)}>{toTitleCase(pokemons.name)}</li>
            })}
        </ol> : <p>No pokemons found!!</p>
      } */}

      {/* Displaying the names as grid layout */}
      {pokemons.length ?
        pokemons.map((pokemons, index) => {
          return <p key={"pokemon-" + (params.offset + index + 1)}>{toTitleCase(pokemons.name)}</p>
        }) : <p>No pokemons found!!</p>
      }
    </div>
  </>);
}