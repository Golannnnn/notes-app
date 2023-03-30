import { useState } from "react";
import { nanoid } from "nanoid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Form = ({ notes, setNotes, openModal, handleClose, noteObj }) => {
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
      if (openModal.id) {
        changeNote();
        handleClose();
      } else {
        addNote();
        handleClose();
      }
    }
  };

  const addNote = () => {
    const noteObj = {
      title: input.title,
      content: input.content,
      date: new Date(),
      id: nanoid(),
      archived: false,
    };
    setNotes(notes.concat(noteObj));
  };

  const changeNote = () => {
    setNotes(
      notes.map((n) => {
        return n.id === openModal.id
          ? {
              ...n,
              title: input.title,
              content: input.content,
              update: new Date(),
            }
          : n;
      })
    );
  };

  const styles = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "350px",
    marginBottom: "20px",
  };

  return (
    <form style={styles} onSubmit={handleSubmit}>
      {openModal && (
        <Typography
          sx={{ mb: 2, fontWeight: 600 }}
          variant="h5"
          component="div"
        >
          {!openModal.id ? "Add new note" : "Edit note"}
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
          width: "100%",
          mb: 2,
        }}
        error={!!input.error}
        helperText={input.error}
      />
      <Button type="submit" variant="contained" sx={{ mb: -2 }}>
        {!openModal.id ? "Add new note" : "Update note"}
      </Button>
    </form>
  );
};

export default Form;
