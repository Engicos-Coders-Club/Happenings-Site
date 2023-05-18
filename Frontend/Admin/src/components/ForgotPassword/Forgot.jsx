import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
//import { updateUserPass } from "../../Actions/User";
import "./Forgot.css";

const Forgot = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();
  //const { user,message,loading,error} = useSelector((state) => state.user);

  const submitHandler = async (e) => {
    e.preventDefault();
    //await dispatch(updateUserPass(user._id, oldPassword, newPassword));
  };

  //   useEffect(() => {
  //     if (error) {
  //       alert.error(error);
  //       dispatch({ type: "clearErrors" });
  //     }
  //     if (message) {
  //       alert.success(message);
  //       dispatch({ type: "clearMessage" });
  //     }
  //   }, [alert, error, dispatch,message]);

  return (
    <div className="resetPassword">
      <form className="resetPasswordForm" onSubmit={submitHandler}>
        <Typography
          variant="h3"
          fontWeight={800}
          style={{ padding: "2vmax", textAlign: "center" }}
        >
          Happenings 2023
        </Typography>

        <input
          type="password"
          placeholder="Old Password"
          required
          className="updatePasswordInputs"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="New Password"
          required
          className="updatePasswordInputs"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button type="submit" variant="contained">Reset Password</Button>
      </form>
    </div>
  );
};

export default Forgot;
