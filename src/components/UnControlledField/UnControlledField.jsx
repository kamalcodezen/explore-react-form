import { useRef } from "react";

const UnControlledField = () => {
  const emailRef = useRef("");
  const nameRef = useRef("");

  const handleUnControlled = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log(name, email);
  };

  return (
    <div>
      <form onSubmit={handleUnControlled}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input ref={emailRef} type="email" name="email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlledField;
