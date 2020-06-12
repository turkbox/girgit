import React from "react";
import styled from "styled-components";
import ReactPasswordStrength from 'react-password-strength';

const InputContainer = styled.div`

    margin-top: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #c2c1c1;
    overflow: hidden;

    input {
        width: 100%;
        height: calc(2.5rem - 3px);
        font-size: 1rem;
        border: none;
    }
    
    .ReactPasswordStrength {
        border: none;
        height: 2.5rem;
    }

    .ReactPasswordStrength .ReactPasswordStrength-strength-desc {
        font-style: italic;
        height: 100%;
        position: absolute;
        top: 0px;
        right: 0;
        text-align: right;
        transition: color 250ms ease-in-out;
        display: flex;
        align-items: center;
        padding: 0 10px;
        width: auto;
        text-transform: capitalize;
    }


`


const PasswordStrengthInput = (props) => (
    <InputContainer>
         <ReactPasswordStrength
            {...props}
        />
    </InputContainer>
)


export default PasswordStrengthInput;