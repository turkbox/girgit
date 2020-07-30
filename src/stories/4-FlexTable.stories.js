import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Table from "./../components/navigation/FlexTable";
import { addDecorator } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Flex Table",
  component: Table,
};

const data = [
  {
    display_name: "Abhishek Bishk",
    user_email: "Bishk@bishk.bishk",
    user_registered: "2020-04-21 07:50:16",
    expire: "1594771200000",
  },
];

const heading = [
  {
    field1: "Name",
    field2: "Subscription Started",
    field3: "Subscription Expires",
    field4: "Actions",
  },
];

export const FlexTable = () => (
  <BrowserRouter>
    <Table data={data} header={heading} />
  </BrowserRouter>
);
