# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Notes

## useCallback hook

useCallback is a hook that will return memoized version of the callback function that only changes if one of the dependencies has changed

It is usefull when passing down to the optimized child components that rely on reference equality to prevent unnecessray renders

useMemo is similar to useCallback, however it differs as the following

useCallback caches provided function instance itself whereas useMemo invokes the provided function and caches its result.
