import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { IconButton, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

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
	const finalParsed = [];
	clinicState.clinicInfo.data.payments.forEach((payment) => {
		finalParsed.push({
			billNo: payment.billNo,
			patientName: payment.patientName,
			doctor: payment.doctor,
			charges: payment.charges,
			vat: payment.vat,
			total: payment.total,
		});
	});
	return finalParsed;
};

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

const PaymentsTable = () => {
	const classes = useStyles();
	const clinicState = useSelector((state) => state.clinicState);

	const rows = clinicState.fetchReady ? createData(clinicState) : [];

	console.log(clinicState);

	return clinicState.fetchReady ? (
		<TableContainer style={{ marginTop: '25px' }} component={Paper}>
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="right">Bill #</StyledTableCell>
						<StyledTableCell align="right">Patient Name</StyledTableCell>
						<StyledTableCell align="right">Doctor</StyledTableCell>
						<StyledTableCell align="right">Charges</StyledTableCell>
						<StyledTableCell align="right">VAT</StyledTableCell>
						<StyledTableCell align="right">Total</StyledTableCell>
						<StyledTableCell align="right">Actions</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={Math.random()}>
							<StyledTableCell align="right">{row.billNo}</StyledTableCell>
							<StyledTableCell align="right">{row.patientName}</StyledTableCell>
							<StyledTableCell align="right">{row.doctor}</StyledTableCell>
							<StyledTableCell align="right">{row.charges}</StyledTableCell>
							<StyledTableCell align="right">{row.vat}</StyledTableCell>
							<StyledTableCell align="right">{row.total}</StyledTableCell>
							<StyledTableCell align="right">
								<IconButton>
									<Delete style={{ color: 'red', fontSize: '20px' }} />
								</IconButton>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	) : (
		<Typography>Loading...</Typography>
	);
};

export default PaymentsTable;
