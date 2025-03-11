import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import ConfigProperty from "./config-property";

type Story = StoryObj<typeof ConfigProperty>;

const meta: Meta<typeof ConfigProperty> = {
  component: ConfigProperty,
  title: "components/ConfigProperty",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const ConfigPropertyStory: Story = {};
