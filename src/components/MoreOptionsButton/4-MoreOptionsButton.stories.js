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
  console.log(`Fetch Campaign Request`);
};

const ExportCoupons = (e) => {
  e.preventDefault();
  console.log(`Coupon Exporting`);
};

const RenewUser = (e) => {
  e.preventDefault();
  console.log(`user expiry date extended`);
};

const schema = [
  {
    optionName: "Delete",
    optionValue: "delete",
    optionAction: dispatchDeleteCampaignRequest, 
  },
  {
    optionName: "Fetch Campaign",
    optionValue: "Fetch Campaign",
    optionAction: dispatchFetchCampaignCSVRequest, 
  },
  {
    optionName: "Export Coupons",
    optionValue: "export coupons",
    optionAction: ExportCoupons, 
  },
  {
    optionName: "Update User",
    optionValue: "update user",
    optionAction: RenewUser, 
  },
];

export const DefaultInput = () => <MoreOptionsButton schema={schema} />;
