import { useState } from "react";

const ControllerdFrom1 = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [massage, setMassage] = useState("");

  const handleFirstName = (e) => {
    setFname(e.target.value);
  };

  const handleLastName = (e) => {
    setLname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    let data = { fullname: { fname, lname } };
    console.log(data);

    setMassage(`welcome ${fname} ${lname}`);

    setFname("");
    setLname("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First name</label>
        <input
          type="text"
          id="first_name"
          placeholder="fname"
          value={fname}
          onChange={handleFirstName}
        ></input>
        <br />
        <br />

        <label htmlFor="last_name">Last name</label>
        <input
          type="text"
          id="last_name"
          placeholder="lname"
          value={lname}
          onChange={handleLastName}
        ></input>
        <br />
        <br />
        <button>submit</button>
      </form>

      <h2>{massage}</h2>
    </div>
  );
};

export default ControllerdFrom1;
