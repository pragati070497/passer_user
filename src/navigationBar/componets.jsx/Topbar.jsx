import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import AllIcons from "../../icons/AllIcons";
import { StyledTypography } from "../../styleComponent/styleComponts";

const TopBar = (props) => {
  const { openSidebar, handleDrawerOpen } = props;

  return (
    <>
      <AppBar color="info" position="fixed" open={openSidebar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(openSidebar && { display: "none" }) }}
          >
            <AllIcons.MenuIcon />
          </IconButton>
          <StyledTypography variant="h5" component="div">
            Passer Admin
          </StyledTypography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
