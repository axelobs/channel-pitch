# Channel program app with platformOS and react

## Step 1: Create place for the React app files

The source files of a web app are not part of platformOS and can be stored anywhere you want.
In this example, to keep everything together in one repo and one project, you'll create the React app directly in your Instance's folder but not inside the /app folder. It is not recommended to deploy your source files to the server, only the built and minified ones.

## npm tasks
* `npm start` - starts syncing to "dev" environment (make sure you have one added via pos-cli) and starts watching changes in assets to automatically sync them
* `npm run build` - build assets in production mode, minified, unused CSS classes purged
* `npm run build:dev` - build assets in development mode, unminified (full TailwindCSS included)
