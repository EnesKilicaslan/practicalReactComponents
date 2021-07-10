import React from "react";
import { username, language } from "./context";

export function ContextChildExample() {
  return (
    <username.Consumer>
      {(username) => {
        return (
          <language.Consumer>
            {(language) => {
              return (
                <div>
                  username: {username}, language: {language}
                </div>
              );
            }}
          </language.Consumer>
        );
      }}
    </username.Consumer>
  );
}

export default ContextChildExample;
