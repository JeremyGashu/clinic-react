import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux'
import { Typography } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3d5afe',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const createData = (clinicState) => {
  const finalParsed = []
  clinicState.clinicInfo.data.doctors.forEach(doctor => {
    finalParsed.push({
      name : doctor.name, speciality : doctor.speciality, gender : doctor.gender, address : doctor.address
    })
  })
  return finalParsed
}


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const DoctorsTable = () => {
  const classes = useStyles();
  const clinicState = useSelector(state => state.clinicState)

  const rows = clinicState.fetchReady ? createData(clinicState) : []
  return (
    clinicState.fetchReady ?  <TableContainer style={{marginTop:'25px'}} component={Paper}>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
        <StyledTableCell align="right">Photo</StyledTableCell>
          <StyledTableCell align="right">Name</StyledTableCell>
          <StyledTableCell align="right">Speciality</StyledTableCell>
          <StyledTableCell align="right">Gender</StyledTableCell>
          <StyledTableCell align="right">Address</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={Math.random()}>
            <StyledTableCell align="right">{'Photo'}</StyledTableCell>
            <StyledTableCell align="right">{row.name}</StyledTableCell>
            <StyledTableCell align="right">{row.speciality}</StyledTableCell>
            <StyledTableCell align="right">{row.gender}</StyledTableCell>
            <StyledTableCell align="right">{row.address}</StyledTableCell>

            {/* {//DELETE BUTTON} */}
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer> : <Typography>Loading...</Typography>
  )
}

export default DoctorsTable


