import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './form.css'
export const PersonalInfo = (props) => {

    return <Form className="resume-form">
        <Form.Row>
            <Form.Group controlId="formGridFName" >
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="Enter First Name" />
            </Form.Group>

            <Form.Group controlId="formGridLName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Enter Last Name" />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="Number" placeholder="Enter Phone Number" />
            </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
            <Form.Group controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
            </Form.Group>
        </Form.Row>
        <Button variant="outline-danger" onClick={props.nextTab}>
            Save & Next
    </Button>
    </Form>
}