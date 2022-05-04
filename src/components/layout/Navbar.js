import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ReadersClub
            <i class='fas fa-book-reader' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item text-decoration-none'>
              <Link to='/' className='nav-links text-decoration-none' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item text-decoration-none'>
              <Link
                to="/gallery/add"
                className='nav-links text-decoration-none'
                onClick={closeMobileMenu}>
                  Add Book
              </Link>
            </li>
            <li className='nav-item text-decoration-none'>
              <Link
                to="/"
                className='nav-links text-decoration-none'
                onClick={closeMobileMenu}>
                All Books
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile text-decoration-none'
                onClick={closeMobileMenu}>
                {/* Sign Up */}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
