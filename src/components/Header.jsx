import React, { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../FirebaseProbider/FirbaseProvider'
export default function () {
const { logOut, usern } = useContext(AuthContext);
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 1000); 
}, [usern]);
  return (
    <>
      <div className="navbar bg-base-100 px-4 lg:px-0 py-6 flex justify-between">
        <div className="md:navbar-start">
          <a href='/' className="text-sm md:text-xl imprima text-indigo-700 font-bold">TM</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to='/' className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</NavLink></li>
            <li><NavLink to='/all' className={({ isActive }) => (isActive ? "link-active" : "link")}>All Spots</NavLink></li>
          
            {usern && <ul className='flex'>
              <li><NavLink to='/list' className={({ isActive }) => (isActive ? "link-active" : "link")}>My List</NavLink> </li>
              <li><NavLink to='/addlist' className={({ isActive }) => (isActive ? "link-active" : "link")}>Add Spots</NavLink> </li>
              
              </ul>
            }
          </ul>
        </div>
       {usern ? (
 isLoading ? (
    <div>Loading user data...</div>
  ) : (
    <div className="md:navbar-end">
      <ul className="menu menu-horizontal px-1 md:text-sm text-xs">
        <li><NavLink to='/update' className={({ isActive }) => (isActive ? "link-active" : "link")}>Update Profile</NavLink></li>
      </ul>
      <div className="avatar border-2">
        <NavLink to='/user' className="w-8 rounded">
          <img className='object-contain' src={usern.photoURL} alt="user" title={usern.displayName} />
        </NavLink>
      </div>
      <NavLink to='' onClick={logOut} className="ml-2 text-sm md:text-base px-4 py-2 font-bold btn-ghost text-indigo-700 rounded-md">Log Out</NavLink>
    </div>
  )
) : (
  <div className="navbar-end flex">
    <NavLink to='/login' className="text-sm md:text-base px-4 py-2 font-bold btn-ghost text-indigo-700 rounded-md ">Log In</NavLink>
    <NavLink to='/signup' className="text-sm md:text-base px-4 py-2 font-bold btn-ghost text-indigo-700 rounded-md ">Register</NavLink>
  </div>
)}
 </div>
    </>
  )
}
