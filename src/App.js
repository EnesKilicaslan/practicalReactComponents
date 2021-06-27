import { IoAddSharp } from "react-icons/io5";
import { FaEyeSlash, FaEye, FaQuestion } from "react-icons/fa";
import { IconContext } from "react-icons";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "node-notifier";

import "./App.css";

const ToastComponent = ({ closeToast, toastProps }) => {
  console.log("ToastProps", toastProps);
  console.log("closeToast:", closeToast);
  return (
    <div style={{ marginLeft: "0px" }}>Toastin with the related component,</div>
  );
};

const QuestionTooltip = () => {
  return (
    <span>
      <FaQuestion color="green" size="2rem" />
    </span>
  );
};

const TooltipContent = () => {
  return (
    <span
      style={{
        color: "white",
        backgroundColor: "teal",
        width: "100%",
        height: "100%",
      }}
    >
      tasdadas dsad asd as dasd asdasdas d s
    </span>
  );
};

function App() {
  const notify = (content) => {
    toast(<ToastComponent content={content} />);
  };

  return (
    <div className="App">
      <IconContext.Provider value={{ color: "red", size: "1rem" }}>
        <IoAddSharp color="black" size="5rem" />
        <FaEye />
        <FaEyeSlash />

        <div style={{ paddingBottom: "20px" }}>
          <Tooltip title="This is tooltip" arrow={true}>
            <button> Submit</button>
          </Tooltip>
        </div>

        <div style={{ paddingBottom: "20px" }}>
          <Tooltip html={<TooltipContent />} className="tooltipClass">
            <FaQuestion> </FaQuestion>
          </Tooltip>
        </div>

        <div style={{ margin: "100px" }}>
          <button
            onClick={() => {
              notify("First button");
            }}
          >
            Notify
          </button>
          <button
            onClick={() => {
              notify("Second button");
            }}
          >
            Notify
          </button>
        </div>

        <ToastContainer
          hideProgressBar={true}
          autoClose={5000}
          position="bottom-right"
        />
      </IconContext.Provider>
    </div>
  );
}

export default App;
