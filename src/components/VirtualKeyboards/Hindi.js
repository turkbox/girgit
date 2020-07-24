import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import "./Hindi.css";

const TaskContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f3f3f3;
  -webkit-box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 30px;
  color: #fff;
  
  row{
    display:flex,
    margin-bottom:5px,
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
  
`;

class HindiKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      input_text: "",
    };
  }

  switchLayout = (next) => {
    this.setState({
      current: next,
    });
  };

  onButtonClick = (letter) => {
    this.setState((prevState) => ({
      input_text: prevState.input_text + letter,
    }));
  };

  backspace = () => {
    this.setState((prevState) => ({
      input_text: prevState.input_text.slice(0, -1),
    }));
  };

  getLayout = () => {
    if (this.state.current === 1) {
      return (
        <TaskContainer>
          <div className="row-blue">
            <div
              className="button"
              onClick={() => this.onButtonClick("\u0905")}
            >
              {"\u0905"}
            </div>
            <div
              className="button"
              onClick={() => this.onButtonClick("\u0906")}
            >
              {"\u0906"}
            </div>
            <div className="button">{"\u0907"}</div>
            <div className="button">{"\u0908"}</div>
            <div className="button">{"\u0909"}</div>
            <div className="button">{"\u090A"}</div>
            <div className="button">{"\u090F"}</div>
            <div className="button">{"\u090E"}</div>
            <div className="button">{"\u0913"}</div>
            <div className="button">{"\u0914"}</div>
          </div>

          <div className="row">
            <div className="button">{"\u0915"}</div>
            <div className="button">{"\u0916"}</div>
            <div className="button">{"\u0917"}</div>
            <div className="button">{"\u0918"}</div>
            <div className="button">{"\u091A"}</div>
            <div className="button">{"\u091B"}</div>
            <div className="button">{"\u091C"}</div>
            <div className="button">{"\u091D"}</div>
            <div className="button">{"\u093C"}</div>
            <div className="button">{"\u0902"}</div>
          </div>

          <div className="row">
            <div className="button">{"\u091F"}</div>
            <div className="button">{"\u0920"}</div>
            <div className="button">{"\u0921"}</div>
            <div className="button">{"\u0922"}</div>
            <div className="button">{"\u0923"}</div>
            <div className="button">{"\u0924"}</div>
            <div className="button">{"\u0925"}</div>
            <div className="button">{"\u0926"}</div>
            <div className="button">{"\u0927"}</div>
            <div className="button">{"\u0928"}</div>
          </div>

          <div className="row">
            <div className="button">{"\u092A"}</div>
            <div className="button">{"\u092B"}</div>
            <div className="button">{"\u092C"}</div>
            <div className="button">{"\u092D"}</div>
            <div className="button">{"\u092E"}</div>
            <div className="button">{"\u092F"}</div>
            <div className="button">{"\u0930"}</div>
            <div className="button">{"\u0932"}</div>
            <div className="button">{"\u0935"}</div>
            <div className="button">{"\u0936"}</div>
          </div>

          <div className="row">
            <div className="button" onClick={() => this.switchLayout(2)}>
              {"1/4"}
            </div>
            <div className="button">{"\u0937"}</div>
            <div className="button">{"\u0938"}</div>
            <div className="button">{"\u0939"}</div>
            <div className="button">{"\u091C\u094D\u091E"}</div>
            <div className="button">{"\u0915\u094D\u0937"}</div>
            <div className="button">{"\u0936\u094D\u0930"}</div>
            <div className="button">{"\u090B"}</div>
            <div className="button">{"\u094D"}</div>
            <div className="button" onClick={() => this.backspace()}>
              <i class="fas fa-backspace"></i>
            </div>
          </div>

          <div className="row-last">
            <div className="end-button">{"? \u0967 \u0968 \u0969"}</div>
            <div className="end-button">
              <i class="far fa-smile"></i>
              <br /> ,
            </div>
            <div className="end-button">
              <i class="fas fa-globe fa-2x"></i>
            </div>
            <div className="spacebar">
              {"\u0939\u093F\u0928\u094D\u0926\u0940"}
            </div>
            <div className="end-button">{"double sided arrow"}</div>
            <div className="end-button">{"\u0964"}</div>
            <div className="button-search">
              <i class="fas fa-search fa-2x"></i>
            </div>
          </div>
        </TaskContainer>
      );
    }

    if (this.state.current === 2) {
      return (
        <TaskContainer>
          <div className="row">
            <div className="button">{"\u091C\u094D\u091E"}</div>
            <div className="button">{"\u0924\u094D\u0930"}</div>
            <div className="button">{"\u0938\u094D\u091F"}</div>
            <div className="button">{"\u0938\u094D\u0924"}</div>
            <div className="button">{"\u0919"}</div>
            <div className="button">{"\u091E"}</div>
            <div className="button">{"\u0936\u094D\u0930"}</div>
            <div className="button">{"\u0915\u094D\u0930"}</div>
            <div className="button">{"\u0917\u094D\u0930"}</div>
            <div className="button">{"\u0926\u094D\u0930"}</div>
          </div>

          <div className="row">
            <div className="button">{"\u0927\u094D\u0930"}</div>
            <div className="button">{"\u092A\u094D\u0930"}</div>
            <div className="button">{"\u092C\u094D\u0930"}</div>
            <div className="button">{"\u092D\u094D\u0930"}</div>
            <div className="button">{"\u092E\u094D\u0930"}</div>
            <div className="button">{"\u092B\u094D\u0930"}</div>
            <div className="button">{"\u0935\u094D\u0930"}</div>
            <div className="button">{"\u0915\u094D\u0924"}</div>
            <div className="button">{"\u0924\u094D\u0924"}</div>
            <div className="button">{"\u0939\u094D\u092E"}</div>
          </div>

          <div className="row">
            <div className="button">{"\u0930\u094D\u0930"}</div>
            <div className="button">{"\u0938\u094D\u0930"}</div>
            <div className="button">{"\u0939\u094D\u0930"}</div>
            <div className="button">{"\u0930\u094D\u0915"}</div>
            <div className="button">{"\u0930\u094D\u0917"}</div>
            <div className="button">{"\u0930\u094D\u091A"}</div>
            <div className="button">{"\u0930\u094D\u091C"}</div>
            <div className="button">{"\u0930\u094D\u0924"}</div>
            <div className="button">{"\u0930\u094D\u0925"}</div>
            <div className="button">{"\u0930\u094D\u0926"}</div>
          </div>

          <div className="row">
            <div className="button">{"\u0930\u094D\u0928"}</div>
            <div className="button">{"\u0930\u094D\u092E"}</div>
            <div className="button">{"\u0930\u094D\u0936"}</div>
            <div className="button">{"\u0930\u094D\u0937"}</div>
            <div className="button">{"\u0930\u094D\u0938"}</div>
            <div className="button">{"\u0930\u094D\u092A"}</div>
            <div className="button">{"\u0924\u094D\u0925"}</div>
            <div className="button">{"\u0924\u094D\u0928"}</div>
            <div className="button">{"\u0924\u094D\u092E"}</div>
            <div className="button">{"\u0924\u094D\u092F"}</div>
          </div>

          <div className="row">
            <div className="button" onClick={() => this.switchLayout(3)}>
              {"2/4"}
            </div>
            <div className="button">{"\u0924\u094D\u0935"}</div>
            <div className="button">{"\u0926\u094D\u0926"}</div>
            <div className="button">{"\u0927\u094D\u0926"}</div>
            <div className="button">{"\u092C\u094D\u0926"}</div>
            <div className="button">{"\u092D\u094D\u0926"}</div>
            <div className="button">{"\u092E\u094D\u0926"}</div>
            <div className="button">{"\u0935\u094D\u0926"}</div>
            <div className="button">{"\u0926\u0943"}</div>
            <div className="button">
              <i class="fas fa-backspace"></i>
            </div>
          </div>

          <div className="row-last">
            <div className="end-button">{"? \u0967 \u0968 \u0969"}</div>
            <div className="end-button">
              <i class="far fa-smile"></i>
              <br /> ,
            </div>
            <div className="end-button">
              <i class="fas fa-globe fa-2x"></i>
            </div>
            <div className="spacebar">
              {"\u0939\u093F\u0928\u094D\u0926\u0940"}
            </div>
            <div className="end-button">{"double sided arrow"}</div>
            <div className="end-button">{"\u0964"}</div>
            <div className="button-search">
              <i class="fas fa-search fa-2x"></i>
            </div>
          </div>
        </TaskContainer>
      );
    }

    if (this.state.current === 3) {
      return (
        <TaskContainer>
          <div className="row">
            <div className="button">{"\u0930\u094D\u091F"}</div>
            <div className="button">{"\u0930\u094D\u0916"}</div>
            <div className="button">{"\u0930\u094D\u092F"}</div>
            <div className="button">{"\u0916\u094D\u092F"}</div>
            <div className="button">{"\u091C\u094D\u092F"}</div>
            <div className="button">{"\u0924\u094D\u092F"}</div>
            <div className="button">{"\u0927\u094D\u092F"}</div>
            <div className="button">{"\u092A\u094D\u092F"}</div>
            <div className="button">{"\u092D\u094D\u092F"}</div>
            <div className="button">{"\u0932\u094D\u092F"}</div>
          </div>

          <div className="row">
            <div className="button">{"\u0935\u094D\u092F"}</div>
            <div className="button">{"\u0937\u094D\u092F"}</div>
            <div className="button">{"\u0938\u094D\u092F"}</div>
            <div className="button">{"\u0928\u094D\u091F"}</div>
            <div className="button">{"\u0928\u094D\u0924"}</div>
            <div className="button">{"\u0928\u094D\u0925"}</div>
            <div className="button">{"\u0928\u094D\u0926"}</div>
            <div className="button">{"\u0928\u094D\u0928"}</div>
            <div className="button">{"\u0928\u094D\u092F"}</div>
            <div className="button">{"\u0928\u094D\u0939"}</div>
          </div>

          <div className="row">
            <div className="button">{"\u092E\u094D\u091A"}</div>
            <div className="button">{"\u092E\u094D\u091F"}</div>
            <div className="button">{"\u092E\u094D\u0924"}</div>
            <div className="button">{"\u092E\u094D\u092A"}</div>
            <div className="button">{"\u092E\u094D\u092C"}</div>
            <div className="button">{"\u092E\u094D\u092E"}</div>
            <div className="button">{"\u092E\u094D\u092F"}</div>
            <div className="button">{"\u092E\u094D\u0939"}</div>
            <div className="button">{"\u0923\u094D\u0921"}</div>
            <div className="button">{"\u092A\u094D\u0924"}</div>
          </div>

          <div className="row">
            <div className="button">{"\u092A\u094D\u092A"}</div>
            <div className="button">{"\u092A\u094D\u0932"}</div>
            <div className="button">{"\u092C\u094D\u091C"}</div>
            <div className="button">{"\u092C\u094D\u0926"}</div>
            <div className="button">{"\u092C\u094D\u092C"}</div>
            <div className="button">{"\u092C\u094D\u0932"}</div>
            <div className="button">{"\u0918\u094D\u0928"}</div>
            <div className="button">{"\u092B\u094D\u0924"}</div>
            <div className="button">{"\u0936\u094D\u0930\u094D\u091A"}</div>
            <div className="button">{"\u0936\u094D\u0930\u094D\u0935"}</div>
          </div>

          <div className="row">
            <div className="button" onClick={() => this.switchLayout(4)}>
              {"3/4"}
            </div>
            <div className="button">{"\u0932\u094D\u091F"}</div>
            <div className="button">{"\u0932\u094D\u092A"}</div>
            <div className="button">{"\u0932\u094D\u092C"}</div>
            <div className="button">{"\u0932\u094D\u0939"}</div>
            <div className="button">{"\u0937\u094D\u091F"}</div>
            <div className="button">{"\u0937\u094D\u0923"}</div>
            <div className="button">{"\u0937\u094D\u092A"}</div>
            <div className="button">{"\u0937\u094D\u0915"}</div>
            <div className="button">
              <i class="fas fa-backspace"></i>
            </div>
          </div>

          <div className="row-last">
            <div className="end-button">{"? \u0967 \u0968 \u0969"}</div>
            <div className="end-button">
              <i class="far fa-smile"></i>
              <br /> ,
            </div>
            <div className="end-button">
              <i class="fas fa-globe fa-2x"></i>
            </div>
            <div className="spacebar">
              {"\u0939\u093F\u0928\u094D\u0926\u0940"}
            </div>
            <div className="end-button">{"double sided arrow"}</div>
            <div className="end-button">{"\u0964"}</div>
            <div className="button-search">
              <i class="fas fa-search fa-2x"></i>
            </div>
          </div>
        </TaskContainer>
      );
    }

    if (this.state.current === 4) {
      return (
        <TaskContainer>
          <div className="row">
            <div className="button">{"\u090D"}</div>
            <div className="button">{"\u0911"}</div>
            <div className="button">{"\u090E"}</div>
            <div className="button">{"\u0912"}</div>
            <div className="button">{"\u0914"}</div>
            <div className="button">{"\u0973"}</div>
            <div className="button">{"\u0974"}</div>
            <div className="button">{"\u0976"}</div>
            <div className="button">{"\u0977"}</div>
            <div className="button">{"\u0960"}</div>
          </div>

          <div className="row">
            <div className="button">{"\u0945"}</div>
            <div className="button">{"\u0949"}</div>
            <div className="button">{"\u0946"}</div>
            <div className="button">{"\u094A"}</div>
            <div className="button">{"\u094C"}</div>
            <div className="button">{"\u093A"}</div>
            <div className="button">{"\u093B"}</div>
            <div className="button">{"\u0956"}</div>
            <div className="button">{"\u0957"}</div>
            <div className="button">{"\u0944"}</div>
          </div>

          <div className="row">
            <div className="button">{"\u090C"}</div>
            <div className="button">{"\u0961"}</div>
            <div className="button">{"\u0904"}</div>
            <div className="button">{"\u0972"}</div>
            <div className="button">{"\u0979"}</div>
            <div className="button">{"\u097A"}</div>
            <div className="button">{"\u097B"}</div>
            <div className="button">{"\u097C"}</div>
            <div className="button">{"\u097E"}</div>
            <div className="button">{"\u097F"}</div>
          </div>

          <div className="row">
            <div className="button">{"\u0962"}</div>
            <div className="button">{"\u0963"}</div>
            <div className="button">{"\u0900"}</div>
            <div className="button">{"\u093A"}</div>
            <div className="button">{"\u0952"}</div>
            <div className="button">{"\u097D"}</div>
            <div className="button">{"\u0929"}</div>
            <div className="button">{"\u0931"}</div>
            <div className="button">{"\u0934"}</div>
            <div className="button">{"\u0933"}</div>
          </div>

          <div className="row">
            <div className="button" onClick={() => this.switchLayout(5)}>
              {"4/4"}
            </div>
            <div className="button">{"\u0966"}</div>
            <div className="button">{"\u0953"}</div>
            <div className="button">{"\u0954"}</div>
            <div className="button">{"\u094E"}</div>
            <div className="button">{"\u0903"}</div>
            <div className="button">{"\u093D"}</div>
            <div className="button">{"\u0965"}</div>
            <div className="button">{"\u0950"}</div>
            <div className="button">
              <i class="fas fa-backspace"></i>
            </div>
          </div>

          <div className="row-last">
            <div className="end-button">{"? \u0967 \u0968 \u0969"}</div>
            <div className="end-button">
              <i class="far fa-smile"></i>
              <br /> ,
            </div>
            <div className="end-button">
              <i class="fas fa-globe fa-2x"></i>
            </div>
            <div className="spacebar">
              {"\u0939\u093F\u0928\u094D\u0926\u0940"}
            </div>
            <div className="end-button">{"double sided arrow"}</div>
            <div className="end-button">{"\u0964"}</div>
            <div className="button-search">
              <i class="fas fa-search fa-2x"></i>
            </div>
          </div>
        </TaskContainer>
      );
    }

    if (this.state.current === 5) {
      return (
        <TaskContainer>
          <div className="row">
            <div className="button">{"\u0967"}</div>
            <div className="button">{"\u0968"}</div>
            <div className="button">{"\u0969"}</div>
            <div className="button">{"\u096A"}</div>
            <div className="button">{"\u096B"}</div>
            <div className="button">{"\u096C"}</div>
            <div className="button">{"\u096D"}</div>
            <div className="button">{"\u096E"}</div>
            <div className="button">{"\u096F"}</div>
            <div className="button">{"\u0966"}</div>
          </div>

          <div className="row">
            <div className="button">{"@"}</div>
            <div className="button">{"#"}</div>
            <div className="button">
              <i class="fas fa-rupee-sign"></i>
            </div>
            <div className="button">{"_"}</div>
            <div className="button">{"&"}</div>
            <div className="button">{"-"}</div>
            <div className="button">{"+"}</div>
            <div className="button">{"("}</div>
            <div className="button">{")"}</div>
            <div className="button">{"/"}</div>
          </div>

          <div className="row">
            <div className="button">{"= \\ <"}</div>
            <div className="button">{"*"}</div>
            <div className="button">{' " '}</div>
            <div className="button">{"'"}</div>
            <div className="button">{":"}</div>
            <div className="button">{";"}</div>
            <div className="button">{"!"}</div>
            <div className="button">{"?"}</div>
            <div className="button">
              <i class="fas fa-backspace"></i>
            </div>
          </div>

          <div className="row-last">
            <div className="button" onClick={() => this.switchLayout(1)}>
              {"\u0915\u0916\u0917"}
            </div>
            <div className="button">{","}</div>
            <div className="button">{" 1234"}</div>
            <div className="spacebar">
              {"\u0939\u093F\u0928\u094D\u0926\u0940"}
            </div>
            <div className="button">{"."}</div>
            <div className="button-search">
              <i class="fas fa-search fa-2x"></i>
            </div>
          </div>
        </TaskContainer>
      );
    }
  };

  render = () => {
    return (
      <>
        <div className="container">
          <input value={this.state.input_text} className="text-box" />
          {this.getLayout()}
        </div>
      </>
    );
  };
}

export default HindiKeyboard;
