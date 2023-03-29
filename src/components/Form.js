import { useState } from "react";
import { nanoid } from "nanoid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Form = ({ notes, setNotes, openModal, noteObj, handleClose }) => {
  const [input, setInput] = useState({
    title: noteObj ? noteObj.title : "",
    content: noteObj ? noteObj.content : "",
    error: "",
  });

  const handleChange = (event) => {
    if (event.target.name === "content") {
      if (event.target.value !== "") {
        setInput((prev) => ({
          ...prev,
          error: "",
        }));
      }
    }
    setInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.content === "") {
      setInput((prev) => ({
        ...prev,
        error: "Can't be empty",
      }));
    } else {
      setInput((prev) => ({
        ...prev,
        error: "",
      }));
      if (openModal) {
        changeNote();
        handleClose();
      } else {
        addNote();
      }
    }
  };

  const addNote = () => {
    const noteObj = {
      title: input.title,
      content: input.content,
      date: new Date(),
      id: nanoid(),
    };
    setNotes(notes.concat(noteObj));
  };

  const changeNote = () => {
    setNotes(
      notes.map((n) => {
        if (n.id === openModal.id) {
          return {
            ...n,
            title: input.title,
            content: input.content,
            update: new Date(),
          };
        } else {
          return n;
        }
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {openModal && (
        <Typography sx={{ mb: 2 }} variant="h5" component="div">
          Edit my note
        </Typography>
      )}
      <TextField
        name="title"
        id="outlined-basic"
        label="Title"
        variant="outlined"
        size="small"
        value={input.title}
        onChange={handleChange}
        // sx={{
        //   mt: openModal && 5,
        // }}
        sx={{ mb: 2 }}
      />
      <TextField
        name="content"
        label="Content"
        multiline
        minRows={1}
        maxRows={8}
        value={input.content}
        onChange={handleChange}
        sx={{
          width: openModal ? "100%" : 300,
          mb: 2,
        }}
        error={!!input.error}
        helperText={input.error}
      />
      <Button type="submit" variant="contained" sx={{ mb: -2 }}>
        {openModal ? "Update note" : "Add new note"}
      </Button>
    </form>
  );
};

export default Form;
