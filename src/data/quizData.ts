export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const quizData: Question[] = [
  {
    id: 11,
    question: "What is the main purpose of the useEffect hook in React?",
    options: [
      "To directly manipulate the DOM",
      "To perform side effects like data fetching or subscriptions",
      "To create new state variables",
      "To handle routing"
    ],
    correctAnswer: 1,
    explanation:
      "useEffect allows you to perform side effects in function components such as API calls, event listeners, and DOM updates."
  },
  {
    id: 12,
    question: "Which of the following best describes a React component?",
    options: [
      "A reusable piece of UI that can accept inputs and manage its own logic",
      "A built-in browser API for UI creation",
      "A standalone HTML element",
      "A CSS module for styling"
    ],
    correctAnswer: 0,
    explanation:
      "A React component is a reusable, independent piece of UI that can accept props and maintain internal state."
  },
  {
    id: 13,
    question: "What is the difference between state and props in React?",
    options: [
      "State is mutable; props are immutable",
      "Both are immutable",
      "Props can change dynamically; state cannot",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation:
      "State is managed within a component and can change over time, while props are read-only data passed from parent to child components."
  },
  {
    id: 14,
    question: "What is the purpose of the useContext hook in React?",
    options: [
      "To share data across components without using props",
      "To manage local state",
      "To handle side effects",
      "To optimize rendering performance"
    ],
    correctAnswer: 0,
    explanation:
      "useContext provides a way to share values like themes or authentication data across the component tree without prop drilling."
  },
  {
    id: 15,
    question: "What is a higher-order component (HOC)?",
    options: [
      "A component that manages routes",
      "A function that takes a component and returns a new component",
      "A lifecycle method for class components",
      "A way to manage Redux state"
    ],
    correctAnswer: 1,
    explanation:
      "A higher-order component (HOC) is a function that takes a component as an argument and returns a new component with additional functionality."
  },
  {
    id: 16,
    question: "Why is it important to use keys when rendering lists in React?",
    options: [
      "To speed up API calls",
      "To help React efficiently identify and update elements that change",
      "To style each item differently",
      "To bind event handlers automatically"
    ],
    correctAnswer: 1,
    explanation:
      "Keys help React identify which items have changed, improving rendering performance and reducing unnecessary re-renders."
  },
  {
    id: 17,
    question: "What happens when you call setState() in a React component?",
    options: [
      "The state updates immediately",
      "The component re-renders with the new state value",
      "It reloads the browser page",
      "The old state is deleted permanently"
    ],
    correctAnswer: 1,
    explanation:
      "Calling setState() schedules an update, causing React to re-render the component with the new state."
  },
  {
    id: 18,
    question: "What is the purpose of React.Fragment?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To manage side effects",
      "To wrap components with styles",
      "To render fallback UIs"
    ],
    correctAnswer: 0,
    explanation:
      "React.Fragment lets you group multiple elements together without introducing unnecessary parent elements in the DOM."
  },
  {
    id: 19,
    question: "Which hook can be used as an alternative to Redux for managing global state?",
    options: ["useEffect", "useContext with useReducer", "useMemo", "useRef"],
    correctAnswer: 1,
    explanation:
      "Combining useContext and useReducer provides a simple way to manage global state without external libraries like Redux."
  },
  {
    id: 20,
    question: "What is the role of ReactDOM in a React project?",
    options: [
      "To create class components",
      "To manage CSS styling",
      "To render React components into the DOM",
      "To define routes"
    ],
    correctAnswer: 2,
    explanation:
      "ReactDOM is responsible for rendering React components into the actual browser DOM."
  },
  {
    id: 21,
    question: "What does the useRef hook do in React?",
    options: [
      "Manages global state",
      "Provides a way to access DOM elements directly",
      "Triggers re-render when value changes",
      "Handles form submissions"
    ],
    correctAnswer: 1,
    explanation:
      "useRef returns a mutable ref object used to access DOM elements or persist values between renders."
  },
  {
    id: 22,
    question: "What is the purpose of memoization in React?",
    options: [
      "To delay rendering",
      "To prevent unnecessary re-renders by caching values or components",
      "To manage local state",
      "To modify props dynamically"
    ],
    correctAnswer: 1,
    explanation:
      "Memoization (e.g., React.memo or useMemo) stores computed values or components to avoid recalculating during re-renders."
  },
  {
    id: 23,
    question: "Which lifecycle method is replaced by useEffect in functional components?",
    options: [
      "componentDidMount, componentDidUpdate, and componentWillUnmount",
      "shouldComponentUpdate",
      "getDerivedStateFromProps",
      "componentDidCatch"
    ],
    correctAnswer: 0,
    explanation:
      "useEffect combines the behavior of componentDidMount, componentDidUpdate, and componentWillUnmount from class components."
  },
  {
    id: 24,
    question: "What is prop drilling in React?",
    options: [
      "Passing props through multiple nested components unnecessarily",
      "Using hooks incorrectly",
      "Accessing DOM elements directly",
      "Managing global state using Redux"
    ],
    correctAnswer: 0,
    explanation:
      "Prop drilling occurs when props are passed down through multiple levels of components that do not need them directly."
  },
  {
    id: 25,
    question: "What does lazy loading in React help with?",
    options: [
      "Improving security",
      "Reducing initial load time by loading components on demand",
      "Adding animations",
      "Handling errors automatically"
    ],
    correctAnswer: 1,
    explanation:
      "Lazy loading defers loading components until they are needed, improving performance and reducing bundle size."
  },
  {
    id: 26,
    question: "What is the purpose of React.StrictMode?",
    options: [
      "To highlight potential problems in an application during development",
      "To enable strict variable typing",
      "To optimize production builds",
      "To manage asynchronous state"
    ],
    correctAnswer: 0,
    explanation:
      "React.StrictMode activates additional checks and warnings during development to identify potential issues early."
  },
  {
    id: 27,
    question: "What does the React.memo() function do?",
    options: [
      "Converts a class component to a function component",
      "Memoizes a functional component to prevent unnecessary re-renders",
      "Creates a global state container",
      "Caches API data"
    ],
    correctAnswer: 1,
    explanation:
      "React.memo() wraps a component and memoizes its output to avoid re-rendering when props haven’t changed."
  },
  {
    id: 28,
    question: "What is the purpose of useCallback in React?",
    options: [
      "To memoize callback functions and prevent unnecessary re-creations",
      "To fetch data asynchronously",
      "To update component state",
      "To manage routing"
    ],
    correctAnswer: 0,
    explanation:
      "useCallback memoizes a callback function so that it’s not redefined on every render, improving performance."
  },
  {
    id: 29,
    question: "What is React Reconciliation?",
    options: [
      "The process React uses to compare Virtual DOM trees and apply minimal changes to the real DOM",
      "The method of combining multiple components into one",
      "An algorithm for sorting elements",
      "A React Router feature"
    ],
    correctAnswer: 0,
    explanation:
      "Reconciliation is React’s internal process that efficiently updates the real DOM based on changes in the Virtual DOM."
  },
  {
    id: 30,
    question: "Which method can be used to handle errors in React components?",
    options: [
      "componentDidCatch or Error Boundaries",
      "useErrorHandler",
      "useEffect",
      "componentWillRender"
    ],
    correctAnswer: 0,
    explanation:
      "Error Boundaries or componentDidCatch in class components handle runtime errors gracefully in React applications."
  }
];

export const QUIZ_TIME_LIMIT = 600; // 10 minutes in seconds
