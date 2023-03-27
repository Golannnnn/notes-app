import { format } from "date-fns";

const Note = ({ title, content, date, id, deleteNote }) => {
  const formattedDate = format(new Date(date), "MMM do p");

  return (
    <div className="note">
      <p>{formattedDate}</p>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={() => deleteNote(id)}>Delete</button>
    </div>
  );
};

export default Note;
