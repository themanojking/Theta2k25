import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active link indication

function FootNav() {
  return (
    <div className=''>
      <nav className='flex justify-center mt-5'>
        <ul className='flex  font-bold text-xl'>
          <li className='px-2 py-2 rounded-xl'>
            <NavLink
              to="/event"
              className={({ isActive }) =>
                isActive ? 'bg-[#844DA3] text-white px-3 py-2 rounded-xl' : 'text-white'
              }
            >
              ALL
            </NavLink>
          </li>
          <li className='px-3 py-2 rounded-xl'>
            <NavLink
              to="/day1"
              className={({ isActive }) =>
                isActive ? 'bg-[#844DA3] text-white px-3 py-2 rounded-xl' : 'text-white'
              }
            >
              DAY 1
            </NavLink>
          </li>
          <li className='px-3 py-2 rounded-xl'>
            <NavLink
              to="/day2"
              className={({ isActive }) =>
                isActive ? 'bg-[#844DA3] text-white px-3 py-2 rounded-xl' : 'text-white'
              }
            >
              DAY 2
            </NavLink>
          </li>
          <li className='px-3 py-2 rounded-xl'>
            <NavLink
              to="/day3"
              className={({ isActive }) =>
                isActive ? 'bg-[#844DA3] text-white px-3 py-2 rounded-xl' : 'text-white'
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
