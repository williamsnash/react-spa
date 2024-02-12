# To Deploy Static S3 Website

## Pre-requisites
- AWS Account
- S3 Bucket (with public access, and static website hosting enabled)
  
## Manual Steps
1. Build the project
   ```bash
    npm run build
    ```
2. Upload the './build' files to the S3 bucket
   1. Uploads files using `Add files` and select all files in the `./build` folder
   2. Upload the `./build/static/` folder using the `Add Folder` option. This is important
3. Done


# Deploy to Amplify
## Pre-requisites
- AWS Account

## Manual Steps
1. Create a new Amplify App
2. Connect the app to the GitHub repository
3. Select the branch to deploy
4. Change any settings as needed
5. Click `Save and Deploy`