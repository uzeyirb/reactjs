import { Card, Button } from "react-bootstrap";
import { Component } from "react";

class BootCard extends Component {
  render() {
    return (
        <Card bg="success" border='danger'>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default BootCard;
