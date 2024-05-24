import pluginJs from "@eslint/eslint-plugin";
import pluginReactRecommended from "eslint-plugin-react/configs/recommended.js";

export default {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [pluginJs.configs.recommended, pluginReactRecommended],
  rules: {},
};
