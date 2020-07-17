import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export class Home extends React.Component {

    constructor() {
        super();
        this.state = {show: false};
    }

    handleClose() {this.setState({show: false});
    }

    handleShow() {this.setState({show: true});
    }

    render() {

        return(
        <div>
            <div>
                <div className="jumbotron" id="myContainer">
                    <h1>WELCOME TO JUAL.COM.MY!</h1>
                    <h3>One place to sell, One place to buy.</h3>
                    <h3>Everything, secure, and faster!</h3>
                    <Button variant="btn btn-primary btn-lg signup" onClick={() => this.handleShow()}>
                        Sign Up - It's Free
                    </Button>
                </div>
            </div>

            <Modal show={this.state.show} onHide={() => this.handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign up today and Start using JUAL!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email address (Your email is secured!)" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Choose a password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Control type="password" placeholder="Confirm password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.handleClose()}>
                        Sign up
                    </Button>
                    <Button variant="secondary" onClick={() => this.handleClose()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
        );
    }
}