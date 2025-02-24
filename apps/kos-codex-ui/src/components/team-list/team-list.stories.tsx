import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { TeamList } from "./team-list";

type Story = StoryObj<typeof TeamList>;

const meta: Meta<typeof TeamList> = {
  component: TeamList,
  title: "components/TeamList",
};

export default meta;

export const TeamListStory: Story = {};
