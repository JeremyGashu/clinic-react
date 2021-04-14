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
import { Accessible, Add, CalendarToday, Dashboard, ExitToApp, Person } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { logOut } from '../actions/auth_actions';
import DoctorsTable from './clinic_doctors_table';
import { getClinicInfoRequest } from '../actions/clinic_info_actions';
import Header from './header';
import {
	Avatar,
	Backdrop,
	Button,
	CircularProgress,
	Fab,
	Fade,
	Grid,
	MenuItem,
	Modal,
	Select,
	TextField,
	Typography,
} from '@material-ui/core';
import { sendDoctorData } from '../actions/doctor_action';

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

const Doctors = (props) => {
	const [open, setOpen] = useState(false);
	const doctorState = useSelector((state) => state.doctorState);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const dispatch = useDispatch();
	const clinicState = useSelector((state) => state.clinicState);
	const history = useHistory();
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



	const [name, setName] = useState('Ermias Gashu');
	const [speciality, setSpeciality] = useState('Surgeon');
	const [gender, setGender] = useState('Male');
	const [address, SetAddress] = useState('Addis Ababa, Kality');

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handleSpecialityChange = (e) => {
		setSpeciality(e.target.value);
	};
	const handleGenderChange = (e) => {
		setGender(e.target.value);
	};
	const handleAddressChange = (e) => {
		SetAddress(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await dispatch(sendDoctorData({ name, gender, speciality, address }));
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
						{state ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
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
							<ListItemText disableTypography style={{fontSize : '13px',fontFamily:'sans-serif'}} primary="Dashboard" />
						</ListItem>
					</NavLink>

					<NavLink to="/appointments" style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<CalendarToday />
							</ListItemIcon>
							<ListItemText disableTypography style={{fontSize : '13px',fontFamily:'sans-serif'}} primary="Appointments" />
						</ListItem>
					</NavLink>
					<NavLink to="/patients" style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<Accessible />
							</ListItemIcon>
							<ListItemText disableTypography style={{fontSize : '13px',fontFamily:'sans-serif'}} primary="Patient" />
						</ListItem>
					</NavLink>

					<NavLink to="/doctors" style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<Person />
							</ListItemIcon>
							<ListItemText disableTypography style={{fontSize : '13px',fontFamily:'sans-serif'}} primary="Doctors" />
						</ListItem>
					</NavLink>

					

					<NavLink to="/payments" style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<MailIcon />
							</ListItemIcon>
							<ListItemText disableTypography style={{fontSize : '13px',fontFamily:'sans-serif'}} primary="Payment" />
						</ListItem>
					</NavLink>
					<Link onClick={handleLogout} style={{ textDecoration: 'none' }}>
						<ListItem button key={Math.random()}>
							<ListItemIcon>
								<ExitToApp />
							</ListItemIcon>
							<ListItemText disableTypography style={{fontSize : '13px',fontFamily:'sans-serif'}} primary="Logout" />
						</ListItem>
					</Link>
				</List>
			</Drawer>
			<main style={{paddingBottom : '60px'}} className={classes.content}>
				<Header />
				<Fab
					style={{ backgroundColor: 'blue', position: 'fixed', bottom: '75px', right: '25px' }}
					onClick={handleOpen}
				>
					<Add style={{ color: 'white' }} />
				</Fab>
				<DoctorsTable />
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
								Add Doctor
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
											onChange={handleSpecialityChange}
											variant="outlined"
											required
											fullWidth
											id="speciality"
											label="Speciality"
											name="speciality"
											autoComplete="speciality"
										/>
									</Grid>
									<Grid item xs={12}>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={gender}
											onChange={handleGenderChange}
										>
											<MenuItem value="Male">Male</MenuItem>
											<MenuItem value="Female">Female</MenuItem>
										</Select>
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
								</Grid>
								{!doctorState.sendingDoctorData ? (
									<Button
										onClick={handleSubmit}
										type="submit"
										fullWidth
										variant="contained"
										color="primary"
										className={classes.submit}
									>
										Add Doctor
									</Button>
								) : <CircularProgress /> }


							</form>
						</div>
					</Fade>
				</Modal>
			</main>
		</div>
	);
};

export default withStyles(styles, { withTheme: true })(Doctors);
