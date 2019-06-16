import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";

export default function EditForm({ id, task, updateTodo, doneEditing }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        updateTodo(id, value);
        reset();
        doneEditing();
      }}
      style={{ marginLeft: "1rem", width: "100%" }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        margin="normal"
        label="EditTodo"
        fullWidth
        autoFocus
      />
    </form>
  );
}
