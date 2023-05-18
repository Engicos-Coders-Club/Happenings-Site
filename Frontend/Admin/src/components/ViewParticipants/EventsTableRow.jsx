import React, { useState } from 'react';
import { TableRow, TableCell, Checkbox, IconButton, Collapse, Typography } from '@material-ui/core';
import { ArrowDownwardOutlined } from '@material-ui/icons';

const EventsTableRow = ({ item, isRowExpanded, handleCheckboxToggle, handleRowExpand }) => {

  return (
    <React.Fragment>
      <TableRow key={item.name}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.date}</TableCell>
        <TableCell>{item.phone}</TableCell>
        <TableCell>{item.idProof}</TableCell>
        <TableCell>
          <Checkbox color="primary" checked={item.attendance} onClick={() => handleCheckboxToggle(item.id)} />
        </TableCell>
        <TableCell>
          <IconButton onClick={() => handleRowExpand(item.id)}>
            <ArrowDownwardOutlined />
          </IconButton>
        </TableCell>
      </TableRow>
      {isRowExpanded(item.id) && (
        <TableRow>
          <TableCell colSpan={6}>
            <Collapse in={true} timeout="auto" unmountOnExit>
              <Typography variant="body2">{item.id}</Typography>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
};

export default EventsTableRow;
