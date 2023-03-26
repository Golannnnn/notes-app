import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = ({ input, handleChange, addNote }) => {
  return (
    <form>
      <TextField
        label="Note content"
        multiline
        minRows={1}
        maxRows={10}
        value={input}
        onChange={handleChange}
        sx={{
          width: 300,
        }}
      />
      <Button onClick={addNote} variant="contained">
        Add new note
      </Button>
    </form>
  );
};

export default Form;
