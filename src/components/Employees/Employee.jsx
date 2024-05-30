import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

const Employee = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    setEmployee({ firstName: '', lastName: '', email: '', address: '', phone: '' });
  };

  return (
    <Container>
      <Card className="my-4 shadow-sm card-container">
        <Card.Header as="h5" className="bg-purple text-white">New Employee</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>First Name</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={employee.firstName}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Last Name</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={employee.lastName}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Email</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="email"
                  name="email"
                  value={employee.email}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Address</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  name="address"
                  value={employee.address}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Phone</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  name="phone"
                  value={employee.phone}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row className='justify-content-center'>
            <Button variant="success" type="submit" className="mt-3  set">
              Submit
            </Button>

            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Employee;