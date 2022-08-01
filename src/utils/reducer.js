export function reducer(state, { action, payload }) {
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
