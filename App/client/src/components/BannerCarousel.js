import Carousel from "react-bootstrap/Carousel";

function BannerCarousel() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block h-50 w-100"
          src="https://images.unsplash.com/photo-1592524138886-f4e3170d5ea7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvdGVzdHxlbnwwfDB8MHx8fDA%3D"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="content-align-center h-50 w-50"
          src="fmplogo.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>
            <a
              className="text-danger"
              style={{ textDecoration: "none" }}
              href="http://localhost:3000/about"
            >
              MEET FIND MY PROTEST
            </a>
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="banner3.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h5>
            <a
              className="text-black"
              style={{ textDecoration: "none" }}
              href="http://localhost:3000/analytics"
            >
              PROTEST ANALYTICS
            </a>
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerCarousel;
