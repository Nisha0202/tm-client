import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../FirebaseProbider/FirbaseProvider'

const Navbar = () => {
  const { usern } = useContext(AuthContext);

  return (
    <>
      <div className="navbar bg-base-100 gap-4">
        <div className="navbar-start p-0">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost px-0 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-40"
            >
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/all" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                  All Spots
                </NavLink>
              </li>
              {usern && (
                <>
                  <li>
                    <NavLink to="/list" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                      My List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/addlist" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                      Add Spots
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/all" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                All Spots
              </NavLink>
            </li>
            {usern && (
              <ul className="flex">
                <li>
                  <NavLink to="/list" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    My List
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/addlist" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Add Spots
                  </NavLink>
                </li>
              </ul>
            )}
          </ul>
        </div>
        <div className="flex lg:hidden">
          <a href='/' className="text-md md:text-2xl imprima text-indigo-700 font-bold">TM</a>
        </div>

      </div>
    </>
  );
};

export default Navbar;