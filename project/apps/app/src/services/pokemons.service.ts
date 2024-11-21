import { ApiParams } from "models"
import { get } from "../shared/http/http-methods";
import { ApiResponse, Pokemon } from "models/models/pokemons.model";
import store from "../shared/store/store";
import { capturePokemons, setTotalPokemons } from "../shared/store/slices/pokemon.slice";

const api = "https://pokeapi.co/api/v2/pokemon"

export const fetchPokemons = async (params: ApiParams): Promise<Pokemon[]> => {    
    try {
        const { results, count }: ApiResponse = await get(api, {
            params: params
        });
        store.dispatch(capturePokemons(results || []));
        store.dispatch(setTotalPokemons(count || 0));
        return results;
    } catch (error) {
        return [];
    }
}