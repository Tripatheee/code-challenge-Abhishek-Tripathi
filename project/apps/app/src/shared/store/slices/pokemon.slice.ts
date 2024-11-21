import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from 'models';

interface InitialState {
    pokemons: Pokemon[];
    totalPokemons: number;
}
const initialState: InitialState = {
    pokemons: [],
    totalPokemons: 0
}

const pokemonsSlice = createSlice({
    name: 'pokemonsSlice',
    initialState,
    reducers: {
        capturePokemons: (state, action: PayloadAction<Pokemon[]>) => {
            state.pokemons = action.payload || [];
        },
        setTotalPokemons: (state, action: PayloadAction<number>) => {
            state.totalPokemons = action.payload || 0;
        },
    },
});

export const { capturePokemons, setTotalPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;