import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { Localization } from "./localization";

type Story = StoryObj<typeof Localization>;

const meta: Meta<typeof Localization> = {
  component: Localization,
  title: "components/Localization",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const LocalizationStory: Story = {};
