import { useState } from "react";
import { nanoid } from "nanoid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import PickTime from "./PickTime";

const Form = ({ notes, setNotes, openModal, handleClose, noteObj }) => {
  const [remind, setRemind] = useState(false);
  const [input, setInput] = useState({
    title: noteObj ? noteObj.title : "",
    content: noteObj ? noteObj.content : "",
    reminder: noteObj
      ? noteObj.reminder instanceof Date
        ? noteObj.reminder
        : new Date()
      : new Date(),
    error: "",
  });
  const [dateError, setDateError] = useState({
    error: false,
    message: "Time has past already",
  });

  const toggleCheckbox = () => {
    setRemind((prev) => !prev);
    if (new Date(input.reminder) - Date.now() <= 0) {
      setDateError((prev) => {
        return {
          ...prev,
          error: true,
        };
      });
    }
  };

  const handleChange = (event) => {
    if (event instanceof Date) {
      if (new Date(event) - Date.now() <= 0) {
        setDateError((prev) => {
          return {
            ...prev,
            error: true,
          };
        });
      } else {
        setDateError((prev) => {
          return {
            ...prev,
            error: false,
          };
        });
      }

      setInput((prev) => ({
        ...prev,
        reminder: new Date(event),
      }));
    } else {
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
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.content === "") {
      setInput((prev) => ({
        ...prev,
        error: "Can't be empty",
      }));
    } else if (!remind || !dateError.error) {
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
      reminder: remind ? input.reminder : remind,
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
              reminder: input.reminder,
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
          color="#565656"
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

      <FormControlLabel
        sx={{ mb: 2 }}
        control={
          <Checkbox
            label="Remind"
            checked={remind}
            onChange={toggleCheckbox}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Create a reminder"
      />

      {remind && (
        <>
          <PickTime
            value={input.reminder}
            handleChange={handleChange}
            dateError={dateError}
            setDateError={setDateError}
          />
          {dateError.error && (
            <Typography
              sx={{ mt: -1.5, ml: 2, fontSize: 13, color: "#d32f2f" }}
            >
              {dateError.message}
            </Typography>
          )}
        </>
      )}

      <Button
        type="submit"
        variant="outlined"
        sx={{ mb: -2, alignSelf: "flex-end" }}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
