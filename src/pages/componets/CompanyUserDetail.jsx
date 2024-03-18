import { Button, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import AllIcons from "../../icons/AllIcons";
import { useLocation, useNavigate } from "react-router-dom";

const CompanyUserDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { userObj } = location.state;

  const handleGoBack = () => {
    navigate("/userList");
  };
  return (
    <>
      <Tooltip title="Back" arrow>
        <IconButton onClick={handleGoBack} sx={{ mb: 4 }}>
          <Button
            variant="outlined"
            sx={{ borderRadius: "50%", height: "4rem", width: "3rem" }}
            startIcon={<AllIcons.ArrowBackIcon sx={{ fontSize: 30 }} />}
          />
        </IconButton>
      </Tooltip>
      <Paper sx={{ width: "auto", p: 5 }} elevation={8}>
        <Typography variant="h5" mb={4} gutterBottom>
          User Details
        </Typography>
        <Typography variant="body1" mb={2} gutterBottom>
          <strong>Username :</strong> {userObj?.username}
        </Typography>

        <Typography variant="body1" mb={2} gutterBottom>
          <strong>Email:</strong> {userObj?.email}
        </Typography>

        <Typography variant="body1" mb={2} gutterBottom>
          <strong>ID:</strong> {userObj?.id}
        </Typography>

        <Typography variant="body1" mb={2} gutterBottom>
          <strong>Role:</strong> {userObj?.role}
        </Typography>

        <Typography variant="body1" mb={2}>
          <strong>Detail:</strong> {userObj?.detail}
        </Typography>
      </Paper>
    </>
  );
};

export default CompanyUserDetail;
