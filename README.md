# New installation methods demo

Thank you for trying out the demo of the new CKEditor installation methods. We hope you will share your thoughts and any problems you encounter.

## `Vite` and `webpack` folders

The `Vite` and `webpack` folders contain minimal setups needed to create a Classic Editor with the same set of plugins as in the Predefined Build. Note that the webpack setup only uses the generic `style-loader` and `css-loader` plugins needed to handle CSS and the Vite setup doesn't use any custom configuration file at all.

To run the demo:

1. Go to the `Vite` or `webpack` folder.
2. Run `yarn` to install all dependencies.
3. Run `yarn dev` to run the development environment or `yarn build` to build the project.

## `browser` folder

The `browser` folder contains a minimal setup using our CDN/browser build. It also registers a custom plugin from our [Crash Course](https://ckeditor.com/docs/ckeditor5/latest/tutorials/crash-course/editor.html) to show how you might be able to use CKEditor without the build step.

To run the demo:

1. Run `yarn` to install http server.
2. Run `yarn dev` and open <http://127.0.0.1:8080/>.
