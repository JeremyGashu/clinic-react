import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Person from '@material-ui/icons/Person';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import {useDispatch, useSelector} from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { getPatientsToday, getTodaysIncomeOfSpecificClinic, getTotalIncomeOfSpecificClinic } from '../utils/function_sets';

const styles = (muiBaseTheme) => ({
	card: {
		maxWidth: 300,
		margin: 'auto',
		transition: '0.3s',
		boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
		'&:hover': {
			boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
		},
	},
	media: {
		paddingTop: '56.25%',
	},
	content: {
		textAlign: 'left',
		padding: muiBaseTheme.spacing.unit * 3,
	},
	divider: {
		margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
	},
	heading: {
		fontWeight: 'bold',
	},
	subheading: {
		lineHeight: 1.8,
	},
	avatar: {
		display: 'inline-block',
		border: '2px solid white',
		'&:not(:first-of-type)': {
			marginLeft: -muiBaseTheme.spacing.unit,
		},
	},
});

const ClinicDashboard = ({ classes }) => {

	const clinicState = useSelector(state => state.clinicState)
	if(clinicState.fetchReady) {
		console.log(clinicState.clinicInfo.data.payments)
		console.log(clinicState.clinicInfo.data.clinicInfo._id)
	}

    return (
        clinicState.fetchReady ? <Grid container style={{display:'flex', justifyContent:'space-evenly'}}>
		<Grid  item xs={12} md={6} lg={2}>
			<Card className={classes.root}>
				<CardActionArea
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<i className="material-icons hashtag" style={{ color: '#3d5afe', fontSize: '100px' }}>
						#
					</i>
					<CardContent
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<Typography style={{fontSize:'25px', fontWeight:'bolder'}} gutterBottom variant="h3" component="h2">
							{clinicState.clinicInfo.data.appointments.length}
						</Typography>
						<Typography gutterBottom variant="h6" component="h2" style={{ color: 'grey' }}>
							Appointments
						</Typography>
						
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
		<Grid item xs={12} md={6} lg={2}>
			<Card className={classes.root}>
				<CardActionArea
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<Person m style={{ fontSize: '115px', color: '#3d5afe', alignSelf: 'center' }} />
					<CardContent
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<Typography style={{fontSize:'25px', fontWeight:'bolder'}} gutterBottom variant="h3" component="h2">
							{getPatientsToday(clinicState.clinicInfo.data.clinicInfo._id, clinicState.clinicInfo.data.patients)}
						</Typography>
						<Typography gutterBottom variant="h6" component="h2" style={{ color: 'grey' }}>
							New Patients
						</Typography>
						
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
		<Grid item xs={12} md={6} lg={2}>
			<Card className={classes.root}>
				<CardActionArea
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<AttachMoneyIcon m style={{ fontSize: '115px', color: '#3d5afe', alignSelf: 'center' }} />
					<CardContent
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<Typography style={{fontSize:'25px', fontWeight:'bolder'}} gutterBottom variant="h3" component="h2">
						{getTodaysIncomeOfSpecificClinic(clinicState.clinicInfo.data.clinicInfo._id, clinicState.clinicInfo.data.payments)}
						</Typography>
						<Typography gutterBottom variant="h6" component="h2" style={{ color: 'grey' }}>
							Today's Income
						</Typography>
						
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
		<Grid item xs={12} md={6} lg={2}>
			<Card className={classes.root}>
				<CardActionArea
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<AccountBalanceIcon
						m
						style={{ fontSize: '115px', color: '#3d5afe', alignSelf: 'center' }}
					/>
					<CardContent
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<Typography style={{fontSize:'25px', fontWeight:'bolder'}} gutterBottom variant="h3" component="h2">
						{getTotalIncomeOfSpecificClinic(clinicState.clinicInfo.data.clinicInfo._id, clinicState.clinicInfo.data.payments)}
						</Typography>
						<Typography gutterBottom variant="h6" component="h2" style={{ color: 'grey' }}>
							Total Income
						</Typography>
						
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	</Grid> : <Typography>Loading...</Typography>
    )
}


export default withStyles(styles)(ClinicDashboard)