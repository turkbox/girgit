import React from "react";
import HindiKeyboard from "./Hindi";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Hindi Keyboard",
  component: HindiKeyboard,
};

export const Keyboard = () => (
  <BrowserRouter>
    <HindiKeyboard />
  </BrowserRouter>
);
