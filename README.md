# New installation methods demo

Thank you for trying out the demo of the new CKEditor installation methods. We hope you will share your thoughts and any problems you encounter.

## `ckeditor5` folder

The `ckeditor5` folder is similar to the `ckeditor5` npm package that we will release when we introduce the new installation methods.

> [!NOTE]
> For demonstration purposes, it does not include translations or TypeScript typing, and does not allow overriding SVG icons as shown in the RFC. However, it does allow you to import the editor, all plugins and styles from a single package and doesn't require any special setups or custom CKEditor plugins in bundlers.

## `Vite` and `webpack` folders

The `Vite` and `webpack` folders contain minimal setups needed to create a Classic Editor with the same set of plugins as in the Predefined Build. Note that the webpack setup only uses the generic `style-loader` and `css-loader` plugins needed to handle CSS and the Vite setup doesn't use any custom configuration file at all.

To run the demo:

1. Go to the `Vite` or `webpack` folder.
2. Run `yarn` to install all dependencies.
3. Run `yarn dev` to run the development environment or `yarn build` to build the project.

## `browser` folder

The `browser` folder contains minimal setup using our CDN/browser build. It also registers a custom plugin from our [Crash course](https://ckeditor.com/docs/ckeditor5/latest/tutorials/crash-course/editor.html) to show how you might be able to use CKEditor without the build step.

To run the demo:

1. Run `yarn` to install http server.
2. Run `yarn dev` and open <http://127.0.0.1:8080/>.
