import { useState } from "react";

const ControlField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleControlledField = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    // console.log(password);
    if (password.length > 6) {
      setError("password must be 6 character");
    } else {
      setError("");
    }
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
        <input type="text" name="name" placeholder="Your Name" />
        <br />
        <input type="email" name="email" placeholder="Your Email" />
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

export default ControlField;
