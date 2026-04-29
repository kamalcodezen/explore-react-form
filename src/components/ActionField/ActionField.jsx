const ActionField = () => {
  const handleFromData = (fromData) => {
    console.log(fromData.get("name"));
    console.log(fromData.get("email"));
  };

  return (
    <div>
      <form action={handleFromData}>
        <input type="text" name="name" placeholder="Your Name" />
        <br />
        <input type="email" name="email" placeholder="Your Email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ActionField;
