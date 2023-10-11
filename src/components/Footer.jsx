import React from 'react';
import '../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Ice Cream Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
