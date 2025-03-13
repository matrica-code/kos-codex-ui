import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import UnitOverride from "./unit-override";

type Story = StoryObj<typeof UnitOverride>;

const meta: Meta<typeof UnitOverride> = {
  component: UnitOverride,
  title: "components/UnitOverride",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const UnitOverrideStory: Story = {};
