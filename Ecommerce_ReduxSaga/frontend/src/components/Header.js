import React from 'react'
import '../styles/header.css'
import {HiShoppingCart} from 'react-icons/hi';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='Header'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to={'/home'} className="navbar-brand" >
                        <HiShoppingCart />    ECOMMERCE-APP</Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* <form className="d-flex" role="search"> */}
                            <input className="form-control me-2 searchInputclassName" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success searchBtn" type="submit">Search</button>

                            <li className="nav-item">
                                <Link to={'/home'} className="nav-link" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/category'} className="nav-link" >Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/tags'} className="nav-link" >Tags</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/register'} className="nav-link" >Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/login'} className="nav-link" >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/cart'} className="nav-link" >Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
