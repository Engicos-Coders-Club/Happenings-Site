import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TextField,
  TableRow,
  TableCell,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Backdrop,
  CircularProgress,
  Box,
  Button,
} from "@material-ui/core";
import {
  ArrowBack as ArrowBackIcon,
  Search as SearchIcon,
} from "@material-ui/icons";
import EventsTableRow from "./EventsTableRow";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getEventParticipants,
  getEventParticipantsByCollege,
  getAllColleges,
} from "../../store/actions/college";
import EventParticipantCard from "./EventParticipantCard";
import xlsx from "json-as-xlsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  arrowIcon: {
    marginRight: theme.spacing(1),
  },
  textLink: {
    marginRight: theme.spacing(2),
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  searchBar: {
    marginRight: theme.spacing(2),
  },
  table: {
    marginTop: theme.spacing(2),
  },
  tableHead: {
    backgroundColor: "rgba(255, 239, 153, 1)",
    fontWeight: "bold",
  },
  body: {
    margin: theme.spacing(2),
  },
  inputContainer: {
    borderColor: "orange",
    margin: "2rem 0",
  },
  eventHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontStyle: "italic",
    fontWeight: "bold",
    margin: "1.5rem 0",
    textTransform: "uppercase",
    // padding: '0.5rem',
  },
  eventContent: {
    display: "flex",
    gap: "1rem",
    justifyContent: "space-evenly",
    margin: "1rem 0",
    flexWrap: "wrap",
  },
  download: {
    background: "#FFB26B",
    marginBottom: "1rem",
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
          value: (row) => (row.college ? row.college.college_name || "" : ""),
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

const EventsTable = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { loading, participants, colleges, loadingEvent } = useSelector(
    (state) => state.college
  );

  const initialize = async () => {
    await dispatch(getEventParticipants(id));
    await dispatch(getAllColleges());
  };

  useEffect(() => {
    initialize();
    dispatch({type: "clearParticipants"})
  }, []);

  const classes = useStyles();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [expandedRows, setExpandedRows] = useState([]);
  const [cid, setCid] = useState("");
  const [data, setData] = useState([
    {
      name: "John Doe",
      date: "2023-05-15",
      phone: "123-456-7890",
      idProof: "ID1234",
      attendance: false,
      id: "1",
    },
    {
      name: "Jane Smith",
      date: "2023-05-16",
      phone: "987-654-3210",
      idProof: "ID5678",
      attendance: false,
      id: "2",
    },
  ]);

  const { message, loadingAttendance } = useSelector((state) => state.college);

  useEffect(() => {
    if (message) {
      alert(message);
      // put toast
      dispatch({ type: "clearMessage" });
    }
  }, [message]);

  const handleRowExpand = (row) => {
    setExpandedRows((prevExpandedRows) => {
      if (prevExpandedRows.includes(row)) {
        return prevExpandedRows.filter((r) => r !== row);
      } else {
        return [...prevExpandedRows, row];
      }
    });
  };

  const isRowExpanded = (itemId) => expandedRows.includes(itemId);

  const handleCheckboxToggle = (itemId) => {
    setData((prevData) => {
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

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleBackClick = () => {
    navigate("/participants");
  };

  const handleCollege = (e) => {
    setCid(e.target.value);
    dispatch(getEventParticipantsByCollege(id, e.target.value));
  };

  if (loading)
    return (
      <Backdrop open={true}>
        <CircularProgress />
      </Backdrop>
    );
  else
    return (
      <div className={classes.body}>
        <div className={classes.root}>
          <IconButton className={classes.arrowIcon} onClick={handleBackClick}>
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="subtitle1"
            component="a"
            href="#"
            className={classes.textLink}
          >
            Back to Events
          </Typography>
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
              value={cid}
              labelId="college-label"
              label="Select College"
              onChange={handleCollege}
            >
              <MenuItem value="" disabled>
                Select College
              </MenuItem>
              {colleges &&
                colleges.map((ele) => (
                  <MenuItem key={ele.id} value={ele.id}>
                    {ele.college_name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>

        <Typography variant="h5" className={classes.eventHeader}>
          Participant Data&nbsp;
          <svg
            width="20"
            height="20"
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
        {/* ------------------------ excel button ----------------- */}
        {participants && (
          <Button
            variant="contained"
            onClick={() => downloadFile(participants)}
            className={classes.download}
          >
            Download as excel
          </Button>
        )}
        <div>
          {loadingEvent ? (
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
              <Typography sx={{ width: "100%" }} variant="h6">
                Number of participants: {participants && participants?.length}
              </Typography>
              <div className={classes.eventContent}>
                {participants &&
                  participants.map(
                    (member) =>
                      member.name
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) && (
                        <EventParticipantCard
                          key={member.id}
                          member={member}
                          handleCheckboxToggle={handleCheckboxToggle}
                        />
                      )
                  )}
              </div>
            </>
          )}
        </div>
      </div>
    );
};

export default EventsTable;
