import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-dark' data-bs-theme='dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink to='/' exact className='nav-link'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/about' className='nav-link'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/contact' exact className='nav-link'>
                  Contact
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/playground' exact className='nav-link'>
                  Playground
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/news/latest' exact className='nav-link'>
                  Latest News
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/news/world' exact className='nav-link'>
                  World News
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
