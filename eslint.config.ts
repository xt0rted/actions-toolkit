import path from "node:path";

import js from "@eslint/js";
import unicornPlugin from "eslint-plugin-unicorn";
import globals from "globals";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  js.configs.recommended,
  unicornPlugin.configs["flat/recommended"],
  {
    ignores: [
      "bin/",
      "coverage/",
      "dist/",
      "lib/",
    ],
  },
  { languageOptions: { globals: globals.node } },
  {
    files: [
      "**/*.js",
      "**/*.cjs",
      "**/*.mjs",
      "**/*.ts",
    ],
    plugins: { unicornPlugin },
    rules: {
      "array-bracket-spacing": ["error", "never"],
      "arrow-body-style": ["error", "as-needed"],
      "arrow-parens": ["error", "always"],
      "arrow-spacing": ["error", {
        before: true,
        after: true,
      }],
      "class-methods-use-this": "error",
      "comma-dangle": ["error", "always-multiline"],
      "comma-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],
      "computed-property-spacing": ["error", "never"],
      eqeqeq: ["error", "smart"],
      "eol-last": [
        "error",
        "always",
      ],
      "function-call-argument-newline": ["error", "consistent"],
      "function-paren-newline": ["error", "consistent"],
      "implicit-arrow-linebreak": ["error", "beside"],
      indent: ["error", 2],
      "key-spacing": ["error", {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
      }],
      "keyword-spacing": [
        "error",
        {
          before: true,
          after: true,
        },
      ],
      "lines-around-comment": ["error", {
        beforeBlockComment: true,
        beforeLineComment: true,
      }],
      "lines-between-class-members": ["error", "always"],
      "line-comment-position": "error",
      "linebreak-style": ["error", "unix"],
      "max-statements-per-line": ["error", { max: 1 }],
      "multiline-ternary": ["error", "always-multiline"],
      "newline-per-chained-call": "error",
      "no-bitwise": [
        "error",
        { int32Hint: true },
      ],
      "no-console": "off",
      "no-constructor-return": "error",
      "no-duplicate-imports": ["error", { includeExports: true }],
      "no-else-return": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
      "no-return-assign": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-trailing-spaces": "error",
      "no-undef": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-unused-expressions": ["error", {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      }],
      "no-unused-private-class-members": "error",
      "no-use-before-define": ["error", {
        classes: false,
        functions: false,
        variables: true,
      }],
      "no-useless-constructor": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "no-whitespace-before-property": "error",
      "object-curly-newline": ["error", {
        ExportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
        ObjectExpression: {
          multiline: true,
          minProperties: 2,
        },
        ObjectPattern: { consistent: true },
      }],
      "object-curly-spacing": ["error", "always"],
      "object-shorthand": "error",
      "one-var-declaration-per-line": "error",
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: "return",
        },
      ],
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      quotes: ["error", "double", { avoidEscape: true }],
      "quote-props": ["error", "as-needed"],
      radix: [
        "error",
        "always",
      ],
      "require-await": "error",
      semi: "error",
      "sort-imports": ["error", {
        allowSeparatedGroups: true,
        ignoreDeclarationSort: true,
      }],
      "sort-keys": ["off", "asc", {
        caseSensitive: false, natural: true,
      }],
      "sort-vars": "error",
      "space-before-blocks": ["error", "always"],
      "space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          asyncArrow: "always",
          named: "never",
        },
      ],
      "space-in-parens": [
        "error",
        "never",
      ],
      "space-infix-ops": [
        "error",
        { int32Hint: true },
      ],
      "space-unary-ops": [
        "error",
        {
          words: true,
          nonwords: false,
        },
      ],
      "spaced-comment": [
        "error",
        "always",
        {
          line: {
            markers: [
              "/",
            ],
          },
        },
      ],
      "unicode-bom": [
        "error",
        "never",
      ],
    },
  },
  {
    files: [
      "**/*.ts",
    ],
    extends: [
      ...tsEslint.configs.recommendedTypeChecked,
    ],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: path.resolve(),
      },
    },
    plugins: { "@typescript-eslint": tsEslint.plugin },
    rules: {
      "no-use-before-define": "off",
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    },
  },
);
