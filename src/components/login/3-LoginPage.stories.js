import React from "react";

/* Import StateProvider to connect to store */
import { StateProvider } from "./../../store/store";

import Login from "./Login";

export default {
  title: "Login Page",
  component: Login,
};

const errorParams = {
  sessionData: {
    error: {
      message: "User with given email not found",
      type: "AuthFailure",
      code: 401,
      error_subcode: 4010,
    },
  },
};

export const LoginPage = () => (
  <StateProvider>
    <Login />
  </StateProvider>
);
export const LoginPageWithError = () => (
  <StateProvider params={errorParams}>
    <Login />
  </StateProvider>
);
