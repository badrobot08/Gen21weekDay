import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

export default function FormHook(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  console.log(name);
  console.log(description);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.receiveState(name, description);
    setName("");
    setDescription("");
  };

  return (
    <div>
      <Card style={{ width: 400 }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
