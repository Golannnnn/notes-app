import { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

/**
 * 1. Identify your component’s different visual states
 * 2. Determine what triggers those state changes
 * 3. Represent the state in memory using useState
 * 4. Remove any non-essential state variables
 * 5. Connect the event handlers to set the state
 */

function App() {
  const [notes, setNotes] = useState([]);

  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      setNotes(notes.filter((n) => n.id !== id));
    }
  };

  return (
    <div className="app">
      <h1 className="title">Notes app</h1>
      <Form notes={notes} setNotes={setNotes} />
      <Results notes={notes} setNotes={setNotes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
