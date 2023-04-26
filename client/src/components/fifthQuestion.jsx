import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
export default function FifthQuestion() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database. 
  useEffect(() => {
    getRecords();
  }, []);

  async function getRecords() {
    const response = await fetch(`http://localhost:5000/record5/`);

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
      <table id="cities-table">
        <thead>
          <tr>
            <th>City</th>
            <th>Number of Users</th>
            <th>Average Income</th>
          </tr>
        </thead>
              <tbody>
          {records.map((city) => (
            <tr>
              <td>{city._id}</td>
              <td>{city.count}</td>
              <td>{city.avgIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}