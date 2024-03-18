import { Button, FormHelperText, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledFormHelperText = styled(FormHelperText)`
  color: red !important;
  padding-bottom: 15px !important;
`;

export const StyledAddBtnOnTable = styled.div`
  display: flex;
  justify-content: end;
  padding-bottom: 2rem;
`;

export const StyledEditBtnOnTable = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledTypography = styled(Typography)`
  flex-grow: 1;
  display: flex !important;
  justify-content: center !important;
`;
