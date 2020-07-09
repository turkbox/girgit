import React from "react";
import { action } from "@storybook/addon-actions";
import MoreOptionsButton from "./MoreOptionsButton.js";

export default {
  title: "More Options Button",
  component: MoreOptionsButton,
};

/* Refer to this for schema planning: https://baseweb.design/components/menu/ */

const dispatchDeleteCampaignRequest = (e) => {
  e.preventDefault();
  console.log(`Delete Campaign Request`);
};

const dispatchFetchCampaignCSVRequest = (e) => {
  e.preventDefault();
  console.log(`Delete Campaign Request`);
};

const schema = [
  {
    optionName: "Delete",
    optionValue: "delete",
    optionAction: dispatchDeleteCampaignRequest, 
  },
];

export const DefaultInput = () => <MoreOptionsButton schema={schema} />;
