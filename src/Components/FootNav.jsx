import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active link indication

function FootNav() {
  return (
    <div className=''>
      <nav className='flex justify-center mt-5'>
        <ul className='flex gap-5 font-bold text-xl'>
          <li className='px-3 py-2 rounded-xl'>
            <NavLink
              to="/event"
              className={({ isActive }) =>
                isActive ? 'bg-blue-500 text-white px-3 py-2 rounded-xl' : 'text-black'
              }
            >
              ALL
            </NavLink>
          </li>
          <li className='px-3 py-2 rounded-xl'>
            <NavLink
              to="/day1"
              className={({ isActive }) =>
                isActive ? 'bg-blue-500 text-white px-3 py-2 rounded-xl' : 'text-black'
              }
            >
              DAY 1
            </NavLink>
          </li>
          <li className='px-3 py-2 rounded-xl'>
            <NavLink
              to="/day2"
              className={({ isActive }) =>
                isActive ? 'bg-blue-500 text-white px-3 py-2 rounded-xl' : 'text-black'
              }
            >
              DAY 2
            </NavLink>
          </li>
          <li className='px-3 py-2 rounded-xl'>
            <NavLink
              to="/day3"
              className={({ isActive }) =>
                isActive ? 'bg-blue-500 text-white px-3 py-2 rounded-xl' : 'text-black'
              }
            >
              DAY 3
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default FootNav;
