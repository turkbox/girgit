import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

const TaskContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f3f3f3;
  -webkit-box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 30px;
  color: #fff;
  h1 {
    font-size: 1.4rem;
    font-weight: 400;
    color: #3a3a3a;
    text-align: center;
    margin: 10px 0 25px 0;
  }
  h3 {
    font-size: 1.4rem;
    font-weight: 400;
    color: #3a3a3a;
    text-align: center;
    margin: 10px 0 25px 0;
  }
  button {
    outline: none;
    background: #fff;
    color: #000;
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
  }
  button:not(:last-of-type) {
    margin-right: 5px;
  }
  p.button-holder {
    text-align: center;
    margin: 30px 0;
  }
`;

const hindi = {
  default: [
    "` \u090D \u0945 \u094D\u0930 \u0930\u094D \u091C\u094D\u091E \u0924\u094D\u0930 \u0915\u094D\u0937 \u0936\u094D\u0930 \u096F \u0966 - \u0943 {bksp}",
    "{tab} \u094C \u0948 \u093E \u0940 \u0942 \u092C \u0939 \u0917 \u0926 \u091C \u0921 \u093C \u0949 \\",
    "{lock} \u094B \u0947 \u094D \u093F \u0941 \u092A \u0930 \u0915 \u0924 \u091A \u091F {enter}",
    "{shift} \u0902 \u092E \u0928 \u0935 \u0932 \u0938 , . \u092F {shift}",
    ".com @ {space}",
  ],
  shift: [
    "~ \u0967 \u0968 \u0969 \u096A \u096B \u096C \u096D \u096E \u096F \u0966 \u0903 \u090B {bksp}",
    "{tab} \u0914 \u0910 \u0906 \u0908 \u090A \u092D \u0919 \u0918 \u0927 \u091D \u0922 \u091E \u0911",
    "{lock} \u0913 \u090F \u0905 \u0907 \u0909 \u092B \u0931 \u0916 \u0925 \u091B \u0920 {enter}",
    '{shift} "" \u0901 \u0923 \u0928 \u0935 \u0933 \u0936 \u0937 \u0964 \u095F {shift}',
    ".com @ {space}",
  ],
};

const HindiKeyboard = (props) => {
  return (
    <TaskContainer>
      <p className="button-holder">
        <button className="normal">{hindi.default}</button>
        <button className="normal">{hindi.shift}</button>
      </p>
    </TaskContainer>
  );
};

export default HindiKeyboard;
