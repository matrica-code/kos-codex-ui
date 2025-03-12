import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { Units } from "./units";

type Story = StoryObj<typeof Units>;

const meta: Meta<typeof Units> = {
  component: Units,
  title: "components/Units",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const UnitsStory: Story = {};
