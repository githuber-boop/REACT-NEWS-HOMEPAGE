import { useState } from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isActive , setIsActive] = useState(false)
  
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false)
  }
  

  return (
<header className="navbar">
  <img className="logo" src="src/assets/images/logo.svg" alt="W news logo" />
  <div className={`${isActive  ? 'active' : ''} hamburger ` } onClick={toggleActiveClass} >
    <div className="line" />
    <div className="line" />
    <div className="line" />
  </div>
  <nav className={`${isActive  ? 'active' : ''} links`}>
    <ul>
      <li><Link className="link" to="#">Home</Link></li>
      <li><Link className="link" to="#">New</Link></li>
      <li><Link className="link" to="#">Popular</Link></li>
      <li><Link className="link" to="#">Trending</Link></li>
      <li><Link className="link" to="/categories">Categories</Link></li>
    </ul>
  </nav>
</header>

  );
}

export default Navbar