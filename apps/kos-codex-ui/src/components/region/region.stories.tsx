import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { Region } from "./region";

type Story = StoryObj<typeof Region>;

const meta: Meta<typeof Region> = {
  component: Region,
  title: "components/Region",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const RegionStory: Story = {};
