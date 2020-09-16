import React from 'react';
import { NavBar } from '../components/home/navbar.component';
import './css/homePage.css';
import { HomeSections } from '../components/home/homeSections';

export const HomePageContainer = () => {
    return <>
        <div className="sections">
            <HomeSections />
        </div>
    </>
}