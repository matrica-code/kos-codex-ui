import { Source } from "@storybook/blocks";

import snippets from "../../../.storybook/snippets.json";

export const Snippet = ({ name }: { name: keyof typeof snippets }) => (
  <Source code={snippets[name]} />
);
