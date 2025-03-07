import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { TroublesList } from "./troubles-list";

type Story = StoryObj<typeof TroublesList>;

const meta: Meta<typeof TroublesList> = {
  component: TroublesList,
  title: "components/TroublesList",
};

export default meta;

export const TroublesListStory: Story = {};
