import { useEffect, useState } from "react";
import { ConfirmProvider } from "material-ui-confirm";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Results from "./components/Results";
import FormModal from "./components/FormModal";
import ShowReminder from "./components/ShowReminder";

function App() {
  const [notes, setNotes] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [openModal, setOpenModal] = useState({
    id: null,
    open: false,
  });

  useEffect(() => {
    notes.length !== 0 && localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const localNotes = JSON.parse(localStorage.getItem("notes"));
    localNotes && setNotes(localNotes);
  }, []);

  useEffect(() => {
    notes.forEach((n) => {
      n.reminder &&
        whenToShowReminder(() => {
          setReminders((prev) => [...prev, n]);
        }, n.reminder);
    });
  }, [notes]);

  useEffect(() => {
    reminders.forEach((r) => {
      new Date(r.reminder) - Date.now() < 0 &&
        setReminders((prev) => prev.filter((p) => p.id !== r.id));
    });
  }, [reminders]);

  const handleOpen = (id) => {
    setOpenModal({
      id: id,
      open: true,
    });
  };

  const handleClose = () => {
    setOpenModal((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };

  const whenToShowReminder = (cb, time) => {
    new Date(time) - Date.now() > 0 &&
      setTimeout(cb, new Date(time) - Date.now());
  };

  return (
    <>
      <Header handleOpen={handleOpen} />
      {notes.length === 0 ? (
        <Welcome handleOpen={handleOpen} />
      ) : (
        <ConfirmProvider>
          <Results notes={notes} setNotes={setNotes} handleOpen={handleOpen} />
        </ConfirmProvider>
      )}
      <FormModal
        notes={notes}
        setNotes={setNotes}
        openModal={openModal}
        handleClose={handleClose}
      />
      <ConfirmProvider>
        {reminders.map((r) => (
          <ShowReminder
            key={nanoid()}
            content={r.content}
            reminders={reminders}
          />
        ))}
      </ConfirmProvider>
    </>
  );
}

export default App;
