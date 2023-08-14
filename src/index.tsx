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
import Game from './components/Game';

// stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';

// determine basename according to environment
const basename = process.env.ENVIRONMENT === 'production' ? '/effective-workout-game' : '/';

// configure router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Game />,
      },
    ],
  },
], {
  basename,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
