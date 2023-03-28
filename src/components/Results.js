import { useState } from "react";
import Note from "./Note";
import NoteModal from "./NoteModal";

const Results = ({ notes, deleteNote }) => {
  const [openModal, setOpenModal] = useState({
    id: null,
    open: false,
  });

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

  const result = notes.map((n) => (
    <Note
      key={n.id}
      title={n.title}
      content={n.content}
      date={n.date}
      id={n.id}
      deleteNote={deleteNote}
      handleOpen={handleOpen}
    />
  ));

  return (
    <div className="results-container">
      {result}
      {openModal.id !== null && (
        <NoteModal
          openModal={openModal}
          handleClose={handleClose}
          notes={notes}
        />
      )}
    </div>
  );
};

export default Results;
