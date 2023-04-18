import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/home';
import Login from './auth/login';

const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
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
      element: code? <Home code={code}/> : <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
