import { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

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
    <div className="app">
      <h1 className="title">Notes app</h1>
      <Form value={input} handleChange={handleChange} addNote={addNote} />
      <Results notes={notes} />
    </div>
  );
}

export default App;
