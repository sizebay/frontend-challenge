import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import choresReducer from "../store";

const store = configureStore({
  reducer: {
    chores: choresReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}
