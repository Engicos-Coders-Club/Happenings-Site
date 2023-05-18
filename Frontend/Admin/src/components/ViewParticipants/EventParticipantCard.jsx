import React, { useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Checkbox,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {markAttendance} from '../../store/actions/college'
import { useDispatch, useSelector } from "react-redux";

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
    objectFit: "contain"
  },
  avatarHolder: {
    height: "220px",
    width: "220px",
  }
}));

const EventParticipantCard = ({ member }) => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const {message} = useSelector((state)=>state.college)

  useEffect(()=>{
    if(message){
      // put toast
      console.log(message)
    }
  },[message])
  
  const handleCheckboxToggle = (value) => {
    //console.log("attended " + value);
    dispatch(markAttendance(value))  
  }

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
          College Name:
          <span className={classes.eventName}> {member.college?member.college.college_name:member.event.event_name} </span>
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

export default EventParticipantCard;
