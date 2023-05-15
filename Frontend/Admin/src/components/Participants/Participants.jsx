import React from 'react';
import { Typography, TextField, Select, MenuItem, FormControl, InputLabel, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    // padding: '0.5rem',
    borderColor: 'orange',
  },
  selectContainer: {
    // position: 'relative',
    padding: '0.5rem',
  },
  eventHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: '0.5rem',
  },
  eventTitle: {
    color: 'orange',    
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
}));

const Participants = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography variant="h4" className={classes.textOrange}>
          PARTICIPANTS
        </Typography>
        <div className={classes.inputContainer}>
          <TextField
            type="text"
            placeholder="Search"
            variant="outlined"
            size="small"
            className={classes.inputField}
          />
          <svg className={classes.searchIcon} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7261 18.239H19.4162L18.952 17.7913C20.5769 15.9011 21.5552 13.4471 21.5552 10.7776C21.5552 4.82504 16.7301 0 10.7776 0C4.82504 0 0 4.82504 0 10.7776C0 16.7301 4.82504 21.5552 10.7776 21.5552C13.4471 21.5552 15.9011 20.5769 17.7913 18.952L18.239 19.4162V20.7261L26.5294 29L29 26.5294L20.7261 18.239ZM10.7776 18.239C6.64894 18.239 3.31618 14.9062 3.31618 10.7776C3.31618 6.64894 6.64894 3.31618 10.7776 3.31618C14.9062 3.31618 18.239 6.64894 18.239 10.7776C18.239 14.9062 14.9062 18.239 10.7776 18.239Z" fill="black"/>
            </svg>
        </div>
      </div>
    
      <div className={classes.inputContainer}>
      <Typography variant="h5" className={classes.eventHeaderText}>
        SELECT COLLEGE&nbsp;
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.4993 0.833338L32.166 16.5L16.4993 32.1667L13.7087 29.425L24.6754 18.4583L0.832682 18.4583L0.832682 14.5417L24.6754 14.5417L13.7087 3.575L16.4993 0.833338Z"
            fill="black"
            />
        </svg>
        </Typography>
            <br/>
        <FormControl variant="outlined" size="small" className={classes.selectContainer}>
          <InputLabel id="college-label">Select College</InputLabel>
          <Select labelId="college-label" label="Select College">
            <MenuItem value="">Select College</MenuItem>
            <MenuItem value="college1">College 1</MenuItem>
            <MenuItem value="college2">College 2</MenuItem>
            <MenuItem value="college3">College 3</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={classes.eventHeader}>
        <Typography variant="h5" className={classes.eventHeaderText}>
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
        <Card className={classes.card}>
        <CardContent>
            <Typography variant="h6" className={classes.eventName}>
            Event Name
            </Typography>
            <Typography variant="h6" className={classes.eventName}>
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
        
        <Card className={classes.card}>
        <CardContent>
            <Typography variant="h6" className={classes.eventName}>
            Event Name
            </Typography>
            <Typography variant="h6" className={classes.eventName}>
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
    </div>
  );
};

export default Participants;
