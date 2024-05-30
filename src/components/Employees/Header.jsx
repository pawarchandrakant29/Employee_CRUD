import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome,FaUser } from 'react-icons/fa';


const Header = () => {
  return (
    <Navbar bg="purple" variant="dark" className="px-4 justify-content-between">
      <Navbar.Brand href="#">
        <FaHome /> 
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Navbar.Text className="text-white"><FaUser />   Employee Management</Navbar.Text>
      </Nav>
    </Navbar>
  );
};

export default Header;