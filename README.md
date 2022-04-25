# NextJS + Typescript + Apollo Client + GraphQL template

Template with preconfigure NextJS with Typescript support.

Apollo Client provider with preconfigured SSG, SSR, ISR or CSR. Cached in Apollo Cached and gql.

Linting with ESLint and TS support and formating by Prettier.

Code inspiration by [**JarrodWatts Code Like Google**](https://github.com/jarrodwatts/code-like-google)

## Scripts

- 'yarn dev' - dev server\
- 'yarn build' - build next
- 'yarn start' - start next server
- 'yarn lint' - lint all files by ESLint

## Linting

- Unused import auto remove from file.
- Unused variables warning.
- Eslint Google config [Eslint Google Config](https://www.npmjs.com/package/eslint-config-google)
- JSX - React 17 no React import needed

## Technologies we are using:

- ESLint (['.eslintrc.js'](./.eslintrc.js))
- Prettier (['.prettierrc'](./.prettierrc))
- Typescript (['tsconfig.json'](./tsconfig.json))
- 'eslint-config-prettier' (helps eslint and prettier get along)

## Auto-formatting on save:

Inside '/.vscode/settings.json' we set prettier as the default formatter, and also set 'editor.codeActionsOnSave' to run:

- **Lint:** '"source.fixAll.eslint"'
- **Format:** '"source.fixAll.format"'

## Checking standards pre-commit:

Using [husky](https://www.npmjs.com/package/husky) we can check all of our style standards to make sure our git commits are up to par. Check those checks out at ['.husky/pre-commit'](.husky/pre-commit)
