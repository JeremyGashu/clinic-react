import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { Link, NavLink } from 'react-router-dom';
import { Accessible, Add, CalendarToday, Dashboard, ExitToApp, Person, TrendingUpRounded } from '@material-ui/icons';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { logOut } from '../actions/auth_actions';
import PatientsTable from './clinic_patients_table';
import { getClinicInfoRequest } from '../actions/clinic_info_actions';
import Header from './header';
import { Avatar, Backdrop, Button, Fab, Fade, Grid, MenuItem, Modal, Select, TextField, Typography } from '@material-ui/core';
import { sendPatientData } from '../actions/patients_actions';

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


const Patients = (props) => {



	const [open, setOpen] = useState(false);

	
	const dispatch = useDispatch();
	const clinicState = useSelector(state => state.clinicState)
	const patientState = useSelector(state => state.patientState)
	const history = useHistory();
useEffect(() => {
		dispatch(getClinicInfoRequest());
	}, []);
	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logOut());
		history.push('/');
	};

	const [name, setName] = useState('Ermias Gashu');
	const [id, setID] = useState('Surgeon');
	const [age, setAge] = useState(20);
	const [address, SetAddress] = useState('Addis Ababa, Kality');
	const [phoneNo, setPhoneNumber] = useState('Addis Ababa, Kality');
	const [status, setStatus] = useState(true);

	const [state, setState] = useState(true);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};


	const handleDrawerOpen = () => {
		setState(true);
	};

	const handleDrawerClose = () => {
		setState(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await dispatch(sendPatientData({ name,id, age,  address,  phoneNo, status }));
		handleClose();
		dispatch(getClinicInfoRequest());
	};
	const { classes, theme } = props;

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handleIDChange = (e) => {
		setID(e.target.value);
	};
	const handleAgeChange = (e) => {
		setAge(e.target.value);
	};
	const handleAddressChange = (e) => {
		SetAddress(e.target.value);
	};

	const handlePhoneNumberChange = (e) => {
		setPhoneNumber(e.target.value);
	};

	const handleStatusChange = (e) => {
		setStatus(e.target.value);
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
						{state ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
					</IconButton>
				</div>
				<Divider />
				<List>
					<img style={{ marginTop: '50px', marginBottom: '30px' }} src={logo} alt="logo" />
					<NavLink to="clinic" style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<Dashboard />
							</ListItemIcon>
							<ListItemText primary="Dashboard" />
						</ListItem>
					</NavLink>

					<NavLink to="appointments" style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<CalendarToday />
							</ListItemIcon>
							<ListItemText primary="Appointments" />
						</ListItem>
					</NavLink>

					<NavLink to="/doctors" style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<Person />
							</ListItemIcon>
							<ListItemText primary="Doctors" />
						</ListItem>
					</NavLink>

					<NavLink to="/patients" style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<Accessible />
							</ListItemIcon>
							<ListItemText primary="Patient" />
						</ListItem>
					</NavLink>

					<NavLink to="/payments" style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<MailIcon />
							</ListItemIcon>
							<ListItemText primary="Payment" />
						</ListItem>
					</NavLink>
					<Link onClick={handleLogout} style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<ExitToApp />
							</ListItemIcon>
							<ListItemText primary="Logout" />
						</ListItem>
					</Link>
				</List>
				<Divider />
			</Drawer>
			<main className={classes.content}>
				<Header />
				<Fab
					style={{ backgroundColor: 'blue', position: 'fixed', bottom: '75px', right: '25px' }}
					onClick={handleOpen}
				>
					<Add style={{ color: 'white' }} />
				</Fab>
				<PatientsTable />

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
								<Person />
							</Avatar>
							<Typography component="h1" variant="h5">
								Add Patient
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
											label="Name"
											name="name"
											autoComplete="name"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											onChange={handleIDChange}
											variant="outlined"
											required
											fullWidth
											id="id"
											label="ID"
											name="id"
											autoComplete="id"
										/>
									</Grid>


									<Grid item xs={12}>
										<TextField
											onChange={handleAgeChange}
											autoComplete="from"
											name="From"
											variant="outlined"
											required
											fullWidth
											id="age"
											label="Age"
											autoFocus
											type='number'
										/>
									</Grid>

									

									<Grid item xs={12}>
										<TextField
											onChange={handleAddressChange}
											autoComplete="from"
											name="From"
											variant="outlined"
											required
											fullWidth
											id="address"
											label="Address"
											autoFocus
										/>
									</Grid>

									<Grid item xs={12}>
										<TextField
											onChange={handlePhoneNumberChange}
											autoComplete="from"
											name="From"
											variant="outlined"
											required
											fullWidth
											id="phone"
											label="Phone Number"
											autoFocus
										/>
									</Grid>
									<Grid item xs={12}>
										<Typography>Status</Typography>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={status}
											onChange={handleStatusChange}
										>
											<MenuItem value={true}>Approved</MenuItem>
											<MenuItem value={false}>Pending</MenuItem>
										</Select>
									</Grid>
								</Grid>
								{!patientState.sendingPatientData && (
									<Button
										onClick={handleSubmit}
										type="submit"
										fullWidth
										variant="contained"
										color="primary"
										className={classes.submit}
									>
										Add Patient
									</Button>
								)}

								{/* {!signUpState.sendingSignUpData && (
			
		)} */}
							</form>
						</div>
					</Fade>
				</Modal>




			</main>
		</div>
	);
};

export default withStyles(styles, { withTheme: true })(Patients);
