import { useState } from "react";

export function useInput(initialState = "") {
  const [value, setValue] = useState(initialState);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const bind = {
    value,
    onChange,
  };

  const resetInput = () => {
    setValue(initialState);
  };

  return [value, bind, resetInput];
}

export default useInput;
