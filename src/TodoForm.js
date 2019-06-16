import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

export default function TodoForm({ addTodo }) {
  const [value, handleValueChange, resetValue] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          resetValue();
        }}
      >
        <TextField
          value={value}
          onChange={handleValueChange}
          margin="normal"
          label="Add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
