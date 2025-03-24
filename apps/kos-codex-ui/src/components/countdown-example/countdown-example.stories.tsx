import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import CountdownExample from "./countdown-example";

type Story = StoryObj<typeof CountdownExample>;

const meta: Meta<typeof CountdownExample> = {
  component: CountdownExample,
  title: "components/CountdownExample",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const TimerExampleStory: Story = {};
