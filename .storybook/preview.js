import "./../src/index.css";
import React from "react";
import { addDecorator } from "@storybook/react";
import Center from "./decorators/Center";

addDecorator((storyFn) => <Center>{storyFn()}</Center>);
