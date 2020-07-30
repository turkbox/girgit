import React, { useContext, useState, useEffect } from "react";
import { store } from "./../../store/store";
import ReactPasswordStrength from 'react-password-strength';

import styled from "styled-components";
import logo from "./logo-spread.png";

const LoginArea = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #F3F3F3;
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
    h3{
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
    .ReactPasswordStrength.passwordValidator {
        border: 0px;
    }
    span.ReactPasswordStrength-strength-desc{
        padding: 14px 14px 0px 0px;
        width: 20%;
    }
`;


const PasswordGenerator = (props) => {
    const storeContext = useContext(store);
    const { state } = storeContext;

    console.log("Access state", state);

    const [accountId, setAccountId] = useState("");
    const [userDetails, setUserDetails] = useState({
        name: "",
        role: "",
        email: "",
        password: "",
    });
    const [redirectRequested, requestRedirect] = useState(false)
    const [newPassword, setNewPassword] = useState({
                                                score : 0,
                                                isValid : false,
                                                password : ""
                                            })

    const getUserDetails = () => {

        /*fetch(`${state.backendUrl}/api/v4/users/${accountId}`)
            .then((response) => {
                //Error handling for HTTP requests: (eg. when user is not found)
                if (!response.ok) {
                    throw Error(`${response.status} HTTP error: ${response.statusText}`);
                }
                return response.json()
            })
            .then((data) => {
                setUserDetails({
                    "name": data.name,
                    "role": data.role,
                    "email": data.email,
                    "password": data.password,
                })
            })
            .catch((error) => {
                console.log("Could not connect to API", error);

                // Redirect to Login page if API connection couldn't be made or there is another error 
                requestRedirect(true);
                // @todo: Use Snackbar component to show error when it is ready 
            })
            */
           console.log("Got user details");
    };

    const handlePasswordChange = (password) =>{
        if (password.isValid) {
            setNewPassword({
                "score": password.score,
                "isValid": password.isValid,
                "password": password.password
            });
        }
    } 
    
    const updatePasswordinAPI = () => {
        if (newPassword.isValid) {
            /*fetch(`${state.backendUrl}/api/v4/users/${accountId}`, {
                method: `PATCH`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user:{
                        email: userDetails.email,
                        password : newPassword.password
                    }
                })
            })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                if (response && response.user.nModified === 1) {
                    requestRedirect(true);
                }
            })
            */
           console.log("Password is Valid and updated");
        }
        else {
            // @todo: Use Snackbar component to show error when it is ready 
            console.log("Password entered is weak");
        }
    }

    // Fetches user details for the userID provided in the URL
    useEffect(() => {
        getUserDetails();
    });
    
    // @todo: Use updated styled-component password-generator component 
    if (redirectRequested === false) {
        return(
            <LoginArea>
                <LoginBox>
                    <div className="logo"></div>
                    <h1>Generate Password</h1>
                    <h3 >{userDetails.email}</h3>
                    <ReactPasswordStrength
                        className="passwordValidator"
                        minLength={0}
                        minScore={2}
                        scoreWords={['Weak', 'Fair', 'Good', 'Strong', 'Secure']}
                        inputProps={{ name: "password_input", autoComplete: "off", className: "form-control", placeholder: `Password` }}
                        changeCallback={handlePasswordChange}
                    />
                    <p className="button-holder">
                        <button className="normal" onClick={() => updatePasswordinAPI()}>Generate Password</button>
                    </p>
                </LoginBox>
            </LoginArea>
        )
    }
    else {
        return <>Redirect To /</>;  
    }
    
}

export default PasswordGenerator;