import { Button, Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
      <Container fluid className="bg-dark text-white pt-5 pb-4 mt-5" style={{ fontFamily: 'Playfair Display, serif'}}>
        <Row>
          <Col>
            <blockquote className="blockquote mb-0" disabled>
              <p><small><i>&#174; Find_My_Protest</i></small></p>
              <br />
              <footer className="blockquote-footer"><small><i>"Injustice anywhere is a threat to justice everywhere." - Martin Luther King Jr.</i></small></footer>
            </blockquote>
          </Col>
          <Col>
            <p>
              Data Source: <a href="https://acleddata.com/early-warning/" target="_blank"> &copy;ACLED </a>
            </p>
          </Col>
          <Col>
            <Button className="bg-dark border-light" size="lg">
                <a href="#" className="back-top-button text-decoration-none head-font text-white">
                  Back to top
                </a>
              </Button>
          </Col>
          </Row>
      </Container>
    );
  }
  
  export default Footer;