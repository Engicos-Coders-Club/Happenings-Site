import React, { useEffect } from "react";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Backdrop,
  CircularProgress,
  Tabs,
  Tab,
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Search as SearchIcon,
} from "@material-ui/icons";
import ParticipantCard from "./NewParticipantCard";
import { useState } from "react";
import {
  getAllColleges,
  getAllCollegeParticipants,
  getDay1CollegeParticipants,
  getDay2CollegeParticipants,
} from "../../store/actions/college";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import xlsx from "json-as-xlsx";

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
    justifyContent: "space-evenly",
    margin: "1rem 0",
    flexWrap: "wrap",
  },
  btnTab: {
    border: "1px dashed grey",
    color: "#000",
  },
  btnGrp: {
    margin: "1rem 0 1.5rem",
  },
  download: {
    background: "#FFB26B",
    margin: "1rem 0",
    "&:hover":{
      background: "#FF7B54",
    }
  },
}));

const downloadFile = (data) => {
  const customData = [
    {
      sheet: "College",
      columns: [
        { label: "Name", value: "name" }, // Top level data
        {
          label: "Event",
          value: (row) => (row.event ? row.event.event_name || "" : ""),
        },
        { label: "Phone Number", value: "phone" },
        { label: "ID Card", value: "id_card" },
      ],
      content: data,
    },
  ];

  let settings = {
    fileName: "CollegeParticipants", // Name of the resulting spreadsheet
    extraLength: 3, // A bigger number means that columns will be wider
  };

  xlsx(customData, settings);
};

const Participants = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [value, setValue] = useState("all");
  const [cid, setCid] = useState(null);

  useEffect(() => {
    initialize();
    dispatch({ type: "clearParticipants" });
  }, []);

  const initialize = async () => {
    await dispatch(getAllColleges());
  };

  const { colleges, loading, loadingCollege, participants, clearMessage } =
    useSelector((state) => state.college);
  const { message, loadingAttendance } = useSelector((state) => state.college);

  useEffect(() => {
    if (message) {
      alert(message);
      // put toast
      dispatch({ type: "clearMessage" });
    }
  }, [message]);

  const handleChange = (event, newValue) => {
    //console.log('Selected tab value:', newValue);
    setValue(newValue);
    if (newValue == "day1") dispatch(getDay1CollegeParticipants(cid));
    else if (newValue == "day2") dispatch(getDay2CollegeParticipants(cid));
    else dispatch(getAllCollegeParticipants(cid));
  };

  const handleCollege = (e) => {
    dispatch(getAllCollegeParticipants(e.target.value));
    setCid(e.target.value);
  };

  if (loading || !colleges)
    return (
      <Backdrop open={true}>
        <CircularProgress />
      </Backdrop>
    );
  else
    return (
      <Container maxWidth="xl">
        <div className={classes.header}>
          <Typography variant="h4" className={classes.headTitle}>
            College PARTICIPANTS
          </Typography>
        </div>

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
            <Select
              labelId="college-label"
              label="Select College"
              onChange={handleCollege}
            >
              <MenuItem value="" disabled>
                Select College
              </MenuItem>
              {colleges.map((ele) => (
                <MenuItem key={ele.id} value={ele.id}>
                  {ele.college_name}
                </MenuItem>
              ))}
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

        {/* ------------------------ excel button ----------------- */}
        {participants && (
          <Button
            size="large"
            className={classes.download}
            variant="contained"
            onClick={() => downloadFile(participants)}
          >
            Download as excel
          </Button>
        )}

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
            label="All days"
            value="all"
          ></Tab>
          <Tab
            variant="contained"
            value="day1"
            className={classes.btnTab}
            label="Day 1"
          ></Tab>
          <Tab
            variant="contained"
            value="day2"
            className={classes.btnTab}
            label="Day 2"
          ></Tab>
        </Tabs>

        <div className={classes.eventContent}>
          {!participants && (
            <Typography variant="subtitle1" sx={{ color: "#ACB1D6" }}>
              select a college
            </Typography>
          )}
          {loadingCollege ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "200px",
                bgcolor: "#F8F6F4",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <>
              {participants &&
                participants.map(
                  (member) =>
                    member.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) && (
                      <ParticipantCard key={member.id} member={member} />
                    )
                )}
            </>
          )}
        </div>
      </Container>
    );
};

export default Participants;
