/* eslint-disable */
export default {
  displayName: "kos-codex-i18n",
  preset: "../../jest.preset.js",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: "../../coverage/translations/kos-codex-i18n",
};
