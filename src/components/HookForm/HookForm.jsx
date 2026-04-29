import useInputField from "../../hook/useInputField";

const HookForm = () => {
  const [name, setName] = useInputField("");
  const [email, setEmail] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          defaultValue={name}
          onChange={setName}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          defaultValue={email}
          onChange={setEmail}
        />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
