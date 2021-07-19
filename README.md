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

## Rendering

Rendering does not mean changing the DOM. There are two phases to update UI as render phase and commit phase. DOM is updated in the commit phase according to the output of the rendering phase which specifies the changes.

- The setter function from useState will cause rerender. However, the exception is updating the state to the same value. If the state updated to the same value right after the initial render, then the component will not re-render. But if the state is updated after the re-render, then React will re-render that specific component and bails out from any subsequent re-renders.

- The same rendering mechanisim applies for the dispatch method of useReducer
