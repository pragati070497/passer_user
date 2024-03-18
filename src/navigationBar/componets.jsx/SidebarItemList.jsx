import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { DrawerHeader, SidebarMenuItem } from "../Constants/Const";
import AllIcons from "../../icons/AllIcons";
import { useNavigate } from "react-router-dom";

const SidebarItemList = (props) => {
  const { handleDrawerClose } = props;
  const navigate = useNavigate();

  return (
    <>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <AllIcons.ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {SidebarMenuItem.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            onClick={() => navigate("/userList")}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
};

export default SidebarItemList;
