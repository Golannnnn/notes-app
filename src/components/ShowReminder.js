import { useEffect } from "react";
import { useConfirm } from "material-ui-confirm";

const ShowReminder = ({ content }) => {
  const confirm = useConfirm();

  useEffect(() => {
    confirm({
      title: "Reminder!",
      description: `Dont forget about ${content ? content : "your note"}`,
      confirmationText: "Okay",
      cancellationText: "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default ShowReminder;
