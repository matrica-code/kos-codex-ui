import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import Futures from "./futures";

type Story = StoryObj<typeof Futures>;

const meta: Meta<typeof Futures> = {
  component: Futures,
  title: "components/Futures",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const FuturesStory: Story = {};
