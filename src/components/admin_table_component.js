import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminDataRequest } from '../actions/admin_actions';
import { Typography } from '@material-ui/core';
import {
	getTotalPatientsTotal,
	getPatientsToday,
	getTotalIncomeOfSpecificClinic,
	getTodaysIncomeOfSpecificClinic,
} from '../utils/function_sets';

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

const createData = (adminState) => {
	const finalParsed = [];
	adminState.adminData.clinics.forEach((clinic) => {
		finalParsed.push({
			name: clinic.name,
			phoneNo: clinic.phoneNo,
			userRegisteredName: clinic.userRegisteredName,
			patientToday: getPatientsToday(clinic._id, adminState.adminData.patients),
			patientTotal: getTotalPatientsTotal(clinic._id, adminState.adminData.patients),
			daylyIncome: getTodaysIncomeOfSpecificClinic(clinic._id, adminState.adminData.payments),
			totalIncome: getTotalIncomeOfSpecificClinic(clinic._id, adminState.adminData.payments),
		});
	});
	return finalParsed;
};

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

const CustomizedTables = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const adminState = useSelector((state) => state.adminState);

	const rows = adminState.fetchReady ? createData(adminState) : [];

	useEffect(() => {
		dispatch(getAdminDataRequest());
	}, []);

	return adminState.fetchReady ? (
		<TableContainer style={{ marginTop: '25px' }} component={Paper}>
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="right">Clinic's Name</StyledTableCell>
						<StyledTableCell align="right">User Name</StyledTableCell>
						<StyledTableCell align="right">Phone number</StyledTableCell>
						<StyledTableCell align="right">Patients today</StyledTableCell>
						<StyledTableCell align="right">Total patients</StyledTableCell>
						<StyledTableCell align="right">Daily income in ETB</StyledTableCell>
						<StyledTableCell align="right">Total income in ETB</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={Math.random()}>
							<StyledTableCell align="right">{row.name}</StyledTableCell>
							<StyledTableCell align="right">{row.userRegisteredName}</StyledTableCell>
							<StyledTableCell align="right">{row.phoneNo}</StyledTableCell>
							<StyledTableCell align="right">{row.patientToday}</StyledTableCell>
							<StyledTableCell align="right">{row.patientTotal}</StyledTableCell>
							<StyledTableCell align="right">{row.daylyIncome}</StyledTableCell>
							<StyledTableCell align="right">{row.totalIncome}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	) : (
		<Typography gutterBottom variant="h5" component="h2" style={{ color: 'grey' }}>
			Today's Income
		</Typography>
	);
};

export default CustomizedTables;
