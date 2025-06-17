/* eslint-disable import/no-anonymous-default-export */
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jestPlugin from "eslint-plugin-jest";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Base config extensions
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react-hooks/recommended"
  ),

  {
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },

    plugins: {
      import: importPlugin,
      "react-hooks": reactHooksPlugin,
      jest: jestPlugin,
    },

    rules: {
      "react/display-name": "off",
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
      "import/no-anonymous-default-export": "off",

      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "comma-dangle": ["error", "always-multiline"],
      "no-console": ["warn", { allow: ["warn", "error"] }],

      "lines-around-comment": [
        "error",
        {
          beforeLineComment: true,
          beforeBlockComment: true,
          allowBlockStart: true,
          allowClassStart: true,
          allowObjectStart: true,
          allowArrayStart: true,
        },
      ],

      "newline-before-return": "error",

      "import/newline-after-import": ["error", { count: 1 }],

      "@typescript-eslint/ban-types": [
        "error",
        {
          extendDefaults: true,
          types: {
            "{}": false,
          },
        },
      ],
    },

    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["./tsconfig.json"],
        },
      },
    },
  },
];
