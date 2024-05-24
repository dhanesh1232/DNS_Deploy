import { globals } from "globals";
import pluginJs from "@eslint/eslint-plugin";
import pluginReactRecommended from "eslint-plugin-react/configs/recommended.js"; // Updated import

import { fixupConfigRules } from "@eslint/compat";

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
  extends: [
    pluginJs.configs.recommended,
    pluginReactRecommended, // Updated to use eslint-plugin-react/configs/recommended.js
    // ... Other extensions
  ],
  rules: {
    // Your custom rules
  },
};
