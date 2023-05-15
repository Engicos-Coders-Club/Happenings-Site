import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton, Table, TableHead, TableBody, TextField, TableRow, TableCell } from '@material-ui/core';
import { ArrowBack as ArrowBackIcon, Search as SearchIcon } from '@material-ui/icons';
import EventsTableRow from './EventsTableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  arrowIcon: {
    marginRight: theme.spacing(1),
  },
  textLink: {
    marginRight: theme.spacing(2),
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  searchBar: {
    marginRight: theme.spacing(2),
  },
  table: {
    marginTop: theme.spacing(2),
  },
  tableHead: {
    backgroundColor: 'rgba(255, 239, 153, 1)',
    fontWeight: 'bold',
  },
  body: {
    margin: theme.spacing(2),
  },
}));

const EventsTable = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const [expandedRows, setExpandedRows] = useState([]);
  const [data, setData] = useState([
    { name: 'John Doe', date: '2023-05-15', phone: '123-456-7890', idProof: 'ID1234', attendance: false, id: '1'},
    { name: 'Jane Smith', date: '2023-05-16', phone: '987-654-3210', idProof: 'ID5678', attendance: false, id: '2' },
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

  return (
    <div className={classes.body}>
      <div className={classes.root}>
        <IconButton className={classes.arrowIcon}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="subtitle1" component="a" href="#" className={classes.textLink}>
          Back to Events
        </Typography>
        <TextField
          className={classes.searchBar}
          variant="outlined"
          placeholder="Search"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>

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
        {data.map((item) => (
            item.name.toLowerCase().includes(searchValue.toLowerCase()) && (
            <EventsTableRow
                key={item.id}
                item={item}
                isRowExpanded={isRowExpanded}
                handleCheckboxToggle={handleCheckboxToggle}
                handleRowExpand={handleRowExpand}
            />
            )
        ))}
        </TableBody>
        </Table>
    </div>
    );
};

export default EventsTable;