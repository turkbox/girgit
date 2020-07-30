import React, { createContext, useReducer } from "react";

const initialState = {
  sessionData: {
    payload: null,
    success: false,
    error: null,
    origin: `initial`,
  },
  modalDisplayComponent: null,
};

const store = createContext(initialState);
const { Provider } = store;


const StateProvider = ({ params, children }) => {


  console.log("Ideal modified state", {...initialState, params});

  const [state, dispatch] = useReducer((state, action) => {

    switch (action.type) {
      case "LOGIN_REQUEST_SUBMITTED":
        return {
          sessionData: action.payload,
        };

      case `REGISTER_SUCCESSFUL_LOGIN`:
        return {
          ...state,
          sessionData: {
            payload: action.payload,
            success: true,
            error: null,
            origin: `login`,
          },
        };

      case `REGISTER_FAILED_LOGIN`:
        return {
          ...state,
          sessionData: {
            payload: null,
            success: false,
            error: action.payload,
            origin: `login`,
          },
        };

      case `REGISTER_COOKIE_LOGIN`:
        return {
          ...state,
          sessionData: {
            payload: action.payload,
            success: true,
            error: null,
            origin: `cookie`,
          },
        };

      case `REGISTER_USER_LOGOUT`:
        return {
          ...state,
          sessionData: {
            payload: null,
            success: false,
            error: null,
            origin: `logout`,
          },
        };

      case `RENDER_ADMIN_CONSOLE_MODAL`:
        return {
          ...state,
          modalDisplayComponent: action.payload,
        };

      default:
        throw new Error();
    }
  }, {...initialState, ...params});

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
