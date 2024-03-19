import { useState } from "react";
import AllIcons from "../icons/AllIcons";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { ActionType, TableHeader } from "../pages/constants/Const";
import UserDialog from "../pages/componets/UserDialog";
import PaginationTable from "../pages/componets/Pagination";
import { UserDataConst } from "../pages/constants/userConstants/UserListConst";
import CompanyUserDetail from "../pages/componets/CompanyUserDetail";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import {
  StyledAddBtnOnTable,
  StyledEditBtnOnTable,
} from "../styleComponent/styleComponts";

const UserList = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [clickType, setClickType] = useState("");
  const [userData, setUserData] = useState(UserDataConst);
  const [pageNumber, setPageNumber] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const navigate = useNavigate();

  const displayUserDetail = (obj) => {
    setIsDialogOpen(true);
    setUserObj(obj);
    setClickType(ActionType?.detail);
    navigate("/userDetail", { state: { userObj: obj } });
  };

  const editUserDetail = (event, obj) => {
    event.stopPropagation();
    setIsDialogOpen(true);
    setUserObj(obj);
    setClickType(ActionType?.edit);
  };

  const deleteUser = (event, obj) => {
    event.stopPropagation();
    setUserObj(obj);
    setIsDialogOpen(true);
    setClickType(ActionType?.delete);
  };

  const addUser = () => {
    setIsDialogOpen(true);
    setClickType(ActionType?.add);
  };

  return (
    <>
      <>
        <StyledAddBtnOnTable>
          <Tooltip title="Add User" arrow>
            <Button variant="contained" onClick={addUser}>
              <AllIcons.AddIcon />
              Add User{" "}
            </Button>
          </Tooltip>
        </StyledAddBtnOnTable>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {TableHeader?.map((item) => {
                    return (
                      <TableCell align={item.align} sx={{ fontWeight: "bold" }}>
                        {item?.hName}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>

              <TableBody>
                {userData
                  ?.slice(
                    pageNumber * rowsPerPage,
                    pageNumber * rowsPerPage + rowsPerPage
                  )
                  ?.map((row, index) => {
                    return (
                      <TableRow
                        hover
                        tabIndex={-1}
                        key={row.id}
                        onClick={() => displayUserDetail(row)}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell align="left">
                          {pageNumber * rowsPerPage + index + 1}
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {row.username}
                        </TableCell>
                        <TableCell align="left">{row.id}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell
                          align="left"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {row.role}
                        </TableCell>
                        <TableCell align="left">
                          <StyledEditBtnOnTable>
                            <Tooltip title="Edit" arrow>
                              <AllIcons.EditIcon
                                color="info"
                                sx={{ pr: 1 }}
                                onClick={(e) => editUserDetail(e, row)}
                              />
                            </Tooltip>
                            <Tooltip title="Delete" arrow>
                              <AllIcons.DeleteIcon
                                color="error"
                                onClick={(e) => deleteUser(e, row)}
                              />
                            </Tooltip>
                          </StyledEditBtnOnTable>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <PaginationTable
          userData={userData}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </>

      {clickType !== ActionType?.detail && clickType && (
        <UserDialog
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          clickType={clickType}
          userObj={userObj}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </>
  );
};

export default UserList;
