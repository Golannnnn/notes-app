import { useState } from "react";
import { nanoid } from "nanoid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

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

  const SearchButton = () => (
    <IconButton
      style={{
        dislay: "flex",
        alignSelf: "end",
        backgroundColor: "rgb(144, 202, 249)",
        paddingLeft: 11,
        marginLeft: 10,
      }}
    >
      <SendIcon
        style={{
          color: "rgba(0, 0, 0, 0.87)",
        }}
      />
    </IconButton>
  );

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
        // InputProps={{ endAdornment: <SearchButton /> }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mb: -2 }}
        // style={{ backgroundColor: "#9D9CFF" }}
      >
        {openModal ? "Update note" : "Add new note"}
      </Button>
    </form>
  );
};

export default Form;
