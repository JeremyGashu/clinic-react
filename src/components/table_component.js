import React, {useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from 'react-redux'
import { getAdminDataRequest } from '../actions/admin_actions';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('AAU Clinic', 'Ermias Gashu', 200, 3000, 20000, 400000),
  createData('AAU Clinic', 'Ermias Gashu', 200, 3000, 20000, 400000),
  createData('AAU Clinic', 'Ermias Gashu', 200, 3000, 20000, 400000),
  createData('AAU Clinic', 'Ermias Gashu', 200, 3000, 20000, 400000),
  
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const CustomizedTables = () => {
  const classes = useStyles();

  const dispatch = useDispatch()
  const adminState = useSelector(state => state.adminState)

  useEffect(() => {
      dispatch(getAdminDataRequest())
  }, [])
  
  console.log(adminState)

  return (
    <TableContainer style={{marginTop:'25px'}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Clinic's Name</StyledTableCell>
            <StyledTableCell align="right">User Name</StyledTableCell>
            <StyledTableCell align="right">Patients today</StyledTableCell>
            <StyledTableCell align="right">Total patients</StyledTableCell>
            <StyledTableCell align="right">Daily income</StyledTableCell>
            <StyledTableCell align="right">Total income</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={Math.random()}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomizedTables