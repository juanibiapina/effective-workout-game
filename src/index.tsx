// external dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// internal dependencies
import './index.css';
import App from './App';
import StartWorkoutRoute from './routes/StartWorkoutRoute';
import CurrentWorkoutRoute from './routes/CurrentWorkoutRoute';

// stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';

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
