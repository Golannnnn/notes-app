import Note from "./Note";

const Results = ({ notes, deleteNote }) => {
  const result = notes.map((n) => (
    <Note
      key={n.id}
      content={n.content}
      date={n.date}
      id={n.id}
      deleteNote={deleteNote}
    />
  ));

  return <div className="results-container">{result}</div>;
};

export default Results;
