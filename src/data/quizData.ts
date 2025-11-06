export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const quizData: Question[] = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database management system",
      "A CSS framework"
    ],
    correctAnswer: 0,
    explanation: "React is a JavaScript library developed by Facebook for building user interfaces, especially for single-page applications."
  },
  {
    id: 2,
    question: "Which hook is used to manage state in functional components?",
    options: [
      "useEffect",
      "useState",
      "useContext",
      "useReducer"
    ],
    correctAnswer: 1,
    explanation: "useState is the primary hook for managing local state in React functional components."
  },
  {
    id: 3,
    question: "What is JSX?",
    options: [
      "A new version of JavaScript",
      "JavaScript XML - a syntax extension for JavaScript",
      "A testing framework",
      "A state management library"
    ],
    correctAnswer: 1,
    explanation: "JSX stands for JavaScript XML. It allows you to write HTML-like code in your JavaScript files."
  },
  {
    id: 4,
    question: "What does the useEffect hook do?",
    options: [
      "Manages component state",
      "Handles side effects in functional components",
      "Creates context for components",
      "Optimizes component rendering"
    ],
    correctAnswer: 1,
    explanation: "useEffect is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM."
  },
  {
    id: 5,
    question: "What is the Virtual DOM?",
    options: [
      "A copy of the real DOM kept in memory",
      "A new browser API",
      "A testing tool",
      "A CSS preprocessor"
    ],
    correctAnswer: 0,
    explanation: "The Virtual DOM is a lightweight copy of the actual DOM kept in memory, which React uses to optimize updates and improve performance."
  },
  {
    id: 6,
    question: "What is the purpose of React Router?",
    options: [
      "To manage component state",
      "To handle navigation and routing in React applications",
      "To optimize performance",
      "To manage API calls"
    ],
    correctAnswer: 1,
    explanation: "React Router is a standard library for routing in React applications, enabling navigation between different components and views."
  },
  {
    id: 7,
    question: "What are props in React?",
    options: [
      "A way to style components",
      "Properties passed from parent to child components",
      "A type of hook",
      "A testing utility"
    ],
    correctAnswer: 1,
    explanation: "Props (properties) are arguments passed into React components, allowing data to flow from parent to child components."
  },
  {
    id: 8,
    question: "What is the key prop used for in React lists?",
    options: [
      "To style list items",
      "To help React identify which items have changed",
      "To sort the list",
      "To add animations"
    ],
    correctAnswer: 1,
    explanation: "The key prop helps React identify which items have changed, been added, or removed, optimizing the rendering process."
  },
  {
    id: 9,
    question: "What does npm stand for?",
    options: [
      "Node Package Manager",
      "New Programming Method",
      "Network Protocol Module",
      "Node Project Maker"
    ],
    correctAnswer: 0,
    explanation: "npm stands for Node Package Manager, which is the default package manager for Node.js and JavaScript."
  },
  {
    id: 10,
    question: "What is the purpose of the map() function in React?",
    options: [
      "To create a navigation map",
      "To render lists of data dynamically",
      "To map API endpoints",
      "To create object mappings"
    ],
    correctAnswer: 1,
    explanation: "The map() function is commonly used in React to iterate over arrays and render lists of components dynamically."
  }
];

export const QUIZ_TIME_LIMIT = 600; // 10 minutes in seconds
