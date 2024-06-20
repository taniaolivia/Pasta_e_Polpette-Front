import  { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src="../images/logo.svg" alt="Site Logo" draggable={false}/>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`navigation ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#concept">Concept</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#restaurant">Restaurant</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className='command'><div className={`order-button ${menuOpen ? 'active' : ''}`}>
        <button>Commander</button>
      </div></li>
        </ul>
      </nav>
      
    </div>
  );
}

export default Header;
