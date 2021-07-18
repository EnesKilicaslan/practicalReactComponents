import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { FaEyeSlash, FaEye, FaQuestion } from "react-icons/fa";
import { IconContext } from "react-icons";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReactModal from "react-modal";
import { CircleLoader, FadeLoader } from "react-spinners";
import { Pie } from "react-chartjs-2";

import "./App.css";
import UseStateExample from "./components/UseStateExample";

import ClassCounterExample from "./components/ClassCounterExample";
import HookCounterExample from "./components/HookCounterExample";
import { FetchEffectExample } from "./components/FetchEffectExample";
import { username, language } from "./components/context";
import ContextParentExample from "./components/ContextParentExample";

import { CounterReducerOne } from "./components/CounterReducerOne";
import { CounterReducerContextProvider } from "./components/CounterReducerContextProvider";
import DataFetchingUseReducer from "./components/DataFetchingUseReducer";
import { CounterWithUseMemo } from "./components/CounterWithUseMemo";

import { FocusInputUseRef } from "./components/FocusInputUseRef";

import { CounterRefClass } from "./components/CounterRefClass";
import { CounterRefHook } from "./components/CounterRefHook";

import { CounterCustomHook } from "./components/CounterCustomHook";
import { FormCustomHook } from "./components/FormCustomHook";
const customModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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

ReactModal.setAppElement("#root");

function App() {
  const [modalState, setModalState] = useState(false);

  const notify = (content) => {
    toast(<ToastComponent content={content} />);
  };

  return (
    <div className="App">
      {/* <FetchEffectExample />
      <username.Provider value={"enes"}>
        <language.Provider value={"ingilicce"}>
          <ContextParentExample />
        </language.Provider>
      </username.Provider>
      <CounterReducerOne />
      <h1>useReducer and useContext global state management</h1>
      <CounterReducerContextProvider />
      <DataFetchingUseReducer />
      <h3>useMemo</h3>
      <CounterWithUseMemo />
      <FocusInputUseRef />
      <h2> Ref Counter </h2>
      -----
      <CounterRefClass />
      -----
      <CounterRefHook /> */}

      <CounterCustomHook />
      <br />
      <br />
      <h2>Form hook</h2>

      <FormCustomHook />
      {/* <IconContext.Provider value={{ color: "red", size: "1rem" }}>
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

        <button
          onClick={() => {
            setModalState(true);
          }}
        >
          Open modal
        </button>
        <ReactModal
          isOpen={modalState}
          parentSelector={() => document.querySelector("#root")}
          onRequestClose={() => {
            setModalState(false);
          }}
          style={customModalStyle}
          shouldCloseOnOverlayClick={false}
        >
          <h2> This is a modal</h2>
        </ReactModal>

        <ToastContainer
          hideProgressBar={true}
          autoClose={5000}
          position="bottom-right"
        />

        <div style={{ margin: 250 }}>
          <FadeLoader size={48} color="#50BED7" loading={true} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "160px",
          }}
        >
          <div
            style={{
              width: "400px",
            }}
          >
            <Pie
              data={{
                datasets: [
                  {
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 3,
                  },
                ],
              }}
            />
          </div>
        </div>
      </IconContext.Provider>

      <UseStateExample />
      <ClassCounterExample />
      <HookCounterExample /> */}
    </div>
  );
}

export default App;
