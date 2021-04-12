import { Button, Divider, Grid, TextField } from '@material-ui/core';
import { Person, Money, Info, Settings, ExitToApp } from '@material-ui/icons';
import React from 'react';
import AdminStat from './admin_status';
import CustomizedTables from './admin_table_component';
import { useDispatch } from 'react-redux';
import { logOut } from '../actions/auth_actions';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Header from './header';

import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, NavLink } from 'react-router-dom';

const AdminPage = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogout = () => {
		dispatch(logOut());
		history.push('/');
	};

	return (
		<div>
			<Grid container>
				<Grid lg={2} item>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'start',
							flexDirection: 'column',
						}}
					>
						{/* <img style={{ marginTop: '50px', marginBottom: '30px' }} src={logo} alt="logo" />
						<TextField id="outlined-basic" size="small" label="Search" /> */}
						<Divider style={{ marginTop: '20px' }} />
						{/* <Button startIcon={<Person />} color="primary" size="large">
							Customers
						</Button>
						<Button startIcon={<Money />} color="primary" size="large">
							Payments
						</Button>
						<Button startIcon={<Info />} color="primary" size="large">
							Admin Profile
						</Button>
						<Button startIcon={<Settings />} color="primary" size="large">
							Settings
						</Button>
						<Button onClick={handleLogout} startIcon={<ExitToApp />} color="primary" size="large">
							Logout
						</Button> */}

						<List>
							<img style={{ marginTop: '50px', marginBottom: '30px' }} src={logo} alt="logo" />
							<Divider style={{ marginTop: '50px' }} />
							<NavLink to="/admin" style={{ textDecoration: 'none' }}>
								<ListItem button key={Math.random()}>
									<ListItemIcon>
										<Person />
									</ListItemIcon>
									<ListItemText primary="Customers" />
								</ListItem>
							</NavLink>

							<NavLink to="/admin" style={{ textDecoration: 'none' }}>
								<ListItem button key={Math.random()}>
									<ListItemIcon>
										<Money />
									</ListItemIcon>
									<ListItemText primary="Payments" />
								</ListItem>
							</NavLink>

							<NavLink to="/admin" style={{ textDecoration: 'none' }}>
								<ListItem button key={Math.random()}>
									<ListItemIcon>
										<Info />
									</ListItemIcon>
									<ListItemText primary="Admin profile" />
								</ListItem>
							</NavLink>

							{/* <NavLink to="/admin" style={{ textDecoration: 'none' }}>
								<ListItem button key={Math.random()}>
									<ListItemIcon>
										<Person />
									</ListItemIcon>
									<ListItemText primary="Patient" />
								</ListItem>
							</NavLink> */}

							<NavLink to="/admin" style={{ textDecoration: 'none' }}>
								<ListItem button key={Math.random()}>
									<ListItemIcon>
									<Settings />
									</ListItemIcon>
									<ListItemText primary="Setting" />
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
					</div>
				</Grid>

				<Grid lg={10} item>
					<div style={{ position: 'relative', marginTop: '10px', paddingBottom: '50px' }}>
						<Header />
						<AdminStat />
						<CustomizedTables />
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default AdminPage;
