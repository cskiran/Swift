import React, { useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { Eductaion } from '../components/form/education';
import { Experience } from '../components/form/experience';
import { PersonalInfo } from '../components/form/personalInfo';
import { Skills } from '../components/form/skills';
import './css/resumeFormContainer.css';

export const ResumeFormContainer = () => {
    const [currentTab, setTab] = useState(1);
    const nextTab = () => {
        setTab(prev => prev = prev + 1)
    }
    const prevTab = () => {
        setTab(prev => prev = prev - 1)
    }
    const selectTab = (k) => {
        setTab(parseInt(k));
    }
    return <>
        <div className="form-container">
            <Tab.Container id="left-tabs-example" activeKey={currentTab} onSelect={selectTab}>
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey={1}>Personal Information</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={2}>Experience</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={3}>Education</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={4}>Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={5}>Summary</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={7}>
                        <Tab.Content>
                            <Tab.Pane eventKey={1}>
                                <PersonalInfo nextTab={nextTab} />
                            </Tab.Pane>
                            <Tab.Pane eventKey={2}>
                                <Experience nextTab={nextTab} prevTab={prevTab} />
                            </Tab.Pane>
                            <Tab.Pane eventKey={3}>
                                <Eductaion nextTab={nextTab} prevTab={prevTab} />
                            </Tab.Pane>
                            <Tab.Pane eventKey={4}>
                                <Skills nextTab={nextTab} prevTab={prevTab} />
                            </Tab.Pane>
                            <Tab.Pane eventKey={5}>
                                <p>asdasdasdvwefwef</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col sm={3}>
                        preview
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    </>
}