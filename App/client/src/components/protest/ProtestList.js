import React, { useState, useEffect } from "react";
import { Card, Container, Col, Row, ListGroup, CardTitle, CardBody, Button, OverlayTrigger, Popover, ListGroupItem, CloseButton } from "react-bootstrap";

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

  // Function to handle saving result
  const handleSaveResult = (index) => {
    // Implement your logic for saving the result here
    console.log("Saving result for item at index:", index);
    alert("PROTEST SAVED!")
  }

  return (
    <div>
      <Row xs={1} md={3} xl={4} className="g-4 mx-0">
        {data.map((item, index) => (
          <Col key={index}>
            <Card>
              <Card.Img src={item.imageUrl} alt="random protest image" />
              <CardBody className="mt-2 bg-secondary" style={{ fontFamily: 'Abril Fatface, serif'}}>
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
                      <Popover id="popover-basic" style={{ fontFamily: 'Playfair Display, serif'}}>
                        <Popover.Header as="h3">
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
                            Crowd size: {item.crowd_size} {item.isCrowdPredicted ? "predicted" : ""} people ({item.crowd_size_name})
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
                      className="bg-secondary mx-3 ml-2"
                      variant="secondary"
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        width: "250px", 
                        transition: "width 0.5s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.width = "auto";
                        e.target.style.whiteSpace = "normal";
                      }} // Expand on hover
                      onMouseLeave={(e) => {
                        e.target.style.width = "250px"
                        e.target.style.whiteSpace = "nowrap";
                      }} // Collapse on mouse leave
                    >
                      {item.title}
                    </Button>
                  </OverlayTrigger>
                  <Button className="mx-0 p-0 text-right bi bi-plus-circle" variant="secondary" onClick={() => handleSaveResult(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                    </svg>
                  </Button>
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