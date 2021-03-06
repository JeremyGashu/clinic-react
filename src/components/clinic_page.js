import React, { useState, useEffect } from 'react';
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
import { NavLink, Link } from 'react-router-dom';
import { Accessible, CalendarToday, Dashboard, ExitToApp, Person } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { getClinicInfoRequest } from '../actions/clinic_info_actions';
import { logOut } from '../actions/auth_actions';
import ClinicDashboard from './clinic_dashboard';
import Header from './header';

const drawerWidth = 280;
const styles = (theme) => ({
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

const ClinicPage = (props) => {
	useEffect(() => {
		dispatch(getClinicInfoRequest());
	}, []);

	const dispatch = useDispatch();
	const clinicState = useSelector((state) => state.clinicState);

	const history = useHistory();

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

	console.log(clinicState);

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
			<main className={classes.content}>
				<Header />
				<ClinicDashboard />
			</main>
		</div>
	);
};

export default withStyles(styles, { withTheme: true })(ClinicPage);
