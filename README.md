# DevStack

DevStack is a simple web application where users can explore different technologies and create their own technology stack.

## Live Website

https://assignment5-devstack-jubail.netlify.app/

## Technologies I Used

* React
* TypeScript
* Tailwind CSS
* Vite
* React Icons
* React Toastify
* DaisyUi

## Features

* Users can see different technologies and their details.
* Users can add technologies to their own stack.
* Users can remove technologies from the selected stack.

---

# React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a way to write HTML code inside JavaScript 

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is used to store data inside a component.

### 3. What does the useState hook do, and where did you use it in this project?

`useState` is used to store and update data in a React component.

This my project, I used `useState` to manage the technologies.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` is used to run some code after a component renders.

Need UseEffect Because useEffect is used to handle side effects loading data after the component renders.

### 5. Why does every item in a .map() list need a unique key prop?

React needs a unique `key` to identify each item in a list. It helps React update the list correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition.

In my project, I used it to show an empty stack message.

```tsx
{selected.length === 0 ? (
  // Empty code
) : (
  // Selected Code
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can send data to a child component using props.

A child can send something back to the parent by using a function passed through props.
