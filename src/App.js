import { useEffect, useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import FormModal from "./components/FormModal";
import { ConfirmProvider } from "material-ui-confirm";

/**
 * 1. Identify your component’s different visual states
 * 2. Determine what triggers those state changes
 * 3. Represent the state in memory using useState
 * 4. Remove any non-essential state variables
 * 5. Connect the event handlers to set the state
 */

function App() {
  const [notes, setNotes] = useState([]);
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

  return (
    <>
      <Header handleOpen={handleOpen} />
      <ConfirmProvider>
        <Results
          notes={notes}
          setNotes={setNotes}
          openModal={openModal}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      </ConfirmProvider>
      <FormModal
        notes={notes}
        setNotes={setNotes}
        openModal={openModal}
        handleClose={handleClose}
      />
    </>
  );
}

export default App;
