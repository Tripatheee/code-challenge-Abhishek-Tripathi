import { configureStore } from '@reduxjs/toolkit';
import pokemonsSlice from './slices/pokemon.slice';

const store = configureStore({
    reducer: {
        pokemonsSlice: pokemonsSlice
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;