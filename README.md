# Channel program app with platformOS and react

## Step 1: Create place for the React app files

The source files of a web app are not part of platformOS and can be stored anywhere you want.
In this example, to keep everything together in one repo and one project, we'll create the React app directly in our Instance's folder but not inside the /app folder. It is not recommended to deploy our source files to the server, only the built and minified ones.

Navigate to your Instance folder and then to my-app folder.

you should have the /app, modules, and my-app folders in your local Instance.

## Step 2: Create your React build as your platformOS page

You can find package.json under react-app. You need to add three new scripts:

* a layout script to copy the built index.html to your platformOS app's index page
* one to clear the assets folder
* and one to use the built folder as the assets

```
"layout": "cp ./build/index.html ../app/views/pages/index.html.liquid",
"assets:remove": "rm -rf ../app/assets/web-app",
"assets:copy": "mv ./build/ ../app/assets/web-app"
```

You can now use these scripts in your build script:

```
"build": "react-scripts build && npm run layout && npm run assets:remove && npm run assets:copy"
```

## npm tasks
* `npm start` - starts syncing to "dev" environment (make sure you have one added via pos-cli) and starts watching changes in assets to automatically sync them
* `npm run build` - build assets in production mode, minified, unused CSS classes purged
* `npm run build:dev` - build assets in development mode, unminified (full TailwindCSS included)

## Email Notifications
For PlatformOS's built-in mailing system to work on **staging** instances, it's needed to set up a "test_email" on your staging instance:
https://documentation.platformos.com/developer-guide/partner-portal/instances/configuring-test-email
For example, you can set up your personal/work email account on this field; it's the account(s) that will actually receive the notifications sent by your system.
It's not necessary for production environments.

## More info
https://documentation.platformos.com/use-cases/using-rest-endpoints-with-react#step-3-set-up-your-apps-public-folder