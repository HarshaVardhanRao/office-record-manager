import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/employees")
      .then((res) => {
        console.log(res.data);
        setEmployees(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h1>Office Records</h1>

      <Link to="/add">
        <button>Add Employee</button>
      </Link>

      <hr />

      {error && <h3>Error: {error}</h3>}

      <h3>Total Employees: {employees.length}</h3>

      {employees.map((emp) => (
        <div key={emp.id}>
          <p>Name: {emp.name}</p>
          <p>Email: {emp.email}</p>
          <p>Department: {emp.department}</p>

          <Link to={`/edit/${emp.id}`}>
            <button>Edit</button>
          </Link>

          <button
            onClick={async () => {
              await api.delete(`/employees/${emp.id}`);
              window.location.reload();
            }}
          >
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;