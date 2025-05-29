import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "Msg",
        completed: false
    }],
    // here we define the functionality...
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}

})


// create custom hook for it. 
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;