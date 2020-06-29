import React from 'react';

/* Import StateProvider to connect to store */
import {StateProvider} from "./../../store/store";

import Login from "./Login";


export default {
  title: 'Login Page',
  component: Login,
};

export const LoginPage = () => <StateProvider><Login/></StateProvider>;

