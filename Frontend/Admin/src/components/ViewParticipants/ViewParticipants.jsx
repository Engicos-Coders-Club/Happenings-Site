import React, { useState } from "react";
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
} from "@material-ui/core";
import {
  ArrowBack as ArrowBackIcon,
  Search as SearchIcon,
} from "@material-ui/icons";
import EventsTableRow from "./EventsTableRow";
import { useNavigate } from "react-router-dom";

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
    // padding: '0.5rem',
  },
}));

const EventsTable = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [expandedRows, setExpandedRows] = useState([]);
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
        <Typography variant="subtitle1" className={classes.eventHeader}>
          Sort by College&nbsp;
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

      <Typography variant="subtitle1" className={classes.eventHeader}>
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

      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>ID Proof</TableCell>
            <TableCell>Attendance</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map(
            (item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase()) && (
                <EventsTableRow
                  key={item.id}
                  item={item}
                  isRowExpanded={isRowExpanded}
                  handleCheckboxToggle={handleCheckboxToggle}
                  handleRowExpand={handleRowExpand}
                />
              )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default EventsTable;
