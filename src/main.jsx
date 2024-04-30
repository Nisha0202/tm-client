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
import Login from './pages/Login'
import SignUp from './pages/Signup';
import FirbaseProvider from './FirebaseProbider/FirbaseProvider';
import UpdateData from './pages/UpdateData';
import UserProfile from './pages/UserProfile'
import AddList from './pages/AddList';
import MyList from './pages/MyList';
import All from './pages/All';
import Spotdetails from './components/Spotdetails';
import CountrySpots from './pages/CountrySpots';
import UpdatedSpot from './pages/UpdateSpot';
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
        element: <Spotdetails />, 
        loader: () => fetch('https://tm-server-psi.vercel.app/touristspots')
      
    },
    {
      path: "/countryspot",
      element: <CountrySpots />, 
      loader: () => fetch('https://tm-server-psi.vercel.app/touristspots')
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
        loader: () => fetch('https://tm-server-psi.vercel.app/touristspots')
      },
      {
        path: "/addlist",
        element: <AddList/>,
      },
      {
        path: "/all",
        element: <All/>,
        loader: () => fetch('https://tm-server-psi.vercel.app/touristspots')
      },
      {
        path: "/updatespots/:id",
        element: <UpdatedSpot/>,
        loader: ({params}) => fetch(`https://tm-server-psi.vercel.app/touristspots/${params.id}`)
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
