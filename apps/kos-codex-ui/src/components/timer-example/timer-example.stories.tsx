import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { TimerExample } from "./timer-example";

type Story = StoryObj<typeof TimerExample>;

const meta: Meta<typeof TimerExample> = {
  component: TimerExample,
  title: "components/TimerExample",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const TimerExampleStory: Story = {};
