import { useState } from "react";
import UserTable from "./UserTable";

const ControlledForms2 = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
   // e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userData = {
      ...formData,
      id: Math.floor(Math.random() * 100) + 1,
    };

    users.push(userData);

    localStorage.setItem("users", JSON.stringify(users));

    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Learn Controlled Forms</h1>
      <p>Manage multiple input with single state</p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        <br /><br />

        <button>submit</button>

      </form>

      <UserTable />

    </div>
  );
};

export default ControlledForms2;