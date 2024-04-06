import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

function Banner() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={6} md={4}>
          <Image src="fmplogo.png" alt="logo" fluid />
        </Col>
        <Col lg="10" xl="8">
          <figure className="mb-0 text-center">
            <p>
              <span className="text-danger fs-4">
                Meet Find My Protest, a website designed for Berlin residents
                who care about what's happening in their city and want to get
                involved in protests.
              </span>
            </p>
          </figure>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
