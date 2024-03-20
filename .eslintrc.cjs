module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Agregado para la integración con Prettier
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react"],
  rules: {
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-lone-blocks": ["error"],
    "no-unused-vars": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/no-unstable-nested-components": "warn",
    "import/no-unresolved": "off",
    "global-require": "off",
    "max-len": ["warn", { "code":  400 }],
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
