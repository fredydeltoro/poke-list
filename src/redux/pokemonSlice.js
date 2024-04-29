import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=150"
    );

    const data = await response.json();
    return data.results;
  }
);

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (pokemon) => {
    const response = await fetch(pokemon);

    const data = await response.json();
    return data;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
    currentPokemon: {},
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        (state.loading = false), (state.pokemons = action.payload);
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        (state.loading = false), (state.pokemons = action.payload);
      })
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        (state.loading = false), (state.currentPokemon = action.payload);
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        (state.loading = false), (state.currentPokemon = action.payload);
      });
  },
});

export default pokemonSlice.reducer;
