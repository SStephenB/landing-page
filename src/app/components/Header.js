'use client'
import React from 'react';
import Logo from "../images/logo.svg";

function Header() {
    return (
        <header className='header'>
            <img src={Logo} alt="Logo"></img>
            <nav className='header-nav'>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#solutions">Solutions</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#docs">Docs</a></li>
                    <li><a href="#templates">Templates</a></li>
                    <li><a href="#community">Community</a></li>
                </ul>
            </nav>
            <div className='header-btns'>
                <button className='sign-in-btn'>Sign In</button>
                <button className='buttons'>Try Free</button>
            </div>
            <div>

            </div>
        </header>
    );
}

export default Header;