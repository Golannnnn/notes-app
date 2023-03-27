import { format } from "date-fns";

const Note = ({ content, date, id, deleteNote }) => {
  const formattedDate = format(new Date(date), "MMM do p");

  return (
    <div className="note">
      <p>{formattedDate}</p>
      <p>{content}</p>
      <button onClick={() => deleteNote(id)}>Delete</button>
    </div>
  );
};

export default Note;
