import { useState } from "react";

const useInputField = (defaultValue) => {
  const [inputField, setInputFIeld] = useState(defaultValue);
  const handleOnChange = (e) => {
    setInputFIeld(e.target.value);
  };
  return [inputField, handleOnChange];
};

export default useInputField;
