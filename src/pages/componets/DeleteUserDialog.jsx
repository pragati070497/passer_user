import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import AllIcons from "../../icons/AllIcons";

const DeleteUserDialog = (props) => {
  const { userObj, handleClose, userData, setUserData } = props;

  const handleDeleteUser = () => {
    const index = userData?.findIndex((item) => item.id === userObj.id);
    const rows = [...userData];
    rows.splice(index, 1);
    setUserData(rows);
    handleClose();
  };

  return (
    <>
      <DialogTitle>Delete User</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <AllIcons.CloseIcon />
      </IconButton>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are You Sure You Want To Delete This User?
        </DialogContentText>
      </DialogContent>
      <br />
      <DialogActions>
        <Button variant="contained" onClick={handleDeleteUser}>
          Delete
        </Button>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </>
  );
};

export default DeleteUserDialog;
