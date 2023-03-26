import { nanoid } from "nanoid";

const Results = ({ notes }) => {
  const result = notes.map((note) => (
    <span key={nanoid()}>{note.content}</span>
  ));

  return <div className="results-container">{result}</div>;
};

export default Results;
