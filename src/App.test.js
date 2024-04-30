import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const mockStore = configureStore([]);

test("renders PokeList component", async () => {
  const initialState = {
    pokemon: {
      currentPokemon: {},
      paginatedPokemons: [],
      pokemons: [],
    },
  };

  const store = mockStore(initialState);

  // Intercept the dispatched action and return a resolved promise with the desired payload
  jest.spyOn(store, "dispatch").mockResolvedValueOnce({
    payload: [
      /* Mocked data */
    ],
  });

  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  const pokeListElement = container.querySelector(".poke-list");
  expect(pokeListElement).toBeInTheDocument();
  const avatarElement = container.querySelector(".avatar");
  expect(avatarElement).toBeInTheDocument();
});
