# Getting Started with this template

This is an example for successfully using the latest version of mapbox (V2.2.0) with Create React App.
For the creation of this project, [this](https://github.com/brdv/react-ts-template) template had been used.

- Basic CRA features (link)
- ESLint with [Airbnb Javascript style](https://github.com/airbnb/javascript)
- Prettier enforcing the eslint rulse
- Various other scripts

## Available Scripts

In the project directory, you can run:

##### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `yarn lint`

This will run eslint on all ts,js,tsx and jsx files. Eslint config can be found [here](https://github.com/brdv/react-ts-template/blob/develop/.eslintrc.json).

##### `yarn format`

This will run prettier over all .ts,.js,.tsx and .jsx files. Prettier config can be found [here](https://github.com/brdv/react-ts-template/blob/develop/.prettierrc).

##### `yarn lifo`

This will run both `yarn lint` and `yarn format` to get your code ready before you want to commit/push!

##### `yarn testAll`

This will `yarn test` with the flags `--watchAll=false --coverage` to get a quick overview from the code coverage for the tests that ran.

##### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
