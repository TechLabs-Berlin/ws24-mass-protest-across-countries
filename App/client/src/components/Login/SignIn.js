import { useState } from 'react';
import { Button, Form, Modal, InputGroup, Col, Row, Nav} from 'react-bootstrap';
import SignUp from "./SignUp";


function SignIn({ onSignIn }) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false); // State to track button press
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setButtonPressed(true); // Set button press state to true
    setIsLoggedIn(true); // Set login status to true
    onSignIn(); // Call the onSignIn callback
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login status to false
    handleClose(); // Close the modal
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Nav.Link onClick={handleLogout}>LOGOUT</Nav.Link>
          <Nav.Link>Welcome!</Nav.Link>
        </>
      ) : (
        <Button variant="transparent" onClick={handleShow}>
          {buttonPressed ? "Welcome!" : "LOGIN"}
        </Button>
      )}

      <Modal show={show} onHide={handleClose} style={{ fontFamily: 'Playfair Display, serif'}}>
        <Modal.Header closeButton className="my-2">
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="my-0">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Form.Group md="4" controlId="validationCustomUsername">
                <Form.Label>Username:</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                <Form.Control.Feedback type="invalid">
                  Please enter your username.
                </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group md="6" controlId="validationCustom03">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter password" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid password.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mt-4">
              <Form.Check
                custom-control-input
                label="Remember me"
                className='mb-4'
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button type="submit" variant="dark" onClick={handleClose}>Sign in</Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Form.Group className="my-3 forgot-password text-right">
            <Nav>
              <SignUp />
            </Nav>
          </Form.Group>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignIn;
