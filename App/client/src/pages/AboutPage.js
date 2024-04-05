import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const AboutPage = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={6} md={4}>
            <Image src="fmplogo.png" alt="logo" fluid />
          </Col>
        </Row>
        <Row className="text-center fs-4">
          Meet Find My Protest, a website designed for Berlin residents who care
          about what's happening in their city and want to get involved in
          protests.
        </Row>
        <Row className="justify-content-center">
          <Image src="people1.jpg" alt="people" fluid />
        </Row>
        <Row>
          We created this platform to make it easy for people to find out about
          upcoming protests in their neighbourhood and join in if they want to.
          Our team includes designers, developers, and data experts who all want
          to use their skills to help our city. Together, we're focused on
          making it easier for everyone to be informed and engaged in local
          activism. Our main goal is to provide a place where you can find
          information about protests happening in Berlin. We also want to give
          you an idea of how big the protests might be, so you can decide if you
          want to participate. Find My Protest is here to connect Berliners with
          the causes they care about, making it simple for people to have their
          voices heard and make a difference in our community. Join us as we
          work towards a more involved, informed, and united Berlin, where
          everyone has the opportunity to contribute to positive change.
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
