import React, { createContext, useContext, useReducer } from 'react';


const IdentityContext = createContext();

const identityReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'CLEAR_USER':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const IdentityProvider = ({ children }) => {

  const [state, dispatch] = useReducer(identityReducer, { user: null });

  const setUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  const clearUser = () => {
    dispatch({ type: 'CLEAR_USER' });
  };
  return (
    <IdentityContext.Provider value={{ user: state.user, setUser, clearUser }}>
      {children}
    </IdentityContext.Provider>
  );
};

const useIdentity = () => {
  const context = useContext(IdentityContext);
  if (!context) {
    throw new Error('useIdentity must be used within an IdentityProvider');
  }
  return context;
};

export { IdentityProvider, useIdentity };
