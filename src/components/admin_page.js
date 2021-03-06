import { Divider, Grid } from '@material-ui/core';
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
				<Grid style={{ borderRight: ' 1px solid #ffebee' }} lg={2} item>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'start',
							flexDirection: 'column',
						}}
					>
						<Divider style={{ marginTop: '20px' }} />

						<List>
							<img width={130} style={{ marginBottom: '20px' }} src={logo} alt="logo" />
							<NavLink to="/admin" style={{ textDecoration: 'none' }}>
								<ListItem button key={Math.random()}>
									<ListItemIcon>
										<Person />
									</ListItemIcon>
									<ListItemText
										disableTypography
										style={{ fontSize: '13px', fontFamily: 'sans-serif' }}
										primary="Customers"
									/>
								</ListItem>
							</NavLink>

							<NavLink to="/admin" style={{ textDecoration: 'none' }}>
								<ListItem button key={Math.random()}>
									<ListItemIcon>
										<Money />
									</ListItemIcon>
									<ListItemText
										disableTypography
										style={{ fontSize: '13px', fontFamily: 'sans-serif' }}
										primary="Payments"
									/>
								</ListItem>
							</NavLink>

							<NavLink to="/admin" style={{ textDecoration: 'none' }}>
								<ListItem button key={Math.random()}>
									<ListItemIcon>
										<Info />
									</ListItemIcon>
									<ListItemText
										disableTypography
										style={{ fontSize: '13px' }}
										primary="Admin profile"
									/>
								</ListItem>
							</NavLink>

							<NavLink to="/admin" style={{ textDecoration: 'none' }}>
								<ListItem button key={Math.random()}>
									<ListItemIcon>
										<Settings />
									</ListItemIcon>
									<ListItemText
										disableTypography
										style={{ fontSize: '13px', fontFamily: 'sans-serif' }}
										primary="Setting"
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
					</div>
				</Grid>

				<Grid lg={10} item>
					<div style={{ position: 'relative', marginTop: '10px', paddingBottom: '65px' }}>
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
