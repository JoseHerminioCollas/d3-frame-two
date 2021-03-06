import React from 'react';
import defaultState, { StateInterface } from './state';
import reducer, { DispatchInterface } from './reducer';
import useAction, { AppActionsInterface } from './action';

const StoreContext = React.createContext<any>(defaultState);

const StoreProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch]: [StateInterface, DispatchInterface] = React
    .useReducer(reducer, defaultState);
  const actions: AppActionsInterface = useAction(state, dispatch);

  return (
    <StoreContext.Provider value={{ state, actions }}>
      {children}
    </StoreContext.Provider>
  );
};
const StoreConsumer = StoreContext.Consumer;

export { StoreContext, StoreProvider, StoreConsumer };
