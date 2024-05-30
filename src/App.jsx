import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Table } from 'react-bootstrap';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import Header from '../src/components/Employees/Header'

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setEmployees(employees.map(emp => emp.id === employee.id ? employee : emp));
      setIsEditing(false);
    } else {
      setEmployees([...employees, { ...employee, id: Date.now().toString() }]);
    }
    setEmployee({ id: '', firstName: '', lastName: '', email: '', address: '', phone: '' });
  };

  const editEmployee = (id) => {
    const emp = employees.find(emp => emp.id === id);
    setEmployee(emp);
    setIsEditing(true);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <Card className="my-4 shadow-sm card-container">
          <Card.Header as="h5" className=" text-white">
            New Employee
          </Card.Header>
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
                <Button variant="success" type="submit" className="mt-3 set">
                  Submit
                </Button>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <div className='border border-top'></div>
        <h3 className='p-3 bg-purple'>
          Manage Employees
        </h3>
        <div className='px-5'>
          <Table striped bordered hover className="mt-4 text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={emp.id}>
                  <td>{index + 1}</td>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.email}</td>
                  <td>{emp.address}</td>
                  <td>{emp.phone}</td>
                  <td className='d-flex justify-content-evenly'>
                    <Button variant="info">
                      <FaEye />
                    </Button>
                    <Button variant="warning" onClick={() => editEmployee(emp.id)} className="mr-2">
                      <FaEdit />
                    </Button>
                    <Button variant="danger" onClick={() => deleteEmployee(emp.id)}>
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default App;