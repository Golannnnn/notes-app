import { useState } from "react";
import { nanoid } from "nanoid";
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
  const [input, setInput] = useState({
    title: "",
    content: "",
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
      addNote();
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

  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      setNotes(notes.filter((n) => n.id !== id));
    }
  };

  return (
    <div className="app">
      <h1 className="title">Notes app</h1>
      <Form
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Results notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
