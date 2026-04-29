import { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleControlledField = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);
    // console.log(e.target.email.value);
    console.log(name, email, password);
    if (password.length > 6) {
      setError("password must be 6 character");
    } else {
      setError("");
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassWordOnChange = (e) => {
    setPassword(e.target.value);

    // if (password.length >= 6) {
    //   setError("password must be 6 character");
    // } else {
    //   setError("");
    // }
  };

  return (
    <div>
      <form onSubmit={handleControlledField}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          defaultValue={name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          defaultValue={email}
          onChange={handleEmailChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          defaultValue={password}
          onChange={handlePassWordOnChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ControlledField;
