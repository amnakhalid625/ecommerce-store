import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaShoppingBag, FaSearch } from "react-icons/fa";

const Header = () => {
  const [scroll,setScroll]=useState(false)

  const handleScroll=()=>{
    const offSet=window.scrollY
    if(offSet>200){
      setScroll(true)

    }else{
      setScroll(false)
    }
    console.log(offSet)
  }


  useEffect(()=>{
window.addEventListener('scroll',handleScroll)
  },[])


  return (
    <nav className={`navbar navbar-expand-lg nav_sec1  py-3 shadow-sm ${scroll ? "sticky_nav1":""}`}>
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </Link>

        {/* Navbar Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="d-flex align-items-center gap-3">
          <Link to="/cart" className="text-dark">
            <FaShoppingBag size={20} />
          </Link>
          <Link to="/search" className="text-dark">
            <FaSearch size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
