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
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "no-console": "warn",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
  },
};
