import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import ConfigPropertyBoolean from "./config-property-boolean";

type Story = StoryObj<typeof ConfigPropertyBoolean>;

const meta: Meta<typeof ConfigPropertyBoolean> = {
  component: ConfigPropertyBoolean,
  title: "components/ConfigPropertyBoolean",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const ConfigPropertyBooleanStory: Story = {};
