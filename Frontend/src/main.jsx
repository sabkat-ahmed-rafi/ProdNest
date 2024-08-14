import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Register from './Authentication/Register/Register';
import Authentication from './Authentication/Authentication';
import Login from './Authentication/Login/Login';
import Home from './components/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }
    ]
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
    <RouterProvider router={router} />
    </Authentication>
  </StrictMode>,
)
