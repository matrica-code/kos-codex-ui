import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import UnitConfig from "./unit-config";

type Story = StoryObj<typeof UnitConfig>;

const meta: Meta<typeof UnitConfig> = {
  component: UnitConfig,
  title: "components/UnitConfig",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const UnitConfigStory: Story = {};
