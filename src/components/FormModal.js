import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Form from "./Form";

const FormModal = ({ notes, setNotes, openModal, handleClose }) => {
  const filteredNotes = notes.filter((n) => n.id === openModal.id);
  const [noteObj] = filteredNotes;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 340,
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: 1,
    boxShadow: 24,
    paddingRight: 1,
    paddingLeft: 1,
  };

  return (
    <Modal
      open={openModal.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style}>
        <CardContent>
          <IconButton
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Form
            notes={notes}
            setNotes={setNotes}
            openModal={openModal}
            handleClose={handleClose}
            noteObj={noteObj}
          />
        </CardContent>
      </Card>
    </Modal>
  );
};

export default FormModal;
