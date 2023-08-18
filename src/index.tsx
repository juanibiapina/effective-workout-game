// external dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// internal dependencies
import App from './App';
import StartWorkoutRoute from './routes/StartWorkoutRoute';
import CurrentWorkoutRoute from './routes/CurrentWorkoutRoute';

// stylesheets
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// configure router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/startWorkout",
        element: <StartWorkoutRoute />,
      },
      {
        path: "/currentWorkout",
        element: <CurrentWorkoutRoute />,
      },
    ],
  },
], {
  basename: document.querySelector('base')?.getAttribute('href') || undefined,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
