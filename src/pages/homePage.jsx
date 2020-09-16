import React from 'react';
import { HomePageContainer } from '../containers/homePage.container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ResumeFormContainer } from '../containers/resumeForm.container';
import { NavBar } from '../components/home/navbar.component';

export const HomePage = () => {
    return <>
        <Router>
            <NavBar></NavBar>
            <Route path="/" exact component={HomePageContainer} />
            <Route path="/resume-form" component={ResumeFormContainer} />
        </Router>
    </>
}
