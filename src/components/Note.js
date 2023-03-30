import { format } from "date-fns";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";

const Note = ({ id, notes, deleteNote, archiveNote, moveNote, handleOpen }) => {
  const filteredNote = notes.filter((n) => n.id === id);
  const [noteObj] = filteredNote;
  const lastNote = noteObj === notes[notes.length - 1];

  return (
    <>
      <Card
        sx={{
          minWidth: { xs: "100%", sm: 275 },
          maxWidth: { sm: 300, md: 300, lg: 300, xl: 300 },
          backgroundColor: noteObj.archived ? "#1111" : "#feff9c",
          ":hover": {
            boxShadow: 5,
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <CardContent>
          <div
            className="title-container"
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              marginLeft: "-13px",
              marginRight: "-13px",
              marginTop: "-5px",
            }}
          >
            <div
              className="title-wrapper"
              style={{
                display: "flex",
                alignItems: "start",
              }}
            >
              <Checkbox
                size="medium"
                checked={!!noteObj.archived}
                onChange={() => archiveNote(id)}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography
                sx={{
                  mt: 0.5,
                  textDecoration: noteObj.archived ? "line-through" : "none",
                  wordBreak: "break-word",
                }}
                variant="h5"
                component="div"
              >
                {noteObj.title}
              </Typography>
            </div>

            <div
              className="buttons-container"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                size="small"
                sx={{ color: "#636363" }}
                aria-label="edit"
                onClick={() => handleOpen(id)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: "#636363" }}
                aria-label="delete"
                onClick={() => deleteNote(id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>

          <Typography
            variant="body2"
            sx={{
              textDecoration: noteObj.archived ? "line-through" : "none",
              wordBreak: "break-word",
              whiteSpace: "pre-line",
            }}
          >
            {noteObj.content}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div className="date-container">
            {noteObj.update && (
              <Typography
                sx={{ fontSize: 11 }}
                color="text.secondary"
                gutterBottom
              >
                Updated: {format(new Date(noteObj.update), "MMM do p")}
              </Typography>
            )}
            <Typography
              sx={{ fontSize: 12 }}
              color="text.secondary"
              gutterBottom
            >
              Created: {format(new Date(noteObj.date), "MMM do p")}
            </Typography>
          </div>

          {!lastNote && !noteObj.archived && (
            <IconButton
              size="small"
              sx={{ color: "#636363" }}
              aria-label="delete"
              onClick={() => moveNote(id)}
            >
              <ArrowForwardIcon />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default Note;
