import { Source } from "@storybook/blocks";

import snippets from "../../../.storybook/snippets.json";

type key = keyof typeof snippets;

export const Snippet = ({ name }: { name: key | key[] }) => {
  const code =
    typeof name === "string"
      ? snippets[name]
      : name.reduce((acc, key) => {
          if (!acc) return snippets[key];
          return `${acc}\n\n${snippets[key]}`;
        }, "");
  return <Source code={code} />;
};
