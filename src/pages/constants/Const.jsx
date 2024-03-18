import { styled } from "@mui/material/styles";
import { Slide, createTheme } from "@mui/material";
import React from "react";

export const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ActionType = {
  detail: "Detail",
  edit: "Edit",
  delete: "Delete",
  add: "Add",
};

export const editUserInfo = (obj) => {
  const { userData, formInfo, setUserData, userObj } = obj;
  const updatedData = userData.map((item) => {
    if (item.id === userObj.id) {
      return { ...item, ...formInfo };
    }
    return item;
  });
  setUserData(updatedData);
};

export const generateUniqueId = () => {
  const random = Math.floor(Math.random() * 1000);
  return random * 120;
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidName = (string) => {
  const stringRegex = /^[a-zA-Z\s]+$/;
  return stringRegex.test(string);
};

export const handleError = (formInfo) => {
  let errorsObj = {};

  if (!formInfo.username) {
    errorsObj.username = "Username is required";
  } else if (!isValidName(formInfo.username)) {
    errorsObj.username = "Please enter a valid username";
  }
  if (!formInfo.role) {
    errorsObj.role = "Role is required";
  } else if (!isValidName(formInfo.role)) {
    errorsObj.role = "Please enter a valid role";
  }

  if (!formInfo.email) {
    errorsObj.email = "Email is required";
  } else {
    if (!isValidEmail(formInfo.email)) {
      errorsObj.email = "Please enter a valid email address";
    }
  }

  return errorsObj;
};

export const TableHeader = [
  { hName: "Sr. No.", align: "left" },
  { hName: "Name", align: "left" },
  { hName: "ID", align: "left" },
  { hName: "Email Id", align: "left" },
  { hName: "Role", align: "left" },
  { hName: "Action", align: "center" },
];
