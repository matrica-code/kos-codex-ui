import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import TeamList from "./team-list";

type Story = StoryObj<typeof TeamList>;

const meta: Meta<typeof TeamList> = {
  component: TeamList,
  title: "components/TeamList",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const TeamListStory: Story = {
  tags: ["!dev", "!autodocs"],
};

export const TeamListStoryWithData: Story = {
  tags: ["!dev", "!autodocs"],
  args: {
    prepopulate: true,
  },
};
