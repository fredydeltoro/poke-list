import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

const mockStore = configureStore([]);

export const renderWithReduxAndRouter = (
  ui,
  { initialState = {}, store = mockStore(initialState), ...renderOptions } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
