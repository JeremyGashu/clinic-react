import React, {useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux'
import { IconButton, Typography } from '@material-ui/core';
import { getFormattedDate} from '../utils/function_sets'
import { Delete, Person } from '@material-ui/icons';

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
  clinicState.clinicInfo.data.appointments.forEach(appointment => {
    finalParsed.push({
      name : appointment.name, email : appointment.email, date : appointment.date, visitTime : appointment.visitTime, injury : appointment.injury, doctor : appointment.doctor
    })
  })
  return finalParsed
}


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const AppointmentsTable = () => {
  const classes = useStyles();
  const clinicState = useSelector(state => state.clinicState)

  const rows = clinicState.fetchReady ? createData(clinicState) : []

  useEffect(() => {
    //   dispatch(getAdminDataRequest())
  }, [])


  return (
    clinicState.fetchReady ?  <TableContainer style={{marginTop:'25px'}} component={Paper}>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="right">Photo</StyledTableCell>
          <StyledTableCell align="right">Name</StyledTableCell>
          <StyledTableCell align="right">Email</StyledTableCell>
          <StyledTableCell align="right">Date</StyledTableCell>
          <StyledTableCell align="right">Visit time</StyledTableCell>
          <StyledTableCell align="right">Doctor</StyledTableCell>
          <StyledTableCell align="right">Injury/Condition</StyledTableCell>
          <StyledTableCell align="right">Actions</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={Math.random()}>
            <StyledTableCell align="right"><Person style={{color:'#3d5afe', fontSize:'35px'}}/></StyledTableCell>
            <StyledTableCell align="right">{row.name}</StyledTableCell>
            <StyledTableCell align="right">{row.email}</StyledTableCell>
            <StyledTableCell align="right">{row.date}</StyledTableCell>
            <StyledTableCell align="right">{row.visitTime}</StyledTableCell>
            <StyledTableCell align="right">{row.doctor}</StyledTableCell>
            <StyledTableCell align="right">{row.injury}</StyledTableCell>
            <StyledTableCell align="right"><IconButton><Delete style={{color:'red', fontSize:'20px'}}/></IconButton></StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer> : <Typography>Loading...</Typography>
  )
}

export default AppointmentsTable