import React, { useState } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { Link, NavLink } from 'react-router-dom';
import { Accessible, CalendarToday, Dashboard, ExitToApp, Person } from '@material-ui/icons';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import logo from '../assets/images/logo.png';
import { logOut } from '../actions/auth_actions';
import Footer from './footer';

const drawerWidth = 240;

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

const Appointments = (props) => {

    const dispatch = useDispatch();
	const history = useHistory();

	const handleLogout = (e) => {
        e.preventDefault()
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

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={classNames(classes.appBar, {
					[classes.appBarShift]: state,
				})}
			>
				<Toolbar disableGutters={!state}>
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						onClick={handleDrawerOpen}
						className={classNames(classes.menuButton, {
							[classes.hide]: state,
						})}
					>
						<MenuIcon />
					</IconButton>
					{/* <Avatar className={classes.avatar}>
						<FolderIcon />
					</Avatar>
					<Typography variant="h6" color="inherit" noWrap>
						Mini variant drawer
					</Typography> */}
				</Toolbar>
			</AppBar>
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
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
						</IconButton>
					</div>
					<Divider />
					<List>
                    <img style={{marginTop:'50px', marginBottom:'30px'}} src={logo} alt="logo"/>
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
{/* 
						<Link to="users" style={{ textDecoration: 'none' }}>
							<ListItem button key={Math.random()}>
								<ListItemIcon>
									<GroupAdd />
								</ListItemIcon>
								<ListItemText primary="Department" />
							</ListItem>
						</Link> */}

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

						{/* {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <Link to="users" style={{ textDecoration: "none" }}>
                    <ListItem button key={text}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  </Link>
                )
              )} */}
					</List>
					<Divider />
				</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Typography paragraph>
					Appointments
				</Typography>
				
				
				
                <Footer />
			</main>
		</div>
	);
};

export default withStyles(styles, { withTheme: true })(Appointments);
