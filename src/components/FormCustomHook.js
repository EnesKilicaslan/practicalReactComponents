import React, { useState } from "react";
import { useInput } from "../hooks/useInput";

export function FormCustomHook() {
  const [firstName, firstNameBind, resetFirstName] = useInput("");
  const [lastName, lastNameBind, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("firstName: ", firstName, " lastname: ", lastName);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input {...firstNameBind} />
        </div>
        <div>
          <label>Last Name</label>
          <input {...lastNameBind} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormCustomHook;
