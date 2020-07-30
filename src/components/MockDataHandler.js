import React from "react";
import {loginDataMock} from "./../mocks/login";

const authenticate = (email, password) => {
    return Promise.resolve(loginDataMock); 
}
export {
    authenticate
}