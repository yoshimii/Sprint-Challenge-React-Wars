# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is all about separation of concerns. React uses JSX and JavaScript to build isolated components. Keeping things broken up like this helps control what is happening in an application. Rather than having separate sheets for html and CSS and JavaScript, React components harmonize these into functional standalone bits. This solves issues in readability and debugging. The files are smaller and more cohesive in what they each do. This clear up purpose, which helps any developer strange to the project catch up and contribute more easily. 

2. What does it mean to think in react?

Thinking in React means thinking simple and DRY. All techniques in React point to this: Reusable pure components (no side effects) that work together to 1) extract data 2) turn that data into UI. Finally, a component should only render with input changes (proper use of state and effect). 

3. Describe state.

State is an object in React that holds information to be rendered by the component. State is managed inside the component. It has initial value that is updated via a rendering method. 

4. Describe props.

Props are properties set in the parent component that are passed using a callback function to the children components. These values are updated with state and are passed to children components to render UI components. We use props.[nameOfProp] to make use of that value. Props themselves are immutable. 

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are unwanted actions that may be renders or calls to an API depending on our component, that may occur among all the moving parts (passing data and rendering) in our components. Something that helps us control our state which affects our props is the useEffect method which takes a second optional parameter. React compares this parameter to the previous parameter and only call useEffect if that value has changed. We use an empty array to keep it the same and prevent it from rendering more than we need. 