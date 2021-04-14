import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppointmentsTable from './clinic_appointments_table';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { Link, NavLink } from 'react-router-dom';
import { Accessible, Add, CalendarToday, Dashboard, ExitToApp, Person } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { logOut } from '../actions/auth_actions';
import { getClinicInfoRequest } from '../actions/clinic_info_actions';
import Header from './header';
import { Backdrop, Button, CircularProgress, Fab, Fade, Modal, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { sendAppointmentData } from '../actions/appointment_actions';
import { TimeInput } from 'material-ui-time-picker';
import { formatAMPM } from '../utils/function_sets';

const drawerWidth = 280;
const styles = (theme) => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},

	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing.unit * 7 + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing.unit * 9 + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
});

const Appointments = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const appointmentState = useSelector((state) => state.appointmentState);

	useEffect(() => {
		dispatch(getClinicInfoRequest());
	}, []);
	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logOut());
		history.push('/');
	};

	const [state, setState] = useState(true);

	const handleDrawerOpen = () => {
		setState(true);
	};

	const handleDrawerClose = () => {
		setState(false);
	};
	const { classes, theme } = props;

	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [name, setName] = useState('initial');
	const [email, setEmail] = useState('someemail@gmail.com');
	const [date, setDate] = useState('12-12-2021');
	const [fromVisitTime, setFromVisitTime] = useState('10:30');
	const [toVisitTime, setToVisitTime] = useState('12:30');
	const [injury, setInjury] = useState('Headache');
	const [doctor, setDoctor] = useState('Ermias Gashu');

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handleInjuryChange = (e) => {
		setInjury(e.target.value);
	};
	const handleDoctorChange = (e) => {
		setDoctor(e.target.value);
	};
	const handleDateChange = (e) => {
		setDate(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			sendAppointmentData({ name, email, date, doctor, injury, visitTime: `${fromVisitTime}-${toVisitTime}` })
		);
		handleClose();
		dispatch(getClinicInfoRequest());
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Drawer
				variant="permanent"
				className={classNames(classes.drawer, {
					[classes.drawerOpen]: state,
					[classes.drawerClose]: !state,
				})}
				classes={{
					paper: classNames({
						[classes.drawerOpen]: state,
						[classes.drawerClose]: !state,
					}),
				}}
				open={state}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={state ? handleDrawerClose : handleDrawerOpen}>
						{state ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					<img width={130} style={{ marginBottom: '10px' }} src={logo} alt="logo" />
					<NavLink to="/clinic" style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<Dashboard />
							</ListItemIcon>
							<ListItemText
								disableTypography
								style={{ fontSize: '13px', fontFamily: 'sans-serif' }}
								primary="Dashboard"
							/>
						</ListItem>
					</NavLink>

					<NavLink to="/appointments" style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<CalendarToday />
							</ListItemIcon>
							<ListItemText
								disableTypography
								style={{ fontSize: '13px', fontFamily: 'sans-serif' }}
								primary="Appointments"
							/>
						</ListItem>
					</NavLink>
					<NavLink to="/patients" style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<Accessible />
							</ListItemIcon>
							<ListItemText
								disableTypography
								style={{ fontSize: '13px', fontFamily: 'sans-serif' }}
								primary="Patient"
							/>
						</ListItem>
					</NavLink>

					<NavLink to="/doctors" style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<Person />
							</ListItemIcon>
							<ListItemText
								disableTypography
								style={{ fontSize: '13px', fontFamily: 'sans-serif' }}
								primary="Doctors"
							/>
						</ListItem>
					</NavLink>

					<NavLink to="/payments" style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<MailIcon />
							</ListItemIcon>
							<ListItemText
								disableTypography
								style={{ fontSize: '13px', fontFamily: 'sans-serif' }}
								primary="Payment"
							/>
						</ListItem>
					</NavLink>
					<Link onClick={handleLogout} style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<ExitToApp />
							</ListItemIcon>
							<ListItemText
								disableTypography
								style={{ fontSize: '13px', fontFamily: 'sans-serif' }}
								primary="Logout"
							/>
						</ListItem>
					</Link>
				</List>
			</Drawer>
			<main style={{ paddingBottom: '60px' }} className={classes.content}>
				<Header />
				<Fab
					style={{ backgroundColor: 'blue', position: 'fixed', bottom: '75px', right: '25px' }}
					onClick={handleOpen}
				>
					<Add style={{ color: 'white' }} />
				</Fab>
				<AppointmentsTable />

				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={open}>
						<div
							className={classes.paper}
							style={{
								maxHeight: '600px',
								backgroundColor: 'white',
								maxWidth: '500px',
								padding: '30px',
								overflow: 'auto',
								paddingBottom: '200px',
								borderRadius: '30px',
							}}
						>
							<Avatar className={classes.avatar}>
								<CalendarToday />
							</Avatar>
							<Typography component="h1" variant="h5">
								Appointment
							</Typography>
							<form onSubmit={handleSubmit} className={classes.form}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
											onChange={handleNameChange}
											variant="outlined"
											required
											fullWidth
											id="name"
											label="Patient Name"
											name="name"
											autoComplete="name"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											onChange={handleEmailChange}
											variant="outlined"
											required
											fullWidth
											id="email"
											label="Email"
											name="email"
											autoComplete="email"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											onChange={handleDateChange}
											id="date"
											label="Date"
											type="date"
											defaultValue="2021-12-12"
											className={classes.textField}
											InputLabelProps={{
												shrink: true,
											}}
										/>
									</Grid>

									<Grid item xs={12} sm={6}>
										<Typography style={{ fontSize: '11px', color: '#444' }}>From:</Typography>
										<TimeInput
											mode="12h"
											onChange={(time) => {
												setFromVisitTime(formatAMPM(time));
											}}
										/>
									</Grid>

									<Grid item xs={12} sm={6}>
										<Typography style={{ fontSize: '11px', color: '#444' }}>To:</Typography>
										<TimeInput
											mode="12h"
											onChange={(time) => {
												setToVisitTime(formatAMPM(time));
											}}
										/>
									</Grid>
									{/* <Grid item xs={12} sm={6}>
										<TextField
											onChange={handleToVisitTimeChange}
											autoComplete="to"
											name="to"
											variant="outlined"
											required
											fullWidth
											id="to"
											label="To"
											autoFocus
										/>
									</Grid> */}

									<Grid item xs={12}>
										<TextField
											onChange={handleInjuryChange}
											variant="outlined"
											required
											fullWidth
											id="injury"
											label="Injury"
											name="injury"
											autoComplete="injury"
										/>
									</Grid>

									<Grid item xs={12}>
										<TextField
											onChange={handleDoctorChange}
											variant="outlined"
											required
											fullWidth
											id="doctor"
											label="Doctor"
											name="doctor"
											autoComplete="doctor"
										/>
									</Grid>
								</Grid>
								{!appointmentState.sendingAppointmentData ? (
									<Button
										onClick={handleSubmit}
										type="submit"
										fullWidth
										variant="contained"
										color="primary"
										className={classes.submit}
									>
										Add Appointment
									</Button>
								) : (
									<CircularProgress />
								)}
							</form>
						</div>
					</Fade>
				</Modal>
			</main>
		</div>
	);
};

export default withStyles(styles, { withTheme: true })(Appointments);
