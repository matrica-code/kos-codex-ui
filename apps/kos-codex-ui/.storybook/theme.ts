import { create } from "@storybook/theming/create";
import logo from "../src/assets/kos-logo.png";

export default create({
  base: "dark",
  brandTitle: "kOS CodeX",
  brandImage: logo,
  barSelectedColor: "#4E4E4E",
  barBg: "#262626",
  fontBase: "'Nunito Sans', sans-serif",
  colorPrimary: "crimson",
  colorSecondary: "#4E4E4E",
});
