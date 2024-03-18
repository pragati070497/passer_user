import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { ActionType, Transition } from "../constants/Const";
import DeleteUserDialog from "./DeleteUserDialog";
import FormDialog from "./FormDialog";

const UserDialog = (props) => {
  const {
    isDialogOpen,
    setIsDialogOpen,
    userObj,
    clickType,
    userData,
    setUserData,
    userId,
  } = props;

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Dialog
        open={isDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleClose()}
        aria-describedby="alert-dialog-slide-description"
        fullWidth="md"
        sx={{ padding: "2px" }}
      >
        {
          // clickType === ActionType.detail ? (
          //   <DetailDialog userObj={userObj} handleClose={handleClose} />
          // ) :
          clickType === ActionType.delete ? (
            <DeleteUserDialog
              userObj={userObj}
              handleClose={handleClose}
              userData={userData}
              setUserData={setUserData}
              userId={userId}
            />
          ) : (
            <FormDialog
              // userObj={userObj}
              userObj={clickType === ActionType.edit ? userObj : null}
              handleClose={handleClose}
              clickType={clickType}
              userData={userData}
              setUserData={setUserData}
            />
          )
        }
      </Dialog>
    </>
  );
};

export default UserDialog;
