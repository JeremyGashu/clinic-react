import { Button, Divider, Grid , TextField} from '@material-ui/core';
import { Person, Money, Info,Settings, ExitToApp } from '@material-ui/icons';
import React from 'react';
import AdminStat from './admin_status';
import CustomizedTables from './table_component';
import { useDispatch } from 'react-redux';
import { logOut } from '../actions/auth_actions';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import Footer from './footer'

const AdminPage = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogout = () => {
		dispatch(logOut());
		history.push('/');
	};

	return (
		<Grid container>
			<Grid lg={2} item>
				<div style={{display:'flex', justifyContent:'center', alignItems : 'start', flexDirection:'column'}}>
					<img style={{marginTop:'50px', marginBottom:'30px'}} src={logo} alt="logo"/>
					<TextField
						
						id="outlined-basic"
						size="small"
						label="Search"
					/>
					<Divider style={{marginTop:'50px'}}/>
					<Button startIcon={<Person />} color='primary' size='large'>Customers</Button>
					<Button startIcon={<Money />} color='primary' size='large'>Payments</Button>
					<Button startIcon={<Info />} color='primary' size='large'>Admin Profile</Button>
					<Button startIcon={<Settings />} color='primary' size='large'>Settings</Button>
					<Button onClick={handleLogout} startIcon={<ExitToApp />} color='primary' size='large'>Logout</Button>

				</div>
			</Grid>

			<Grid lg={10} item>
				<div style={{ position: 'relative', marginTop: '10px' , paddingBottom:'50px'}}>
					{/* <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
						<Button size="large" variant="outlined" color="primary" startIcon={<Settings />}>
							Settings
						</Button>

						<Button
							size="large"
							variant="outlined"
							color="primary"
							onClick={handleLogout}
							startIcon={<ExitToApp />}
						>
							Log out
						</Button>
					</div> */}

					{/* <TextField
						style={{ position: 'fixed', top: '10px', right: '530px' }}
						id="outlined-basic"
						size="small"
						label="Search"
						variant="outlined"
					/> */}
					<AdminStat />
					<CustomizedTables />
					<Footer />
				</div>
			</Grid>
		</Grid>
	);
};

export default AdminPage;
