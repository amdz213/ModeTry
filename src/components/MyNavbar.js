import React from 'react';
import navlogo from '../assetr/navlogo.png';
import emial from '../assetr/maile.png';
import notifaction from '../assetr/notifaction.png';
import user from '../assetr/user.png';
import menu from '../assetr/menu.png';
import search from '../assetr/Search.png';
import { FaPlus } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const MyNavbar = () => {
  const location = useLocation();
  return (
    <div>
    <div className="container-fluid navbottomline" style={{backgroundColor:''}}>
    <div className="container">
    <header>
    
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"> <img src={navlogo} width={130} alt="" /></a>
        <button className="navbar-toggler mt-lg-0 mt-md-3 mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className={`nav-item ${location.pathname === '/' ? 'active-link' : ''}`}>
          <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/contact' ? 'active-link' : ''}`}>
          <Link className="nav-link ps-lg-3" to='/contact'>Contact</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/aboutUs' ? 'active-link' : ''}`}>
          <Link className="nav-link ps-lg-3" to='/aboutUs'>About Us</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/signUp' ? 'active-link' : ''}`}>
          <Link className="nav-link ps-lg-3" to='/signUp'>Sign Up</Link>
        </li>
      </ul>
          <form className="d-lg-flex p-1" role="search">
          <div className="inputgroupsearch  p-1 rounded-2 mt-lg-0 mt-md-3 mt-3 me-3">
          <span classNameName="form-control p-1 font-12 border-0" style={{ backgroundColor: 'transparent' }} id="basic-addon2"><img src={search} width={25} alt="" /></span>
          <input type="text" classNameName="form-control p-1 font-12 w-100"
            style={{ backgroundColor: 'transparent' , border:'none' }} placeholder="Search...
            " aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>
          <ul className='d-lg-flex d-md-flex'>
        <li>
        <a className="me-3" href='#'><img src={emial} width={20} alt="" /></a>
        </li>
        <li>
        <a className="me-3" href='#'><img src={notifaction} width={20} alt="" /></a>
        </li>
        <li>
        <a className="me-3" href='#'><img src={user} width={20} alt="" /></a>
        </li>
        <li>
        <a className="" href='#'><img src={menu} width={20} alt="" /></a>
        </li>
          </ul>
        </form>

        </div>
      </div>
    </nav>
    </header>
    </div>
    </div>
    </div>
  )
}

export default MyNavbar