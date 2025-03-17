import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import WidgetList from "./widget-list";

type Story = StoryObj<typeof WidgetList>;

const meta: Meta<typeof WidgetList> = {
  component: WidgetList,
  title: "components/WidgetList",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const WidgetListStory: Story = {};
