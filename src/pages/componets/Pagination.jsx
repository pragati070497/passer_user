import { TablePagination } from "@mui/material";

const PaginationTable = (props) => {
  const { userData, pageNumber, setPageNumber, rowsPerPage, setRowsPerPage } =
    props;

  const handleChangePage = (event, newPage) => {
    setPageNumber(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPageNumber(0);
  };

  return (
    <>
      <TablePagination
        component="div"
        rowsPerPageOptions={[10, 25, 50]}
        count={userData.length}
        page={pageNumber}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default PaginationTable;
