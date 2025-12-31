export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "packages/*/dist/**",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: (await import("@typescript-eslint/parser")).default,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },
];
