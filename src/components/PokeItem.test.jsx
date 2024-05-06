import React from "react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import PokeItem from "./PokeItem";
import { renderWithReduxAndRouter } from "../utils/test-utils";
import mockedPokemons from "../../__mocks__/mockedPokemons";

const mockStore = configureStore([]);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("../redux/pokemonSlice"),
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  fetchPokemon: jest.fn(),
}));

describe("PokeItem component", () => {
  let store;
  const pokemon = mockedPokemons.currentPokemon;

  beforeEach(() => {
    store = mockStore({
      pokemon: {
        ...mockedPokemons,
      },
    });
    store.dispatch = jest.fn(); // Mock dispatch function
  });

  test("renders PokeItem component correctly", () => {
    const { getByText } = renderWithReduxAndRouter(
      <PokeItem pokemon={pokemon} />,
      { store }
    );

    expect(getByText(pokemon.name)).toBeInTheDocument();
  });

  test("navigates to the correct route when item is double-clicked", () => {
    const navigateMock = jest.fn();
    require("react-router-dom").useNavigate.mockReturnValue(navigateMock);

    const { getByText } = renderWithReduxAndRouter(
      <PokeItem pokemon={pokemon} />,
      { store }
    );

    fireEvent.doubleClick(getByText(pokemon.name));
    expect(navigateMock).toHaveBeenCalledWith(`/${pokemon.name}`);
  });
});
