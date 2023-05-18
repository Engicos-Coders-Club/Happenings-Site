import React from "react";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  ButtonGroup,
  Tabs,
  Tab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Search as SearchIcon,
} from "@material-ui/icons";
import ParticipantCard from "./NewParticipantCard";
import img from "../../assets/happenings-logo.png";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "1rem",
    color: "orange",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  inputContainer: {
    borderColor: "orange",
    margin: "2rem 0",
  },
  selectContainer: {
    // display: 'block',
    margin: "1rem 0",
  },
  eventHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    fontStyle: "italic",
    fontWeight: "bold",
    // padding: '0.5rem',
  },
  eventName: {
    fontWeight: "bold",
  },
  headTitle: {
    borderColor: "rgba(255, 102, 0, 1)",
    fontWeight: "bold",
  },
  eventContent: {
    display: "flex",
    gap: "1rem",
    justifyContent: "flex-start",
    margin: "1rem 0",
  },
  btnTab: {
    border: "1px dashed grey",
    color: "#000",
  },
  btnGrp: {
    margin: "1rem 0 1.5rem",
  },
}));

const Participants = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const [member, setMember] = useState([
    {
      name: "John Doe",
      id_card: img,
      phone: "123-456-7890",
      attendance: false,
      id: "1",
      eventName: "A",
    },
    {
      name: "Jane Smith",
      id_card: img,
      phone: "987-654-3210",
      attendance: false,
      id: "2",
      eventName: "B",
    },
  ]);

  const handleCheckboxToggle = (itemId) => {
    setMember((prevData) => {
      return prevData.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            attendance: !item.attendance,
          };
        }
        return item;
      });
    });
  };

  return (
    <Container maxWidth="xl">
      <div className={classes.header}>
        <Typography variant="h4" className={classes.headTitle}>
          College PARTICIPANTS
        </Typography>
      </div>

      {/* <TextField
        className={classes.searchBar}
        variant="outlined"
        placeholder="Search"
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        value={searchValue}
        onChange={handleSearchChange}
      /> */}

      <div className={classes.inputContainer}>
        <Typography variant="h5" className={classes.eventHeader}>
          SELECT COLLEGE&nbsp;
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4993 0.833338L32.166 16.5L16.4993 32.1667L13.7087 29.425L24.6754 18.4583L0.832682 18.4583L0.832682 14.5417L24.6754 14.5417L13.7087 3.575L16.4993 0.833338Z"
              fill="black"
            />
          </svg>
        </Typography>

        <FormControl
          variant="outlined"
          fullWidth
          className={classes.selectContainer}
        >
          <InputLabel id="college-label">Select College</InputLabel>
          <Select labelId="college-label" label="Select College">
            <MenuItem value="" disabled>
              Select College
            </MenuItem>
            <MenuItem value="college1">College 1</MenuItem>
            <MenuItem value="college2">College 2</MenuItem>
            <MenuItem value="college3">College 3</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={classes.eventHeader}>
        <Typography variant="h5" className={classes.eventHeader}>
          VIEW EVENT PARTICIPANTS&nbsp;
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4993 0.833338L32.166 16.5L16.4993 32.1667L13.7087 29.425L24.6754 18.4583L0.832682 18.4583L0.832682 14.5417L24.6754 14.5417L13.7087 3.575L16.4993 0.833338Z"
              fill="black"
            />
          </svg>
        </Typography>
      </div>

      <Tabs
        className={classes.btnGrp}
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab
          variant="contained"
          className={classes.btnTab}
          label="all days"
        ></Tab>
        <Tab variant="contained" className={classes.btnTab} label="day 1"></Tab>
        <Tab variant="contained" className={classes.btnTab} label="day 2"></Tab>
      </Tabs>

      <div className={classes.eventContent}>
        {member.map(
          (member) =>
            member.name.toLowerCase().includes(searchValue.toLowerCase()) && (
              <ParticipantCard
                key={member.id}
                member={member}
                handleCheckboxToggle={handleCheckboxToggle}
              />
            )
        )}
      </div>
    </Container>
  );
};

export default Participants;
