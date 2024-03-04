// Header.js
import React from 'react';
import './home.module.css';
import logo from '../images/logo-tr.png';

function Header() {
    return (
        <header style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>
            <title>MedSIS IEU</title>
            <img src={logo} alt="IEU logo" height="75" />
        </header>
    );
}

export default Header;
