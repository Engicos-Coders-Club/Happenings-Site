import React from 'react';
import { Typography,  Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: '2rem',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '1rem',
    color: 'orange',
    fontWeight: 'bold',
    textTransform: "uppercase",
  },
  selectContainer: {
    // display: 'block',
    margin: '1rem 0',
  },
  eventHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: "1.5rem"
    // padding: '0.5rem',
  },
  eventTitle: {
    color: 'orange', 
    // light bold
    fontWeight: 'bold',

  },
  searchIcon: {
    position: 'absolute',
    right: '1.1rem',
    pointerEvents: 'none',
  },
  card: {
    border: '2px dotted rgba(207, 207, 207, 1)',
    maxWidth: 250,
    marginBottom: '1rem',
    // margin: '0 auto',
    cursor: 'pointer',
    "&:hover" : {
      backgroundColor: '#f1f1f8',
    }
  },
  eventName: {
    fontWeight: 'bold',
  },
  orangeLine: {
    backgroundColor: 'orange',
    height: 2,
    margin: '10px 0',
    maxWidth: 170,
  },
  headTitle: {
    borderColor: 'rgba(255, 102, 0, 1)',
    fontWeight: 'bold',
  },
}));

const Participants = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/viewparticipants');
  };

  return (
    <Container maxWidth="xl">
      <div className={classes.header}>
        <Typography variant="h4" className={classes.headTitle}>
          event PARTICIPANTS
        </Typography>
      </div>
  
      <div className={classes.eventHeader}>
        <Typography variant="h5" className={classes.eventHeader}>
        VIEW EVENT PARTICIPANTS&nbsp;
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.4993 0.833338L32.166 16.5L16.4993 32.1667L13.7087 29.425L24.6754 18.4583L0.832682 18.4583L0.832682 14.5417L24.6754 14.5417L13.7087 3.575L16.4993 0.833338Z"
            fill="black"
          />
        </svg>
        </Typography>
      </div>

      <div className={classes.eventContent}>
        <Typography variant="h6" className={classes.eventTitle}>
        ON-STAGE EVENTS
        </Typography>
        <Card className={classes.card} onClick={handleCardClick}>
        <CardContent>
            <Typography variant="h6" className={classes.eventName}>
            Event Name
            </Typography>
            <Typography className={classes.eventName}>
            Event Name
            </Typography>
            <div className={classes.orangeLine} />
            <Typography>
            Max Participants = 00
            </Typography>
            <Typography>
            Registered = 00
            </Typography>
        </CardContent>
        </Card>     

        <Typography variant="h6" className={classes.eventTitle}>
        OFF-STAGE EVENTS
        </Typography>
        
        <Card className={classes.card} onClick={handleCardClick}>
        <CardContent>
            <Typography variant="h6" className={classes.eventName}>
            Event Name
            </Typography>
            <Typography className={classes.eventName}>
            Event Name
            </Typography>
            <div className={classes.orangeLine} />
            <Typography>
            Max Participants = 00
            </Typography>
            <Typography>
            Registered = 00
            </Typography>
        </CardContent>
        </Card>      
      </div>
      </Container>
  );
};

export default Participants;
