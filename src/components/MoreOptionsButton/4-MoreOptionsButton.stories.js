import React from "react";
import { action } from "@storybook/addon-actions";
import MoreOptionsButton from "./MoreOptionsButton.js";

export default {
  title: "More Options Button",
  component: MoreOptionsButton,
};

/* Refer to this for schema planning: https://baseweb.design/components/menu/ */

const schema = [
  {
    optionName: "Delete",
    optionValue: "delete",
    optionAction: "RENDER_ADMIN_CONSOLE_MODAL",
    optionPayload: {
      hello: "world",
    },
  },
];

export const DefaultInput = () => <MoreOptionsButton schema={schema} />;
