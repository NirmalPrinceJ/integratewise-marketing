import next from "eslint-config-next"

// Next.js provides a native flat config export in eslint-config-next@16+.
// This avoids ESLint v9 circular schema issues caused by compat shims.
const config = [
  ...next,
  {
    rules: {
      // Many existing marketing pages include apostrophes/quotes in JSX text.
      // We keep copy readable and rely on React escaping.
      "react/no-unescaped-entities": "off",
      "import/no-anonymous-default-export": "off",
    },
  },
]

export default config

