import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const PAGE_SIZE = 20;

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
    currentPage: 0,
    paginatedPokemons: [],
  },
  reducers: {
    nextPage(state) {
      state.currentPage = Math.min(
        state.currentPage + 1,
        state.paginatedPokemons.length - 1
      );
      state.pokemons = state.paginatedPokemons[state.currentPage];
    },
    previousPage(state) {
      state.currentPage = Math.max(state.currentPage - 1, 0);
      state.pokemons = state.paginatedPokemons[state.currentPage];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        const pokemons = action.payload;
        state.paginatedPokemons = [];

        for (let i = 0; i < pokemons.length; i += PAGE_SIZE) {
          state.paginatedPokemons.push(pokemons.slice(i, i + PAGE_SIZE));
        }

        state.pokemons = state.paginatedPokemons[state.currentPage];
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

export const { nextPage, previousPage } = pokemonSlice.actions;

export default pokemonSlice.reducer;
