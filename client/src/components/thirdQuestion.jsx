import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
export default function ThirdQuestion() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database. 
  useEffect(() => {
    getRecords();
  }, []);

  async function getRecords() {
    const response = await fetch(`http://localhost:5000/record3/`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const records = await response.json();
    setRecords(records);
  }

 // This following section will display the table with the records of individuals.
  
  return (
    <div>
      <h3>Record List</h3>
      <table id="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Price</th>
            <th>Quote</th>
          </tr>
        </thead>
              <tbody>
          {records.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.income}</td>
              <td>{user.city}</td>
              <td>{user.car}</td>
              <td>{user.phone_price}</td>
              <td>{user.quote}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}