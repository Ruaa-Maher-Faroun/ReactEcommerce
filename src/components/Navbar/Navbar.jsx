import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = ()=> {
    return (
        <nav className="navbar p-4 navbar-expand-lg bg-body-tertiary
        ">
  <div className="container d-flex justify-content-between">
    <div className="title">
        <Link className="navbar-brand" to="/">Shop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="links">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products/categories">Category</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>
    
      </ul>
      
    </div>
    </div>

    <div className="nav-actions d-flex align-items-center">
        <div className="form  me-5 col-10">
            <form className="d-flex align-items-center px-3 py-2 rounded search-form" role="search">
                <input className="form-control me-2 search-nav  p-0" type="search" placeholder="What are you looking for?" aria-label="Search" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </form>
        </div>
        <div className="actions">
            <ul className='d-flex  '>
                <li><a href="wishlist"  className="text-dark me-4 fs-5" ><FontAwesomeIcon icon={faHeart} /></a></li>
                <li><a href="cart"  className="text-dark fs-5" ><FontAwesomeIcon icon={faCartShopping} /></a></li>
            </ul>
        </div>
      </div>
  </div>
</nav>
  )
}

export default Navbar;
