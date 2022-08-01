import "./App.css";
import { useReducer } from "react";
import RecentOperations from "./RecentOperations";
import { reducer } from "./utils/reducer";
function App() {
  const [state, dispatch] = useReducer(reducer, {
    currentOperand: "",
    previousOperand: "",
    recentOperations: [],
  });
  if (state.recentOperations.length > 7) {
    dispatch({ action: "adjust-array", payload: "" });
  }
  return (
    <>
      <h1 className="title">Calculator</h1>
      <div className="wrapper">
        <div className="calculator-container">
          <div className="output">
            <div className="previous-operand">{state.previousOperand}</div>
            <div className="current-operand">{state.currentOperand}</div>
          </div>
          <button
            className="span-two"
            onClick={() => dispatch({ action: "clear", payload: "" })}
          >
            AC
          </button>
          <button
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                dispatch({ action: "delete", payload: "" });
              }
            }}
            onClick={() => dispatch({ action: "delete", payload: "" })}
          >
            DEL
          </button>
          <button
            onKeyDown={(e) => {
              if (e.key === "/")
                dispatch({ action: "add-operator", payload: "÷" });
            }}
            onClick={() => dispatch({ action: "add-operator", payload: "÷" })}
          >
            ÷
          </button>
          <button
            onKeyDown={(e) => {
              if (e.key === "7")
                dispatch({ action: "add-digit", payload: "7" });
            }}
            onClick={() => dispatch({ action: "add-digit", payload: "7" })}
          >
            7
          </button>
          <button
            onKeyDown={(e) => {
              if (e.key === "8")
                dispatch({ action: "add-digit", payload: "8" });
            }}
            onClick={() => dispatch({ action: "add-digit", payload: "8" })}
          >
            8
          </button>
          <button
            onKeyDown={(e) => {
              console.log(e.key);
              if (e.key === 9) dispatch({ action: "add-digit", payload: "9" });
            }}
            onClick={() => dispatch({ action: "add-digit", payload: "9" })}
          >
            9
          </button>
          <button
            onClick={() => dispatch({ action: "add-operator", payload: "*" })}
          >
            *
          </button>
          <button
            onKeyDown={(e) => {
              if (e.key === "4")
                dispatch({ action: "add-digit", payload: "4" });
            }}
            onClick={() => dispatch({ action: "add-digit", payload: "4" })}
          >
            4
          </button>
          <button
            onKeyDown={(e) => {
              if (e.key === "5")
                dispatch({ action: "add-digit", payload: "5" });
            }}
            onClick={() => dispatch({ action: "add-digit", payload: "5" })}
          >
            5
          </button>
          <button
            onKeyDown={(e) => {
              if (e.key === "6")
                dispatch({ action: "add-digit", payload: "6" });
            }}
            onClick={() => dispatch({ action: "add-digit", payload: "6" })}
          >
            6
          </button>
          <button
            onClick={() => dispatch({ action: "add-operator", payload: "+" })}
          >
            +
          </button>
          <button
            onKeyDown={(e) => {
              if (e.key === "1")
                dispatch({ action: "add-digit", payload: "1" });
            }}
            onClick={() => dispatch({ action: "add-digit", payload: "1" })}
          >
            1
          </button>
          <button
            onKeyDown={(e) => {
              if (e.key === "2")
                dispatch({ action: "add-digit", payload: "2" });
            }}
            onClick={() => dispatch({ action: "add-digit", payload: "2" })}
          >
            2
          </button>
          <button
            onKeyDown={(e) => {
              if (e.key === "3")
                dispatch({ action: "add-digit", payload: "3" });
            }}
            onClick={() => dispatch({ action: "add-digit", payload: "3" })}
          >
            3
          </button>
          <button
            onClick={() => dispatch({ action: "add-operator", payload: "-" })}
          >
            -
          </button>
          <button
            onClick={() => dispatch({ action: "add-digit", payload: "." })}
          >
            .
          </button>
          <button
            onKeyDown={(e) => {
              if (e.key === "0")
                dispatch({ action: "add-digit", payload: "0" });
            }}
            onClick={() => dispatch({ action: "add-digit", payload: "0" })}
          >
            0
          </button>
          <button
            className="span-two"
            onKeyDown={(e) => {
              if (e.key === "=") dispatch({ action: "calculate", payload: "" });
            }}
            onClick={() => dispatch({ action: "calculate", payload: "" })}
          >
            =
          </button>
        </div>
        <div className="recent-operations">
          <h2>Recent operations</h2>

          {state.recentOperations.length > 0 &&
            state.recentOperations.map((operation, index) => (
              <RecentOperations key={index} operation={operation} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
