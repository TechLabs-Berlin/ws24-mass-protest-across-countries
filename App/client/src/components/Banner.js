import '../index.css';
import { Container, Carousel, Col, Row, Image, Button } from "react-bootstrap";;

function Banner() {
  return (
    <Container fluid className="position-relative rounded">
      {/* Logo */}
      <Col xs={6} md={4} lg={3}>
        <Image src="fmplogo.png" alt="logo" className="logo" fluid />
      </Col>
      {/* Carousel */}
      <Carousel className="carousel rounded">
        <Carousel.Item interval={3000}>
        <div
            className="d-block w-100 carousel-image"
            style={{ backgroundImage: "url('banner6.jpg')" }}
          ></div>
        <Carousel.Caption>
             <div className="text-white bg-dark border rounded py-2 fs-2">
              Meet Find My Protest, a website designed for Berlin residents...
             </div>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div
              className="d-block w-100 carousel-image"
              style={{ backgroundImage: "url('banner7.jpg')" }}
            ></div>
          <Carousel.Caption>
             <div className="text-white bg-dark border rounded py-2 mx-0 fs-2">
               ...who care about what's happening in their city and want to get
               involved.
             </div>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div
              className="d-block w-100 carousel-image"
              style={{ backgroundImage: "url('banner1.jpg')" }}
            ></div>
          </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Banner;