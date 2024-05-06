import React from "react";
import "@testing-library/jest-dom";
import { screen, waitFor } from "@testing-library/react";
import configureStore from "redux-mock-store";
import App from "./App";
import { fetchPokemons } from "./redux/pokemonSlice";
import { renderWithReduxAndRouter } from "./utils/test-utils";
import mockedPokemons from "../__mocks__/mockedPokemons";

const mockStore = configureStore([]);

jest.mock("./redux/pokemonSlice", () => ({
  ...jest.requireActual("./redux/pokemonSlice"),
  fetchPokemons: jest.fn(),
}));

test("renders PokeList component", async () => {
  const initialState = {
    pokemon: {
      ...mockedPokemons,
      currentPage: 0,
    },
  };

  const store = mockStore(initialState);

  store.dispatch = jest.fn().mockResolvedValueOnce({
    payload: mockedPokemons.pokemons,
  });

  renderWithReduxAndRouter(<App />, { store });

  await waitFor(() =>
    expect(store.dispatch).toHaveBeenCalledWith(fetchPokemons())
  );

  const pokeListElement = screen.getByTestId("poke-list");
  expect(pokeListElement).toBeInTheDocument();

  const pokeAvatar = screen.getByTestId("poke-avatar");
  expect(pokeAvatar).toBeInTheDocument();
  expect(pokeAvatar).toHaveAttribute(
    "src",
    expect.stringMatching(
      /^https:\/\/raw.githubusercontent.com\/PokeAPI\/sprites\/master\/sprites\/pokemon/
    )
  );

  expect(screen.getByText("Next")).toBeInTheDocument();
});
