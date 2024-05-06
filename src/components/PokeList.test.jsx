import React from "react";
import "@testing-library/jest-dom";
import { waitFor, fireEvent, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import PokeList from "./PokeList";
import {
  fetchPokemons,
  fetchPokemon,
  nextPage,
  previousPage,
} from "../redux/pokemonSlice";
import { renderWithReduxAndRouter } from "../utils/test-utils";
import mockedPokemons from "../../__mocks__/mockedPokemons";

const mockStore = configureStore([]);

jest.mock("../redux/pokemonSlice", () => ({
  ...jest.requireActual("../redux/pokemonSlice"),
  fetchPokemons: jest.fn(),
  fetchPokemon: jest.fn(),
}));

describe("PokeList component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      pokemon: {
        ...mockedPokemons,
        currentPage: 0,
      },
    });

    store.dispatch = jest.fn();
  });

  test("renders PokeList component correctly", async () => {
    renderWithReduxAndRouter(<PokeList />, { store });

    await waitFor(() =>
      expect(store.dispatch).toHaveBeenCalledWith(fetchPokemons())
    );

    const pokeListElement = screen.getByTestId("poke-list");
    expect(pokeListElement).toBeInTheDocument();

    const detailsButton = screen.getByText("Next");
    expect(detailsButton).toBeInTheDocument();
  });

  test("dispatches nextPage action when Next button is clicked", async () => {
    renderWithReduxAndRouter(<PokeList />, { store });

    await waitFor(() =>
      expect(store.dispatch).toHaveBeenCalledWith(fetchPokemons())
    );

    fireEvent.click(screen.getByText("Next"));

    await waitFor(() =>
      expect(store.dispatch).toHaveBeenCalledWith(nextPage())
    );
  });

  test("dispatches previousPage action when Previous button is clicked", async () => {
    store = mockStore({
      pokemon: {
        ...mockedPokemons,
        currentPage: 1,
      },
    });

    store.dispatch = jest.fn();

    renderWithReduxAndRouter(<PokeList />, { store });

    await waitFor(() =>
      expect(store.dispatch).toHaveBeenCalledWith(fetchPokemons())
    );

    await waitFor(() => screen.getByText("Previous"));

    fireEvent.click(screen.getByText("Previous"));

    await waitFor(() =>
      expect(store.dispatch).toHaveBeenCalledWith(previousPage())
    );
  });

  test("dispatches fetchPokemon action when item is clicked", async () => {
    const { getByText } = renderWithReduxAndRouter(<PokeList />, { store });
    const url = `https://pokeapi.co/api/v2/pokemon/${mockedPokemons.pokemons[0].id}`;

    fireEvent.click(getByText(mockedPokemons.pokemons[0].name));
    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(fetchPokemon(url));
    });
  });
});
