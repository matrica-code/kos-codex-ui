import type { StoryObj, Meta } from "@storybook/react";

import {
  CounterExample,
  CounterWithColor,
  CounterWithToggle,
} from "./counter-example";

const Counter = ({ type }: { type: "color" | "toggle" | undefined }) => {
  if (type === "color") return <CounterWithColor />;
  if (type === "toggle") return <CounterWithToggle />;
  return <CounterExample />;
};

type Story = StoryObj<typeof Counter>;

const meta: Meta<typeof Counter> = {
  component: Counter,
  title: "components/CounterExample",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const CounterExampleStory: Story = {};

export const CounterExampleWithControlsStory: Story = {
  args: {
    type: "toggle",
  },
};

export const CounterExampleWithColors: Story = {
  args: {
    type: "color",
  },
};
