import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Checkbox,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    border: "2px dotted rgba(207, 207, 207, 1)",
    maxWidth: 250,
    marginBottom: "1rem",
    // margin: '0 auto',
    // cursor: 'pointer',
    // "&:hover" : {
    //   backgroundColor: '#f1f1f8',
    // }
  },
  eventName: {
    fontWeight: "bold",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  avatarHolder: {
    height: "220px",
    width: "220px",
  }
}));

const MyComponent = ({ member, handleCheckboxToggle }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.avatarHolder}>
          <img
            alt="Profile Picture"
            src={member.id_card}
            className={classes.avatar}
          />
        </div>
        <Typography>
          Name:
          <span className={classes.eventName}> {member.name} </span>
        </Typography>
        <Typography>
          Event:
          <span className={classes.eventName}> {member.eventName} </span>
        </Typography>
        <Typography>
          Event:
          <span className={classes.eventName}> {member.phone} </span>
        </Typography>
        <Typography className={classes.eventName}>
          Present:
          <Checkbox
            color="primary"
            checked={member.attendance}
            onClick={() => handleCheckboxToggle(member.id)}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyComponent;
