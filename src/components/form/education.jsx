import React from 'react';
import { Button, Form } from 'react-bootstrap';

export const Eductaion = (props) => {
    return <Form className="resume-form">
        <Form.Row>
            <Form.Group controlId="schoolName" >
                <Form.Label>School Name</Form.Label>
                <Form.Control placeholder="eg: harvard university" />
            </Form.Group>

            <Form.Group controlId="schoolCity">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="eg: san franciso" />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group controlId="schoolState">
                <Form.Label>State</Form.Label>
                <Form.Control placeholder="eg: california" />
            </Form.Group>

            <Form.Group controlId="degree">
                <Form.Control as="select" size="lg">
                    <option>Large select</option>
                </Form.Control>
            </Form.Group>
        </Form.Row>

        <Form.Group controlId="degreeField">
            <Form.Label>Field of Study</Form.Label>
            <Form.Control placeholder="eg: Engineering" />
        </Form.Group>

        <Form.Group controlId="gradMonth">
            <Form.Label>Graduation Date</Form.Label>
            <Form.Control placeholder="Enter Month" />
        </Form.Group>

        <Form.Group controlId="gradYear">
            <Form.Label> </Form.Label>
            <Form.Control placeholder="Enter year" />
        </Form.Group>
        <Button variant="outline-success" onClick={props.prevTab}>
            Back
        </Button>
        <Button variant="outline-danger" onClick={props.nextTab}>
            Save & Next
        </Button>
    </Form>
}