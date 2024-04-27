import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './root/Root';
import Home from './pages/Home';
import ErrorPage from './components/ErrorPage';
import CardDetails from './components/CardDetails';
import Login from './pages/Login'
import SignUp from './pages/Signup';
import FirbaseProvider from './FirebaseProbider/FirbaseProvider';
import UpdateData from './pages/UpdateData';
import UserProfile from './pages/UserProfile'
import Clients from './pages/Clients'
import AddList from './pages/AddList';
import MyList from './pages/MyList';
import All from './pages/All';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <CardDetails />,
        loader: () => fetch('../spots.json')
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    
      {
        path: "/update",
        element: <UpdateData/>,
      },
      {
        path: "/user",
        element: <UserProfile/>,
      },
      {
        path: "/list",
        element: <MyList/>,
      },
      {
        path: "/addlist",
        element: <AddList/>,
      },
      {
        path: "/all",
        element: <All/>,
      },
      {
        path: "/clients",
        element: <Clients/>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirbaseProvider>
      <RouterProvider router={router} />
    </FirbaseProvider>
  </React.StrictMode>,
)
