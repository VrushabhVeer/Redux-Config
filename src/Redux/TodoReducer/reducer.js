import { ADD_TODO } from "./actionTypes";
import { saveData, loadData } from "../../Utils/localStorage";

const initialState = {
  todos: loadData("todos") || [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const updatedTodo = [...state.todos, payload];
      saveData("todos", updatedTodo);
      return {
        ...state,
        todos: updatedTodo,
      };
    }
    default:
      return state;
  }
};

export { reducer };
