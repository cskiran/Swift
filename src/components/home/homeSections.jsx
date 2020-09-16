import React from 'react';
import { Button } from 'react-bootstrap';
import './homeSections.css'
export const HomeSections = () => {
    return <>
        <section className="home-sections">
            <div className="site-description">
                <span className="title">Build your Resume for free Now</span>
                <Button variant="danger">Create Your Resume</Button> 
            </div>
        </section>
    </>
}