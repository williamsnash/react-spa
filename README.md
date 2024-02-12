# Deploy to s3
1. `npm run build`
2. Upload files in `./build` by clicking `Add files` in the s3 bucket
3. Upload `./static` in `./build` folder by clicking `Add folder` in the s3 bucket

# Learned things

## npm install x --save/--save-dev
`npm install x --save` will install the package and add it to the `dependencies` in `package.json` file. `npm install x --save-dev` will install the package and add it to the `devDependencies` in `package.json` file. Save-dev is used for the packages that are only used in development environment, like testing libraries, etc.

## npx depcheck
`npx dep` check is a tool to check the dependencies in the project. It will show the unused/ missing dependencies in the project.