import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

test("renders App landing page", () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <GoogleOAuthProvider>
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </Provider>
  );

  expect(getByText(/Airline Check-In System/i)).toBeInTheDocument();
});
