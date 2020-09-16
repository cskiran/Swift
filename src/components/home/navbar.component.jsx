import React from 'react';
import './navbar.css';
import { FcElectricity } from "react-icons/fc";
export const NavBar = () => {
    return <>
        <div className="navbar">
            <div className="name">
                <FcElectricity />
                Swift
            </div>
        </div>
    </>
}