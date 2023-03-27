import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = ({ input, handleChange, handleSubmit }) => {
  // const submit = input.submit;

  // const useFirstRender = () => {
  //   const ref = useRef(true);
  //   const firstRender = ref.current;
  //   ref.current = false;
  //   return firstRender;
  // };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="title"
        id="outlined-basic"
        label="Title"
        variant="outlined"
        size="small"
        value={input.title}
        onChange={handleChange}
      />
      <TextField
        name="content"
        label="Content"
        multiline
        minRows={1}
        maxRows={10}
        value={input.content}
        onChange={handleChange}
        sx={{
          width: 300,
        }}
        error={!!input.error}
        helperText={input.error}
      />
      <Button type="submit" variant="contained">
        Add new note
      </Button>
    </form>
  );
};

export default Form;
