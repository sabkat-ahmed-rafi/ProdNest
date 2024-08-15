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
import Home, { axiosSecure } from './components/Home';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {NextUIProvider} from '@nextui-org/react'


const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const {data} = await axiosSecure.get("/totalProducts")
          return data.totalProductsCount
        }
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
    <QueryClientProvider client={queryClient}>
    <NextUIProvider>
    <Authentication>
    <RouterProvider router={router} />
    </Authentication>
    </NextUIProvider>
    </QueryClientProvider>
  </StrictMode>,
)
