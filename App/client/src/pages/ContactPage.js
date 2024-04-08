import React from "react";
import { Container, Nav, Row, Col, Image } from "react-bootstrap";
import '../index.css';

const ContactPage = () => {
  return (
    <div>
      <Container fluid className="justify-content-center background pb-5 pt-0 me-auto">
      <Row className="justify-content-center">
          <Col xs={4} md={2} lg={3}>
            <Image src="fmplogo.png" alt="logo" fluid />
          </Col>
      </Row>
        <Row>
          <Col className="text-center text-white fs-2 p-5 mt-2 mx-5 bg-dark border rounded">
          Find My Protest Contact
          </Col>
        </Row>
        <Row>
          <Col className="p-5 m-5 text-white bg-dark border rounded">
            At Lorem Ipsum, we value your feedback and inquiries.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti tempore adipisci inventore! 
            Iusto ipsum maxime et qui, aspernatur explicabo blanditiis, ab iure sit placeat vel repudiandae!
            Our team is always ready to assist you with any questions or concerns you may have regarding our placeholder text services. 
            Please don't hesitate to reach out to us using any of the following contact methods: developerbenx@gmail.com
          </Col>
          <Col className="p-5 m-5 text-white bg-dark border rounded">
            Please feel free to contact us. 
            Write a short email if you have questions or feedback or if something didn’t go well. 
            Simply choose one of the following options and we’re doing our best to respond as soon as possible.Laudantium corrupti pariatur magni!
            We’re always happy to help you. If you want to have our magazines for your coffee shop, restaurant, coworking space etc. 
            check out the details for our business customers (B2B) — we speak English, French, Spanish, Korean and German.
          </Col>
        </Row>
        <Row className="pt-3 mt-2 mx-5 text-center text-white bg-dark border rounded">
        <Col>
          <Nav.Link href="https://facebook.com/loremipsumgenerator">Facebook</Nav.Link>
        </Col>
        <Col className="mb-4">
          <Nav.Link href="https://twitter.com/loremipsumtext">Twitter</Nav.Link>
        </Col>
        <Col>
          <Nav.Link href="https://instagram.com/loremipsumdolorsitamet">Instagram</Nav.Link>
        </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
