import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo-removebg-preview.png'
import { BiSearchAlt } from 'react-icons/bi';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Menu = () => {
  return (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#gpt3">Stationery</a></p>
      <p><a href="#possibility">Gift World</a></p>
      <p><a href="#features">Services</a></p>
      <p><a href="#blog">Contact us</a></p>
    </>
  )
}

const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);

  return (
    <div className='ks__navbar'>
      <div className='ks__navbar-container'>
        <img src={logo} alt="Logo" className='ks__navbar-container__logo' />
        <div className='ks__navbar-container__links'>
          <Menu />
        </div>
      </div>
      <div className='ks__navbar-searchbar'>
        <input type='text' placeholder='Search' />
        <button type='button'><BiSearchAlt size={27} /></button>
      </div>
      <div className='ks__navbar-tooglemenu'>
        {toogleMenu
          ? <RiCloseLine size={27} onClick={() => setToogleMenu(false)} />
          : <RiMenu3Line size={27} onClick={() => setToogleMenu(true)} />
        }
        {toogleMenu && (
          <div className='ks__navbar-tooglemenu_container'>
            <div className='ks__navbar-tooglemenu__links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;