import { useState } from "react";
import { nanoid } from "nanoid";
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
      id: nanoid(),
    };
    setNotes(notes.concat(noteObj));
  };

  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      setNotes(notes.filter((n) => n.id !== id));
    }
  };

  return (
    <div className="app">
      <h1 className="title">Notes app</h1>
      <Form value={input} handleChange={handleChange} addNote={addNote} />
      <Results notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
