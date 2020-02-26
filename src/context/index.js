import React, { useContext, createContext } from 'react';
import { initRootState, rootReducer } from './reducer';
import contextProviderFactory from './contextProviderFactory';

export const RootContext = createContext(initRootState);
export const useRootContext = () => useContext(RootContext);

const RawRootProvider = contextProviderFactory(RootContext);

export const RootProvider = ({ children }) => (
  <RawRootProvider initialState={initRootState} reducer={rootReducer}>
    {children}
  </RawRootProvider>
);
