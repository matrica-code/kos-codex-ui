import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import ConfigPropertyEnum from "./config-property-enum";

type Story = StoryObj<typeof ConfigPropertyEnum>;

const meta: Meta<typeof ConfigPropertyEnum> = {
  component: ConfigPropertyEnum,
  title: "components/ConfigPropertyEnum",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const ConfigPropertyEnumStory: Story = {};
