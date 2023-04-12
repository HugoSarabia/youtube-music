import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: "/explore",
    element: <div>Explorar</div>,
  },
  {
    path: "/library",
    element: <div>Biblioteca</div>,
  },
  {
      path: "/",
      element: <Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
