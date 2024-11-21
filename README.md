# Code Challenge:

## Introduction:
Welcome to the React Developer Technical Assessment! This test is designed to evaluate your proficiency in building React applications using a modern stack, including Redux Toolkit, Vite, React Router and TurboRepo. We have prepared a set of tasks and questions that cover a spectrum of skills, ranging from fundamental concepts to more advanced topics.

### Tasks: 
Complete the provided tasks to demonstrate your ability to work with React, Redux Toolkit, Vite, and TurboRepo. Adjust the complexity based on your experience level.

### Questions:
Answer the questions to showcase your understanding of the underlying concepts and best practices associated with the technologies in use.

### Time Limit:
This assessment is designed to take approximately 1 hour to complete. Please manage your time effectively.

### Setup the reporsitory:
Make sure you have pnpm installed<br>
Install dependencies with `pnpm`<br>
Run the project with `turbo run dev` or `pnpm run dev`

### prerequisite:
Start the test by Forking this repository, and complete the following tasks:<br>

## Task 1:
Assignment: Use the `api` found in `App.tsx` to make a request and fetch a list of all Pokémon.<br>
Question 1: How did you manage to fetch the list and what tool did you use?<br><br>
Answer 1: I utilized JavaScript's built-in `fetch` function to send an HTTP request to the provided API endpoint, enabling communication between the client and server. This allowed me to retrieve or send data asynchronously, ensuring smooth and efficient interaction with the backend services as part of the web application.
<br>
Question 2: What steps would you take to future improve this?<br>
Answer 2: In future or further implementations, I would prefer using `axios` as the primary HTTP client for making API requests due to its simplicity, ease of use, and support for features like request/response interception, automatic transformation of JSON data, and handling timeouts, which can greatly streamline the development process and improve the overall efficiency of handling HTTP requests in my applications

commit the code as `task-1`<br>

## Task 2:
Assignment: Parse the list to the `<List />` component and ajust the component to show a list of all pokémon names
Feel free to create more components in the `/ui` package or in the app if needed 

commit the code as `task-2`<br>

## Task 3:
Assignment: Style the `<List />` component to display as a grid.

commit the code as `task-3`<br>

## Task 4:
Assignment: Introduce `redux-toolkit` and store the list of pokémon in the redux store.<br>
Question 4: What makes the `createSlice` in redux-toolkit difference then A Reducer in redux?<br>
Answer 4: `createSlice` offers a more concise and less error-prone approach to handling state in Redux compared to the traditional Redux setup.<br>
Question 5: Describe the benefits of immutable code.<br>
Answer 5: Immutable code promotes stability, readability, and maintainability, particularly in complex applications or systems requiring concurrency. It simplifies reasoning about the code and ensures a more reliable and bug-free environment.<br>

commit the code as `task-4`<br>

## Task 5:
Assignment: Create button for each pokémon where an Action will be dispatched to remove the pokémon from the store 
Question 6: How can you verify the action has been dispatched?
Answer 6: Below are the methods to verify if the action has been dispatched in redux:-<br>
1. Using Redux DevTools<br>
2. Using console.log() in Your Action Creators or Reducers<br>
3. Using Jest and Redux Mocks for Testing

## Task 6:
Question 7: explain the use of `useEffect` hook in React
Answer 7: The useEffect hook in React is used to perform side effects in function components. It is a powerful and commonly used hook to handle operations such as:<br>
1. Fetching data from an API or server<br>
2. Setting up subscriptions or event listeners<br>
3. Modifying the DOM directly<br>
4. Cleaning up resources (like timers or subscriptions) when the component unmounts or re-renders<br>

Question 8: What is A High Order Component?
Answer 8: A Higher-Order Component (HOC) is a pattern in React used to reuse component logic. It is a function that takes a component as an argument and returns a new component with enhanced behavior or additional functionality. HOCs allow you to add cross-cutting concerns (like authentication, state management, or styling) to your components without modifying the original component directly.

Question 9: What use cases would a HOC be usefull?
Answer 9: A Higher-Order Component (HOC) is useful in the following use cases:
1. Authentication/Authorization: Redirecting users who are not logged in or do not have proper permissions.
2. Data Fetching: Injecting data (e.g., from APIs) into components.
3. Conditional Rendering: Displaying different UI based on conditions (e.g., loading state).
4. Enhancing Component Props: Modifying or adding props to a component.
5. State Management: Adding global state or context logic without modifying the component.
6. Logging or Analytics: Tracking component lifecycle or user interactions for analytics purposes.
7. Styling: Applying consistent styles or themes across multiple components.

Question 10: What does it indicate when a component is prefixed with `use` and `with`
Answer 10:
1. `use` prefix: Typically indicates a custom hook. These are functions that use React’s built-in hooks to encapsulate reusable logic, such as useState, useEffect, etc. Custom hooks follow the use prefix convention to signal that they are hooks.

2. `with` prefix: Typically indicates a Higher-Order Component (HOC). It suggests that the component is being enhanced or wrapped by another component to add functionality or behavior (e.g., withRouter, withAuth).

Question 11: What is a Generic type in typescript?
Answer 11: A generic type in TypeScript allows you to create reusable components, functions, or classes that can work with any data type, while still maintaining type safety. Instead of specifying a concrete type (like string or number), you use a placeholder type, often referred to as a type parameter, that can be substituted with any specific type when the generic is used.

Question 12: Whats the difference between a controlled and uncontrolled input in React?
Answer 12: 
1. Controlled Input: The form data (value) is managed by React state. The input's value is bound to a state variable, and any changes to the input are handled by a state update function.
2. Uncontrolled Input: The form data is handled by the DOM itself, not React state. You can access the value using a ref but don’t need to update the state manually on every change.





