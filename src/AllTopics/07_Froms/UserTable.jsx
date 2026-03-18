import { useState, useEffect } from "react";

const UserTable = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(data);
  }, []);

  const handleDelete = (id) => {

    let updatedUsers = users.filter((user) => user.id !== id);

    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <>
      <h2>Users</h2>

      <table style={{ width: "100%", border: "1px solid", marginTop: "20px" }}>

        <thead>
          <tr>
            <th>Id</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>

              <td>
                <button>Edit</button>
              </td>

              <td>
                <button onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </>
  );
};

export default UserTable;