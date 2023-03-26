import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const addNote = () => {
    const noteObj = {
      content: input,
      date: new Date(),
    };
    setNotes(notes.concat(noteObj));
  };

  return (
    <div>
      <Form value={input} handleChange={handleChange} addNote={addNote} />
    </div>
  );
}

export default App;
