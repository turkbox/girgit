import React, { useContext, useState } from "react";
import { store } from "./../../store/store";
import styled from "styled-components";

import logo from "./logo-spread.png";

const LoginArea = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled.div`
    width: 400px;
    height: 400px;
    background-color: #fff;
    -webkit-box-shadow: 0 0.25rem 0.125rem 0 rgba(0,0,0,0.1);
    box-shadow: 0 0.25rem 0.125rem 0 rgba(0,0,0,0.1);
    border-radius: 5px;
    padding: 30px;
    color: #fff;

    .logo {
        width: 100%;
        height: 65px;
        background-image: url('${logo}');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    h1 {
        font-size: 1.4rem;
        font-weight: 400;
        color: #3a3a3a;
        text-align: center;
        margin: 10px 0 25px 0;
    }

    .status-display-bar {
        width: 100%;
        background-color: #ffdce0;
        border: 1px solid rgba(27,31,35,.15);
        border-radius: 3px;
        color: #86181d;
        text-align: center;
        padding: 5px;
        margin: 10px 0;
        opacity: 1;
    }

    input[type="text"], input[type="password"] {
        width: 100%;
        padding: 10px 15px; 
        outline: none;
        background: #fff;
        color: #3a3a3a;
        border-radius: 5px;
        font-size: 1rem;
        outline: none;
        border: 1px solid #d6d6d6;
        margin-bottom: 15px;
    }
    
    button {
        outline: none;
        background: #3b3b3b;
        color: #fff;
        border: 0;
        border-radius: 5px;
        font-weight: 700;
        line-height: 32px;
        padding: 0 16px;
        text-transform: uppercase;
        transition: 0.5s all ease-in-out;
    }

    button:hover {
        cursor: pointer;
            background: #000;
    }

    button:not(:last-of-type) {
        margin-right: 5px;
    }

    p.button-holder {
        text-align: center;
        margin: 30px 0;
    }
`;

const Login = () => {
  const storeContext = useContext(store);
  const { state } = storeContext;

  console.log("Access state", state);

  const [loginFormEmail, setLoginEmail] = useState("");
  const [loginFormPassword, setLoginPassword] = useState("");

  const createLoginToken = (e) => {
    e.preventDefault();
    console.log("@todo: Create login token");

    /*fetch(`${state.backendUrl}/authenticate`, {
            method: `POST`,
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: loginFormEmail,
                password: loginFormPassword
            })
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(payload) {

                if (!payload.error) {
                    dispatch({
                        type: `REGISTER_SUCCESSFUL_LOGIN`,
                        payload: payload
                    });
                }

                else {
                    dispatch({
                        type: `REGISTER_FAILED_LOGIN`,
                        payload: payload.error
                    });
                }

                //console.log("Login.js: State after dispatch", state);

            });
            */
  };

  const updateLoginFields = (e, i) => {
    e.preventDefault();
    if (i === 0) loginFormEmail = e.target.value;
    else if (i === 1) loginFormPassword = e.target.value;
  };

  if (!state.sessionData.success) {
    return (
      <LoginArea>
        <LoginBox>
          <div className="logo"></div>
          <h1>Dashboard</h1>
          <div
            className="status-display-bar"
            style={{
              opacity: state.sessionData.error ? 1 : 0,
            }}
          >
            {state.sessionData.error !== null
              ? state.sessionData.error.message
              : ``}
          </div>
          <input
            type="text"
            placeholder={`Email Address`}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder={`Password`}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <p className="button-holder">
            <button className="normal" onClick={(e) => createLoginToken(e)}>
              Sign In
            </button>
          </p>
        </LoginBox>
      </LoginArea>
    );
  } else {
    return <>Redirect To /</>;
  }
};

export default Login;
