import React, { useState, useEffect } from 'react';
import AdminDashboard from './Admin';
import { Container, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';

const UserDetails = () => {
  const [users, setUsers] = useState([]);

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8001/api/usersdetails'); // Adjust the URL if needed
        setUsers(response.data); // Set the fetched users to state
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers(); // Call fetchUsers function to load data when component mounts
  }, []); // Empty dependency array to ensure it runs once on mount

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="d-none d-md-block"> {/* Hide sidebar on small screens */}
          <AdminDashboard />
        </Col>
        <Col md={10}>
          <h1>User Details</h1>
          <div className="table-responsive"> {/* Wrapper for additional responsiveness */}
            <Table striped bordered hover responsive="sm" className="mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  {/* Add other headers as needed */}
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    {/* Add other user details as needed */}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetails;
