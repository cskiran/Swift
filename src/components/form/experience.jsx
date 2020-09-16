import React from 'react';
import { Button, Form } from 'react-bootstrap';

export const Experience = (props) => {
    return <Form className="resume-form">
        <Form.Row>
            <Form.Group controlId="formGridEmployer" >
                <Form.Label>Employer</Form.Label>
                <Form.Control placeholder="eg: IBM" />
            </Form.Group>

            <Form.Group controlId="formGridJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control placeholder="eg: Engineer" />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group controlId="formGridStartDateMonth">
                <Form.Label>StartDate</Form.Label>
                <Form.Control placeholder="Enter month" />
            </Form.Group>

            <Form.Group controlId="formGridStartyear">
                <Form.Label> </Form.Label>
                <Form.Control placeholder="Enter year" />
            </Form.Group>

            <Form.Group controlId="formGridEndDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control placeholder="Enter month" />
            </Form.Group>
            <Form.Group controlId="formGridEndYear">
                <Form.Label> </Form.Label>
                <Form.Control placeholder="Enter year" />
            </Form.Group>
        </Form.Row>
        <Form.Group controlId="jobDexription">
            <Form.Label>Job Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="outline-success" onClick={props.prevTab}>
           Back
</Button>
        <Button variant="outline-danger" onClick={props.nextTab}>
            Save & Next
</Button>
    </Form>
}