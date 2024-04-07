import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";

function Footer() {
  return (
    <footer className="bg-dark mt-5">
      <Container className="p-5 text-white">
        <Row>
          <Col>
            <p>
              &copy; <i>FindMyProtest</i>
            </p>
          </Col>
          <Col>
            <div>
              <p>
                Data Source:
                <a
                  className="text-decoration-none text-white"
                  href="https://acleddata.com/early-warning/"
                  target="_blank"
                >
                  ACLED
                </a>
              </p>
            </div>
          </Col>

          <Col>
            <a
              href="#"
              className="back-top-button head-font text-decoration-none text-white"
            >
              Back to top
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
