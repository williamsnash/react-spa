# Learned things

## Hosting a static website on AWS S3/ Amplify
- Hosting a static website on S3 is very cheap, as you are just paying for the storage used. You do not pay for the requests made to the website.
- Hosting a static website on Amplify is also cheap but more expensive as it handle domain, SSL, cloudfront, deployment, etc. The deployment process is easier than S3 because it is linked directly to a GitHub repository.

## npm install x --save/--save-dev
`npm install x --save` will install the package and add it to the `dependencies` in `package.json` file. `npm install x --save-dev` will install the package and add it to the `devDependencies` in `package.json` file. Save-dev is used for the packages that are only used in development environment, like testing libraries, etc.

## npm version
Used to update the version of the package.
- `npm version patch`: Updates the patch version (0.0.1->0.0.2)
- `npm version minor`: Updates the minor version (0.1.0->0.2.0)
- `npm version major`: Updates the major version (1.0.0->2.0.0)

## npx depcheck
`npx dep` check is a tool to check the dependencies in the project. It will show the unused/ missing dependencies in the project.
