import React, { useState } from 'react';
import { Button, Form, Modal, InputGroup, Col, Row, Nav} from 'react-bootstrap';

function SignUp() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleSignUpClick = () => {
    setShow(false); // Close the SignUp modal when switching to SignIn
  };

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        New user | Forgot password?
      </Button>

      <Modal show={show} onHide={handleClose} style={{ fontFamily: 'Playfair Display, serif'}}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              </Row>
              <Row className="mb-3">
              <Form.Group md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group md="6" controlId="validationCustom03">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                Please provide a valid password.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to our terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
              <Form.Text>We do not share your personal information!</Form.Text>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button type="submit" variant="primary" size="lg" onClick={handleSignUpClick}>Register</Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Form.Group className="mb-3 forgot-password text-right">
            <Button variant="outline-secondary" onClick={handleSignUpClick}>
              Already registered?
            </Button>
          </Form.Group>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp;
