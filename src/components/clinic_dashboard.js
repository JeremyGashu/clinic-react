import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Person from '@material-ui/icons/Person';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { withStyles } from '@material-ui/core/styles';

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



    return (
        <Grid container>
				<Grid item xs={12} md={6} lg={3}>
					<Card className={classes.root}>
						<CardActionArea
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<i className="material-icons" style={{ color: '#3d5afe', fontSize: '100px' }}>
								#
							</i>
							{/* <AttachMoneyIcon m style={{fontSize:'100px', color:'#3d5afe', alignSelf:'center'}} /> */}
							<CardContent
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
								}}
							>
                                <Typography gutterBottom variant="h3" component="h2">
									20
								</Typography>
								<Typography gutterBottom variant="h5" component="h2" style={{ color: 'grey' }}>
									Number of customers
								</Typography>
								
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={3}>
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
                                <Typography gutterBottom variant="h3" component="h2">
									2
								</Typography>
								<Typography gutterBottom variant="h5" component="h2" style={{ color: 'grey' }}>
									New customers
								</Typography>
								
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={3}>
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
                                <Typography gutterBottom variant="h3" component="h2">
								20000 ETB
								</Typography>
								<Typography gutterBottom variant="h5" component="h2" style={{ color: 'grey' }}>
									Today's Income
								</Typography>
								
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={3}>
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
                                <Typography gutterBottom variant="h3" component="h2">
									20000 ETB
								</Typography>
								<Typography gutterBottom variant="h5" component="h2" style={{ color: 'grey' }}>
									Total Revenue
								</Typography>
								
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
    )
}


export default withStyles(styles)(ClinicDashboard)