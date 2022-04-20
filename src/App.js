import "./App.css";
import { useReducer } from "react";
import RecentOperations from "./RecentOperations";
function reducer(state, { action, payload }) {
  switch (action) {
    case "adjust-array":
      let new_arr = state.recentOperations;
      let modified_arr = new_arr.pop();
      return { ...state, recentOperations: new_arr };
    case "add-digit":
      if (state.currentOperand.includes(".") && payload === ".") return state;
      else return { ...state, currentOperand: state.currentOperand + payload };
    case "add-operator":
      if (state.currentOperand.length === 0) return state;
      else if (state.previousOperand.length === 0)
        return {
          ...state,
          previousOperand: state.currentOperand + payload,
          currentOperand: "",
        };
      else if (state.previousOperand.length !== 0) {
        let op1 = parseFloat(state.previousOperand);
        let op2 = parseFloat(state.currentOperand);
        let op = state.previousOperand.charAt(state.previousOperand.length - 1);
        let result;
        switch (op) {
          case "÷":
            result = op1 / op2;
            return {
              recentOperations: [
                state.previousOperand +
                  state.currentOperand +
                  ` = ${result.toString()}`,
                ...state.recentOperations,
              ],
              currentOperand: result.toString(),
              previousOperand: "",
            };
          case "*":
            result = op1 * op2;
            return {
              recentOperations: [
                state.previousOperand +
                  state.currentOperand +
                  ` = ${result.toString()}`,
                ...state.recentOperations,
              ],
              currentOperand: result.toString(),
              previousOperand: "",
            };
          case "+":
            result = op1 + op2;
            return {
              recentOperations: [
                state.previousOperand +
                  state.currentOperand +
                  ` = ${result.toString()}`,
                ...state.recentOperations,
              ],
              currentOperand: result.toString(),
              previousOperand: "",
            };
          case "-":
            result = op1 - op2;
            return {
              recentOperations: [
                state.previousOperand +
                  state.currentOperand +
                  ` = ${result.toString()}`,
                ...state.recentOperations,
              ],
              currentOperand: result.toString(),
              previousOperand: "",
            };
          default:
            return state;
        }
      }
      break;
    case "clear":
      return { ...state, currentOperand: "", previousOperand: "" };
    case "delete":
      if (state.currentOperand !== "")
        return { ...state, currentOperand: state.currentOperand.slice(0, -1) };
      else {
        return {
          ...state,
          currentOperand: state.previousOperand.slice(0, -1),
          previousOperand: "",
        };
      }
    case "calculate":
      if (state.currentOperand == "") {
        return state;
      }
      let op1 = parseFloat(state.previousOperand);
      let op2 = parseFloat(state.currentOperand);
      let op = state.previousOperand.charAt(state.previousOperand.length - 1);
      let result;
      switch (op) {
        case "÷":
          result = op1 / op2;
          return {
            recentOperations: [
              state.previousOperand +
                state.currentOperand +
                ` = ${result.toString()}`,
              ...state.recentOperations,
            ],
            currentOperand: result.toString(),
            previousOperand: "",
          };
        case "*":
          result = op1 * op2;
          return {
            recentOperations: [
              state.previousOperand +
                state.currentOperand +
                ` = ${result.toString()}`,
              ...state.recentOperations,
            ],
            currentOperand: result.toString(),
            previousOperand: "",
          };
        case "+":
          result = op1 + op2;
          return {
            recentOperations: [
              state.previousOperand +
                state.currentOperand +
                ` = ${result.toString()}`,
              ...state.recentOperations,
            ],
            currentOperand: result.toString(),
            previousOperand: "",
          };
        case "-":
          result = op1 - op2;
          return {
            recentOperations: [
              state.previousOperand +
                state.currentOperand +
                ` = ${result.toString()}`,
              ...state.recentOperations,
            ],
            currentOperand: result.toString(),
            previousOperand: "",
          };
        default:
          return state;
      }
    default:
      return state;
  }
}
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
        <button onClick={() => dispatch({ action: "delete", payload: "" })}>
          DEL
        </button>
        <button
          onClick={() => dispatch({ action: "add-operator", payload: "÷" })}
        >
          ÷
        </button>
        <button onClick={() => dispatch({ action: "add-digit", payload: "7" })}>
          7
        </button>
        <button onClick={() => dispatch({ action: "add-digit", payload: "8" })}>
          8
        </button>
        <button onClick={() => dispatch({ action: "add-digit", payload: "9" })}>
          9
        </button>
        <button
          onClick={() => dispatch({ action: "add-operator", payload: "*" })}
        >
          *
        </button>
        <button onClick={() => dispatch({ action: "add-digit", payload: "4" })}>
          4
        </button>
        <button onClick={() => dispatch({ action: "add-digit", payload: "5" })}>
          5
        </button>
        <button onClick={() => dispatch({ action: "add-digit", payload: "6" })}>
          6
        </button>
        <button
          onClick={() => dispatch({ action: "add-operator", payload: "+" })}
        >
          +
        </button>
        <button onClick={() => dispatch({ action: "add-digit", payload: "1" })}>
          1
        </button>
        <button onClick={() => dispatch({ action: "add-digit", payload: "2" })}>
          2
        </button>
        <button onClick={() => dispatch({ action: "add-digit", payload: "3" })}>
          3
        </button>
        <button
          onClick={() => dispatch({ action: "add-operator", payload: "-" })}
        >
          -
        </button>
        <button onClick={() => dispatch({ action: "add-digit", payload: "." })}>
          .
        </button>
        <button onClick={() => dispatch({ action: "add-digit", payload: "0" })}>
          0
        </button>
        <button
          className="span-two"
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
  );
}

export default App;
