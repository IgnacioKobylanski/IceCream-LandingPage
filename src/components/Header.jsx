import React from 'react';
import '../styles/Header.css';
import logo from '../imgs/CanvaLogoIceCream.png'

function Header() {
  return (
    <header>
      <nav className='header-nav'>
            <a href="/">Home</a>
            <a href="/flavors">Flavors</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
      </nav>
      <h1>Ice Cream</h1>
      <img src={logo} alt='Logo' className='logo-image' />
    </header>
  );
}

export default Header;
