import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { LocalizationTrans } from "./localization-trans";

type Story = StoryObj<typeof LocalizationTrans>;

const meta: Meta<typeof LocalizationTrans> = {
  component: LocalizationTrans,
  title: "components/LocalizationTrans",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const LocalizationTransStory: Story = {};
