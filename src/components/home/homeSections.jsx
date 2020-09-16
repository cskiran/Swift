import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './homeSections.css'

export const HomeSections = () => {
    const history = useHistory();
    const createResume = () => {
        history.push(`/resume-form`);
    }
    return <>
        <section className="home-sections">
            <div className="site-description">
                <span className="title">Build your Resume for free Now</span>
                <Button variant="danger" onClick={createResume}>Create Your Resume</Button>
            </div>
        </section>
    </>
}