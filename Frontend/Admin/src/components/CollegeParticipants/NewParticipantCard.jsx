import React, { useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Checkbox,
  Avatar,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { markAttendance } from "../../store/actions/college";
import { ToastContainer, toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  card: {
    border: "2px dotted rgba(207, 207, 207, 1)",
    maxWidth: 250,
    // marginBottom: "1rem",
    // margin: '0 auto',
    // cursor: 'pointer',
    // "&:hover" : {
    //   backgroundColor: '#f1f1f8',
    // }
  },
  eventName: {
    // fontWeight: "bold",
    fontSize: "1rem",
    color: "#025464",
  },
  avatar: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  avatarHolder: {
    height: "220px",
    width: "220px",
  },
  btnPresent: {
    backgroundColor: "#FFD95A",
    marginTop: "1rem",
    "&:hover": {
      backgroundColor: "#FFF7D4",
    },
  },
}));

const MyComponent = ({ member }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleCheckboxToggle = (memberId) => {
    //console.log("attended " + memberId);
    dispatch(markAttendance(memberId));
  };

  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.avatarHolder}>
            <img
              alt="Profile Picture"
              src={member.id_card}
              className={classes.avatar}
            />
          </div>
          <Typography variant="body2">
            Name:
            <span className={classes.eventName}> {member.name} </span>
          </Typography>
          <Typography variant="body2">
            Phone:
            <span className={classes.eventName}> {member.phone} </span>
          </Typography>
          <Typography variant="body2">
            Event:
            <span className={classes.eventName}>
              {" "}
              {member.college
                ? member.college.college_name
                : member.event.event_name}{" "}
            </span>
          </Typography>
          <Button
            disabled={member.has_attended}
            variant="contained"
            size="small"
            onClick={() => handleCheckboxToggle(member.id)}
            className={classes.btnPresent}
          >
            present
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default MyComponent;
