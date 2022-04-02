module.exports = {
  root: true,
  overrides: [
    {
      files: [`*.js`, `*.ts`, `*.tsx`, `*.jsx`],
      env: {
        browser: true,
        es2021: true,
      },
      extends: [
        `plugin:react/recommended`,
        `google`,
        `prettier`,
        `plugin:react/jsx-runtime`,
        `next`,
      ],
      parser: `@typescript-eslint/parser`,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: `latest`,
        sourceType: `module`,
      },
      plugins: [`react`, `@typescript-eslint`, `unused-imports`],
      rules: {
        quotes: [
          2,
          `backtick`,
          { avoidEscape: true, allowTemplateLiterals: true },
        ],
        "no-unused-vars": `off`, // or "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": `off`,
        "unused-imports/no-unused-imports": `error`,
        "unused-imports/no-unused-vars": [
          `warn`,
          {
            vars: `all`,
            varsIgnorePattern: `^_`,
            args: `after-used`,
            argsIgnorePattern: `^_`,
          },
        ],
      },
    },
    {
      files: [`*.graphql`],
      parser: `@graphql-eslint/eslint-plugin`,
      plugins: [`@graphql-eslint`],
      rules: {
        "prettier/prettier": `error`,
      },
    },
    {
      files: [`*.js`, `*.graphql`],
      rules: {
        "prettier/prettier": `off`,
      },
    },
  ],
};
