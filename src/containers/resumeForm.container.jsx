import React, { useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { Experience } from '../components/form/experience';
import { PersonalInfo } from '../components/form/personalInfo';
import './css/resumeFormContainer.css';

export const ResumeFormContainer = () => {
    const [currentTab, setTab] = useState(1);
    const nextTab = () => {
        setTab(prev => prev += prev)
    }
    const prevTab = () => {
        setTab(prev => prev = prev - 1)
    }
    return <>
        <div className="form-container">
            <Tab.Container id="left-tabs-example" defaultActiveKey={1} activeKey={currentTab} onSelect={(k) => setTab(k)}>
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
                                <p>asdasdasdvwefwef</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey={4}>
                                <p>asdasdasdvwefwef</p>
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