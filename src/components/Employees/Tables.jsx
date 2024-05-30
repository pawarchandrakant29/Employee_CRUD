import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

const Tables = ({ employees, editEmployee, deleteEmployee }) => {
    return (
        <>
            <div className='border border-top'></div>
            <h3 className='p-3 bg-purple'>
                Manage Employees
            </h3>
            <div className='px-5'>
                <Table striped bordered hover className="mt-4 text-center " >
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
                        {employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.address}</td>
                                <td>{employee.phone}</td>
                                <td className='d-flex justify-content-evenly'   >
                                    <Button variant="info">
                                        <FaEye />
                                    </Button>
                                    <Button variant="warning" onClick={() => editEmployee(index)} className="mr-2">
                                        <FaEdit />
                                    </Button>
                                    <Button variant="danger" onClick={() => deleteEmployee(index)}>
                                        <FaTrash />
                                    </Button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table >

            </div>

        </>
    );
};

export default Tables;