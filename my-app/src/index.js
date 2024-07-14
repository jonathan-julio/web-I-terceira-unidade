import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery';
import Login  from './pages/login' 
import Signup  from './pages/signup' 

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home'
import Password from './pages/password';
import Workspace from './pages/workspace';
import CreaterPost from './pages/createrPost';
import Editar from './pages/editPost';
import EditarPerfil from './pages/editarPerfil';
import Personalizar from './pages/personalizar';
import AdminPage from './pages/admin';
import Post from './pages/post';
import ErrorPage from './pages/errorPage';
import Portfolio from './pages/portfolio';
import ResetPassword from './pages/resetPassword';
import NewPortfolio from './pages/newPortfolio';
import Abs from './pages/abc';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>,
    element : <App/>,
    children : [
      {
        path: "/",
        element : <Home/>,
      },
      {
        path: "/signin",
        element : <Login/>,
      },
      {
        path: "/signup",
        element : <Signup/>,
      },
      {
        path: "/reset-password",
        element : <Password/>,
      },
      {
        path: "/workspace",
        element : <Workspace/>,
      },
      {
        path: "/new-post",
        element : <CreaterPost/>,
      },
      {
        path: "/editar-post",
        element : <Editar/>,
      },
      {
        path: "/editar-perfil",
        element : <EditarPerfil/>,
      },
      {
        path: "/personalizar",
        element : <Personalizar/>,
      },
      {
        path: "/admin",
        element : <AdminPage />,
      },
      {
        path : "/abs/:a",
        element : <Abs/>
      },
      {
        path: "/post/:id",
        element : <Post/>,
      },
      {
        path: "/portfolio/:username",
        element : <Portfolio />,
      },
      {
        path : "/reset-password/token=:token",
        element : <ResetPassword/>
      },
      {
        path : "/teste/:a",
        element : <NewPortfolio/>
      }
      /* {
        path: "/post",
        element : <App/>,
        children : [
          {
            path: "/:id",
            element : <Post/>,
          },
        ],
      },
      {
        path: "/portfolio",
        element : <App/>,
        children : [
          {
            path: "/:id",
            element : <Portfolio/>,
          },
        ],
      }, */
    ],
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
