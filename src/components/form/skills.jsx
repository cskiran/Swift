import React from 'react';
import { Button, Form } from 'react-bootstrap';

export const Skills = (props) => {
    return <Form>
        <Form.Group controlId="Skills">
            <Form.Label>Skill</Form.Label>
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