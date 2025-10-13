/* eslint-env node */
import path from "node:path";

import js from "@eslint/js";
import globals from "globals";
import eslintPluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import tailwind from "eslint-plugin-tailwindcss";
import tseslint from "typescript-eslint";

const baseGlobals = {
  ...globals.browser,
  ...globals.node,
};

const projectRoot = path.resolve(import.meta.dirname);

export default tseslint.config(
  {
    ignores: ["dist", "node_modules", "coverage", "public", "tailwind.config.ts", "vite.config.ts"],
  },
  {
    settings: {
      react: { version: "detect" },
    },
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: projectRoot,
      },
      globals: baseGlobals,
    },
    plugins: {
      react: eslintPluginReact,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      tailwindcss: tailwind,
    },
    settings: {
      "import/internal-regex": "^@/",
      "import/resolver": {
        typescript: {
          project: ["./tsconfig.json", "./tsconfig.node.json"],
          allowDefaultProject: true,
        },
        node: true,
      },
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReact.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/require-await": "error",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/jsx-no-leaked-render": ["error", { validStrategies: ["coerce", "ternary"] }],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.test.{ts,tsx}",
            "**/vitest.setup.ts",
            "**/vite.config.ts",
            "**/tailwind.config.ts",
            "**/postcss.config.js",
            "**/commitlint.config.mjs",
            "**/eslint.config.mjs",
          ],
        },
      ],
      "import/order": [
        "warn",
        {
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling", "index"],
            ["type"],
            ["object"],
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: baseGlobals,
    },
    plugins: {
      react: eslintPluginReact,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReact.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.{test,spec}.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...baseGlobals,
        vi: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: projectRoot,
      },
    },
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
);
