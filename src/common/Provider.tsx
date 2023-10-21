'use client'
import React, {  ReactNode } from "react";

//mui

// import { Provider } from "react-redux";

//hiro

import { AppContext } from "../stacks/context";



// Redux
import { useAuth } from "../stacks/use-auth";
import { Provider } from "react-redux";
import { store } from "../stores";

// TODO: Add Vercel and Google Analytics to track all the clicks, views, and interactions like a hawk 🦅👀
type ProviderProps = {
  children: ReactNode;
};
function ProviderClientWrapper({ children }: ProviderProps) {
  const {  state } =
    useAuth();
  return (
   
      <Provider  store={ store}>
          <AppContext.Provider value={state}>{children}</AppContext.Provider>
      </Provider>
   
  );
}

export default ProviderClientWrapper;
