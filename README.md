# create-react-app-postcss-starter

An example on using [PostCSS](https://github.com/postcss/postcss) with [Create React App](https://github.com/facebookincubator/create-react-app) without ejecting the project.

This follows the recommendation in the official
README [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc) with a few modifications.

## Running the App

```
$> git clone https://github.com/yeojz/create-react-app-postcss-starter.git
$> yarn install
$> yarn start
```

You'll need to run `yarn start` in order to see `./compiled/style.css` and `./src/style.json`;

Upon `yarn start`, the css is compiled once, before the css watcher and js watcher
is run. (This is to allow the `./compiled/style.css` to be available first.)

When any changes are made, css recompilation will be triggered and subsequently the js
watcher will also be triggered after the change to the compiled css has been made.

## Some differences from the create-react-app guide

### Single css entry point

Unlike the `create-react-app` README, only a single file, `./src/style.css` is watched.

### Preprocessed vs non-preprocessed CSS

Since the css watcher only watches `./src/style.css`, if you directly import
a css file, eg: `import 'custom.css'` in any of the js files, that css file _WILL NOT_
be compiled via the custom PostCSS processor but would instead be directly handled by `create-react-app`'s default processor.

For an example, check out `./src/AppCustom.css` in `./src/App.js`

### CSS Modules

[postcss-modules](https://github.com/css-modules/postcss-modules) is included in this example. As such, all files are compiled into
a single `css` file with their class names hashed.

A mapping of classes are written to `./src/style.json` which can then be used within the application, via a normal import. eg:

```js
import style from 'src/style'; //.json

<div className={style.myClass} />
```

## Quick overview of changes

This is non-exhaustive. Just a quick overview.

-   `postcss.config.js`
-   replaced `import './index.css'` in `index.js` with `import '../compiled/style.css';`
-   modified `yarn start` in `package.json`
-   `style.css` - entry point for css files
-   `.js` files all modified to take classes from `./src/style.json`
