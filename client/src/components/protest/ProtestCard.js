import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ProtestCard() {
  return (
    <Row s={3} md={4} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/random/?protests"
              height={200}
            />
            <Card.Body>
              <Card.Title>Protest</Card.Title>
              <Card.Text>Protest Info</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProtestCard;
