import {useState } from "react";
import uuid from "uuid";

export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);

  return {
    todos,
    addTodo: newTodo => {
      setTodos([...todos, { id: uuid(), task: newTodo, completed: false }]);
    },
    removeTodo: todoId => {
      //filter out removed todo
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      //call setTodos with new array
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    updateTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    }
  };
};
