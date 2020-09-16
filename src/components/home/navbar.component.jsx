import React from 'react';
import './navbar.css';
import { FcElectricity } from "react-icons/fc";
import { Link } from 'react-router-dom';
export const NavBar = () => {
    return <>
        <div className="navbar">
            <div className="name">
                <FcElectricity />
                <Link to="/">Swift</Link>
            </div>
        </div>
    </>
}