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

- For-non primitive type states (like objects and arrays) referential equality is used to decide if the state changed or not. This is why we can not directly modify the state object and use it as a parameter to setState function. Instead, we need to create a new object and use it as a paremeter to the setState function.
  So, mutating an object or array as state, will not cause re-render when used with useState or useReducer

- When a parant component renders, React will recursively renders all of its child components. Child compoennts go through the render phase but not commit phase. So, DOM represented by Child component is never updated.

  - If new state is the same as the old state after the initial render, then both parent and child components are not re-rendered.
  - If new state is the same as the old state after the re-render, then parent is rendered only once and child is never re-rendered.

- As mentioned before, when a parent component renders, React will recursively renders all of the child components. "Unnecessary renders" where the child component goes to render phase but not commit phase.
  We can extract child component and instead pass it down as props to the parent component. This will prevent "unnecessary renders". Because React is sure about that the props can not be changed by the related component, React can deduce that when the state of the parent component is changed, child component which is coming as props will not need to be re-rendered. This can be thought as an optimization technique.

- Another optimization technique to prevent from "unnecessary renders" is using `React.memo`. React.memo is a HOC that tells React that the related child component should only be re-rendered when only its props have changed. React.memo performs a shallow comparison of the previous props and new props.

#### Incorrect memoization

- in React, props.children is always a new reference. If a component with props.children is wrapped with memo, the memo will be meaningless and the component will be rendered in each render because its props will change every time.

- Two ways of re-rendering is discussed so far,

  1. calling setter function of useState and dispatch function of useReducer
  2. parent component rendering

  now third one appears as the following: 3. context api

  let's assume hierarchy is as following:
  Parent -> Child A -> Child B -> Child C, Parent provides context and Child C consumes.
  When state of the parent compoenent changes all of the child components are rendered. However we can optimize it with React.memo or Same Element Referencing. We can memoize Child A or we can send Child A as props.children to the Parent component. This way, React will only render Parent and Child C when state of the Parent is changed.
