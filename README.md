# create-react-app-postcss

This repository contains an example implementation of create-react-app
and PostCSS processing, following the recommendation in the official
README [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)

This repository __IS NOT__ a custom react-script.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and has not been ejected.

## Using this repository

```
$> git clone https://github.com/yeojz/create-react-app-postcss.git
$> yarn install
$> yarn start
```

You'll need to run `yarn start` in order to see `./compiled/style.css` and `./src/style.json`;

## Development flow

Upon `yarn start`, the css is compiled once, before the css watcher and js watcher
is run. (This is to allow the `./compiled/style.css` to be available first.)

When any changes are made, css recompilation will be triggered and subsequently the js
watcher will also be triggered after the change to the compiled css has been made.

## Some differences from the create-react-app guide

### Preprocessed vs non-preprocessed CSS

The css watcher __ONLY__ watches `./src/style.css`. Therefore, if you directly import
a css file, eg: `import 'custom.css'` in any of the js files, that css file _WILL NOT_
be passed through the custom postcss processor.

For an example, check out `./src/AppCustom.css` in `./src/App.js`

### PostCSS modules

`postcss-modules` is included in this example. As such, all files are compiled into
a single `css` file with their class names namespaced/hashed. 
A mapping of classes are written to `./src/style.json` which can then be used within the application.
