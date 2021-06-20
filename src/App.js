import "./App.css";

import { IoAddSharp } from "react-icons/io5";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { IconContext } from "react-icons";

function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{ color: "red", size: "1rem" }}>
        <IoAddSharp color="black" size="5rem" />
        <FaEye />
        <FaEyeSlash />
      </IconContext.Provider>
    </div>
  );
}

export default App;
