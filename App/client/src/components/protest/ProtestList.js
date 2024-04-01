import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CardTitle from "react-bootstrap/esm/CardTitle";
import Row from "react-bootstrap/esm/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import CardBody from "react-bootstrap/esm/CardBody";
import Toast from "react-bootstrap/Toast";

function ProtestList({ data }) {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString();
  };

  // Initialize state for managing toast visibility for each card
  const [showToast, setShowToast] = useState([]);

  // Initialize state when data changes
  useEffect(() => {
    setShowToast(Array(data.length).fill(false));
  }, [data]);

  // Function to toggle toast visibility for a specific card
  const toggleToast = (index) => {
    setShowToast((prevShowToast) => {
      const newShowToast = [...prevShowToast];
      newShowToast[index] = !newShowToast[index];
      return newShowToast;
    });
  };

  return (
    <div>
      <Row xs={3} md={4} className="g-4">
        {data.map((item, index) => (
          <Col key={index}>
            <Card>
              <Card.Img src={item.imageUrl} alt="random protest image" />
              <CardBody>
                <CardTitle> {formatDate(item.event_date)}</CardTitle>
                <ListGroup variant="flush">
                  <ListGroup.Item>Theme: {item.categories}</ListGroup.Item>
                  <ListGroup.Item>District: {item.district}</ListGroup.Item>
                  {/* Additionally displayable: */}
                  <ListGroup.Item>Mood: {item.mood}</ListGroup.Item>
                  <ListGroup.Item>Crowd size: {item.crowd_size} people</ListGroup.Item>
                </ListGroup>
                <Button onClick={() => toggleToast(index)} variant="danger">
                  More Info
                </Button>
                <Toast
                  onClose={() => toggleToast(index)} // Trigger individual toggle
                  show={showToast[index]}
                  animation={false}
                >
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">
                      What is this Protest about
                    </strong>
                  </Toast.Header>
                  <Toast.Body>{item.description}</Toast.Body>
                </Toast>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProtestList;