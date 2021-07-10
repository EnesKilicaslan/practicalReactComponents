import React, { useContext } from "react";
import { username, language } from "./context";

export function ContextChildExample() {
  const name = useContext(username);
  const lang = useContext(language);

  return (
    <div>
      username: {name}, language: {lang}
    </div>
  );
}

export default ContextChildExample;
