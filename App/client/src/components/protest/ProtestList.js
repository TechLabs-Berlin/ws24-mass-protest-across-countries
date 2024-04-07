import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import ListGroup from "react-bootstrap/ListGroup";
import CardTitle from "react-bootstrap/esm/CardTitle";
import CardBody from "react-bootstrap/esm/CardBody";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import CloseButton from "react-bootstrap/CloseButton";

function ProtestList({ data }) {
  // Initialize state for managing toast visibility for each card
  const [showPopover, setShowPopover] = useState([]);

  // Initialize state when data changes
  useEffect(() => {
    setShowPopover(Array(data.length).fill(false));
  }, [data]);

  // Function to toggle toast visibility for a specific card
  const togglePopover = (index) => {
    setShowPopover((prevShowPopover) => {
      const newShowPopover = [...prevShowPopover];
      newShowPopover[index] = !newShowPopover[index];
      return newShowPopover;
    });
  };

  return (
    <div>
      <Row xs={3} md={4} className="g-4">
        {data.map((item, index) => (
          <Col key={index}>
            <Card className="my-4">
              <Card.Img src={item.imageUrl} alt="random protest image" />
              <CardBody className="bg-secondary">
                {/* Switched: */}

                <CardTitle
                  onClick={() => togglePopover(index)}
                  show={showPopover[index]}
                  animation={false}
                >
                  <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="right"
                    overlay={
                      <Popover id="popover-basic">
                        <Popover.Header as="h3">
                          <CloseButton />
                          <ListGroup variant="flush">
                            <ListGroup.Item>
                              Date: {item.month} {item.day}, {item.year}
                            </ListGroup.Item>
                            <ListGroup.Item>Theme: {item.label}</ListGroup.Item>
                            <ListGroup.Item>
                              District: {item.district}
                            </ListGroup.Item>
                            {/* Additionally displayable: */}
                            <ListGroup.Item>
                              Crowd size: {item.crowd_size} people
                            </ListGroup.Item>
                            <ListGroupItem>
                              Info: {item.description}
                            </ListGroupItem>
                          </ListGroup>
                        </Popover.Header>
                        <Popover.Body>
                          <small>Source: &copy; {item.source}</small>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button
                      className="bg-secondary"
                      variant="secondary"
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        width: "300px",
                        transition: "width 0.5s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.width = "auto";
                        e.target.style.whiteSpace = "normal";
                      }} // Expand on hover
                      onMouseLeave={(e) => {
                        e.target.style.width = "300px";
                        e.target.style.whiteSpace = "nowrap";
                      }} // Collapse on mouse leave
                    >
                      {item.title}
                    </Button>
                  </OverlayTrigger>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProtestList;
