import {
  Alert,
  AlertTitle,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormHelperText,
  IconButton,
  Input,
  InputLabel,
} from "@mui/material";
import AllIcons from "../../icons/AllIcons";
import { useEffect, useState } from "react";
import {
  ActionType,
  editUserInfo,
  generateUniqueId,
  handleError,
} from "../constants/Const";
import { StyledFormHelperText } from "../../styleComponent/styleComponts";

const FormDialog = (props) => {
  const { userObj, handleClose, clickType, userData, setUserData } = props;

  const [formInfo, setFormInfo] = useState({
    username: "",
    email: "",
    role: "",
    id: 0,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setFormInfo({
      username: clickType === ActionType.edit ? userObj?.username : "",
      email: clickType === ActionType.edit ? userObj?.email : "",
      role: clickType === ActionType.edit ? userObj?.role : "",
    });
  }, [userObj, clickType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleForm = () => {
    const uniqueId = generateUniqueId();
    const errorsObj = handleError(formInfo);
    if (Object.keys(errorsObj).length > 0) {
      setErrors(errorsObj);
      return;
    } else {
      if (clickType === ActionType.edit) {
        setSuccessMessage("User data update successfully.");
        editUserInfo({ userData, formInfo, setUserData, userObj });
      } else {
        setSuccessMessage("User data add successfully.");
        const formInfoWithId = { id: uniqueId, ...formInfo };
        setUserData([formInfoWithId, ...userData]);
      }
    }
    setTimeout(() => {
      setSuccessMessage("");
      setFormInfo({ username: "", email: "", role: "" });
      handleClose();
    }, 2000);
  };

  return (
    <>
      {successMessage && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          {successMessage}
        </Alert>
      )}
      <DialogTitle>
        {clickType === ActionType.edit ? "Edit User" : "Add User"}
      </DialogTitle>
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
          <InputLabel>Name :</InputLabel>
          <Input
            id="standard-adornment-amount"
            fullWidth
            name="username"
            value={formInfo?.username}
            onChange={handleChange}
            error={errors.username}
          />
          <StyledFormHelperText>{errors.username}</StyledFormHelperText>
          <InputLabel>Email Id : </InputLabel>
          <Input
            id="standard-adornment-amount"
            fullWidth
            name="email"
            value={formInfo?.email}
            onChange={handleChange}
            error={errors?.email}
          />
          <StyledFormHelperText>{errors.email}</StyledFormHelperText>
          <InputLabel>Role :</InputLabel>
          <Input
            id="standard-adornment-amount"
            fullWidth
            name="role"
            value={formInfo?.role}
            onChange={handleChange}
            error={errors?.role}
          />
          <StyledFormHelperText>{errors.role}</StyledFormHelperText>
        </DialogContentText>
      </DialogContent>
      <br />
      <DialogActions>
        <Button type="submit" variant="contained" onClick={() => handleForm()}>
          {clickType === ActionType.edit ? "Update" : "Add"}
        </Button>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </>
  );
};

export default FormDialog;
