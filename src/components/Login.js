import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export class Login extends React.Component {

    constructor() {
        super();
        this.state = {show: true};
    }

    handleClose() {this.setState({show: false});
    }

    render() {
        return(
            <Modal show={this.state.show} onHide={() => this.handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}