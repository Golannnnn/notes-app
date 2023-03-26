import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = ({ input, handleChange, addNote }) => {
  return (
    <form>
      <TextField
        label="Note content"
        multiline
        minRows={4}
        maxRows={10}
        value={input}
        onChange={handleChange}
      />
      <Button onClick={addNote} variant="contained">
        Add note
      </Button>
    </form>
  );
};

export default Form;
