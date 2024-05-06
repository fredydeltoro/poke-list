import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import { useParams } from "react-router-dom";
import PokeDetail from "./PokeDetail";
import { renderWithReduxAndRouter } from "../utils/test-utils";
import mockedPokemons from "../../__mocks__/mockedPokemons";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  ...jest.requireActual("../redux/pokemonSlice"),
  useParams: jest.fn(),
}));

const mockStore = configureStore([]);

describe("PokeDetail component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      pokemon: {
        currentPokemon: {
          ...mockedPokemons.currentPokemon,
        },
      },
    });

    store.dispatch = jest.fn();
    useParams.mockReturnValue({ id: "25" });
  });

  test("renders PokeDetail component correctly", async () => {
    renderWithReduxAndRouter(<PokeDetail />, { store });

    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("Number: 25")).toBeInTheDocument();
    expect(screen.getByText("Name: pikachu")).toBeInTheDocument();
    expect(screen.getByText("Height: 4")).toBeInTheDocument();
    expect(screen.getByText("Weight: 60")).toBeInTheDocument();
    expect(screen.getByText("Abilities")).toBeInTheDocument();
    expect(screen.getByText("static")).toBeInTheDocument();
    expect(screen.getByText("lightning-rod")).toBeInTheDocument();
    expect(screen.getByText("Stats")).toBeInTheDocument();
    expect(screen.getByText("hp")).toBeInTheDocument();
    expect(screen.getByText("attack")).toBeInTheDocument();
    expect(screen.getByText("defense")).toBeInTheDocument();
    expect(screen.getByText("special-attack")).toBeInTheDocument();
    expect(screen.getByText("special-defense")).toBeInTheDocument();
    expect(screen.getByText("speed")).toBeInTheDocument();
  });
});
