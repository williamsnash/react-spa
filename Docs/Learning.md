# Learned things

## npm install x --save/--save-dev
`npm install x --save` will install the package and add it to the `dependencies` in `package.json` file. `npm install x --save-dev` will install the package and add it to the `devDependencies` in `package.json` file. Save-dev is used for the packages that are only used in development environment, like testing libraries, etc.

## npm version
Used to update the version of the package.
- `npm version patch`: Updates the patch version (0.0.1->0.0.2)
- `npm version minor`: Updates the minor version (0.1.0->0.2.0)
- `npm version major`: Updates the major version (1.0.0->2.0.0)

## npx depcheck
`npx dep` check is a tool to check the dependencies in the project. It will show the unused/ missing dependencies in the project.
