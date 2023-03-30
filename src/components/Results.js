import Note from "./Note";
import { useConfirm } from "material-ui-confirm";

const Results = ({ notes, setNotes, handleOpen }) => {
  const confirm = useConfirm();

  const deleteNote = (id) => {
    confirm({ description: "This note will be permanently deleted." })
      .then(() => {
        const filteredNotes = notes.filter((n) => n.id !== id);
        localStorage.setItem("notes", JSON.stringify(filteredNotes));
        setNotes(filteredNotes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const archiveNote = (id) => {
    setNotes(
      notes.map((n) => {
        return n.id === id
          ? {
              ...n,
              archived: !n.archived,
            }
          : n;
      })
    );
  };

  const moveNote = (id) => {
    const filteredNote = notes.filter((n) => n.id === id);
    const [noteObj] = filteredNote;
    const copy = [...notes];
    copy.push(copy.splice(copy.indexOf(noteObj), 1)[0]);
    setNotes(copy);
  };

  const activeNotes = notes.map(
    (n) =>
      !n.archived && (
        <Note
          key={n.id}
          id={n.id}
          notes={notes}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
          moveNote={moveNote}
          handleOpen={handleOpen}
        />
      )
  );

  const archivedNotes = notes.map(
    (n) =>
      n.archived && (
        <Note
          key={n.id}
          id={n.id}
          notes={notes}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
          moveNote={moveNote}
          handleOpen={handleOpen}
        />
      )
  );

  const styles = {
    display: "flex",
    flexWrap: "wrap",
    margin: "20px 20px 10px 10px",
  };

  return (
    <>
      <div style={styles}>{activeNotes}</div>
      <div style={styles}>{archivedNotes}</div>
    </>
  );
};

export default Results;
