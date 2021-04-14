import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { sendAuthData } from '../actions/auth_actions';
import { NavLink } from 'react-router-dom';
import doctor from '../assets/images/doctor.jpg';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: doctor,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
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
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignInSide = () => {
	const classes = useStyles();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const dispatch = useDispatch();
	const history = useHistory();
	const authState = useSelector((state) => state.authState);

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		if (username !== '' && password !== '') {
			dispatch(sendAuthData(username, password));
		}
	};

	if (authState.authenticated) {
		try {
			if (authState.authData.info.type === 'ADMIN') {
				history.push('/admin');
			} else if (authState.authData.info.type === 'CLINIC') {
				history.push('/clinic');
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7}>
				<img style={{ width: '100%' }} src={doctor} alt="" />
			</Grid>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							onChange={handleUsernameChange}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoComplete="username"
							autoFocus
						/>
						<TextField
							onChange={handlePasswordChange}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						{authState.authError && (
							<Typography style={{ color: 'red' }} component="p" variant="p">
								Username or password incorrect!
							</Typography>
						)}
						{!authState.sendingAuthData ? (
							<Button
								onClick={handleLoginSubmit}
								onSubmit={handleLoginSubmit}
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Sign In
							</Button>
						) : (
							<CircularProgress />
						)}
						<Grid container>
							{/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
							<Grid item>
								<NavLink to="/signup">{"Don't have an account? Sign Up"}</NavLink>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
};

export default SignInSide;
