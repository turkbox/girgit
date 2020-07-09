import React from "react";

/* Import StateProvider to connect to store */
import { StateProvider } from "./../../store/store";

import PasswordGenerator from "./PasswordGenerator";

export default {
  title: "Password Page",
  component: PasswordGenerator,
};

const errorParams = {
  sessionData: {
    error: {
      message: "Password not upto defined standards",
      type: "AuthFailure",
      code: 401,
      error_subcode: 4010,
    },
  },
};

export const PasswordPage = () => (
  <StateProvider>
    <PasswordGenerator />
  </StateProvider>
);
export const PasswordPageWithError = () => (
  <StateProvider params={errorParams}>
    <PasswordGenerator />
  </StateProvider>
);
