import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { LocalizationInterpolate } from "./localization-interpolate";

type Story = StoryObj<typeof LocalizationInterpolate>;

const meta: Meta<typeof LocalizationInterpolate> = {
  component: LocalizationInterpolate,
  title: "components/LocalizationInterpolate",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const LocalizationInterpolateStory: Story = {};
