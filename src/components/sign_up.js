import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { sendSignUpData } from '../actions/signup_actions';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
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
}));

const SignUp = () => {
	const classes = useStyles();

	const history = useHistory()

	const [name, setName] = useState('');
	const [TTN, setTTN] = useState('');
	const [userRegisteredName, setUserRegisteredName] = useState('');
	const [amount, setAmount] = useState(0);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const signUpState = useSelector((state) => state.signUpState);
	const dispatch = useDispatch();

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handleTTNChange = (e) => {
		setTTN(e.target.value);
	};
	const handleUserRegisteredNameChange = (e) => {
		setUserRegisteredName(e.target.value);
	};
	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	};
	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleConfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault()
		if(name !== '' && TTN !== '' && userRegisteredName !== '' && amount !== '' && username !== '' && password !== '' &&confirmPassword ) {
			dispatch(sendSignUpData({ name, TTN, amount, userRegisteredName, username, password, confirmPassword }))
		}
		
	}

	if(signUpState.signUpSuccess) {
		history.push('/')
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form onSubmit={handleSubmit} className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								onChange={handleNameChange}
								variant="outlined"
								required
								fullWidth
								id="name"
								label="Clinic's Name"
								name="name"
								autoComplete="name"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onChange={handleUserRegisteredNameChange}
								variant="outlined"
								required
								fullWidth
								id="username"
								label="User's Name (example Abebe Kebede)"
								name="userRegisteredName"
								autoComplete="username"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								onChange={handleTTNChange}
								autoComplete="ttn"
								name="TTN"
								variant="outlined"
								required
								fullWidth
								id="ttn"
								label="TTN"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								onChange={handleAmountChange}
								variant="outlined"
								required
								fullWidth
								id="amount"
								label="Amount"
								name="amount"
								autoComplete="amount"
								type="number"
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								onChange={handleUsernameChange}
								variant="outlined"
								required
								fullWidth
								id="username"
								label="Username (example user2021)"
								name="username"
								autoComplete="name"
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								onChange={handlePasswordChange}
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onChange={handleConfirmPasswordChange}
								variant="outlined"
								required
								fullWidth
								name="confirmPassword"
								label="Confirm Password"
								type="password"
								id="consfirmPasword"
							/>
						</Grid>
					</Grid>
					{signUpState.signUpError && (
						<Typography style={{ color: 'red' }} component="p" variant="p">
							{signUpState.errorMessage}
						</Typography>
					)}
					{!signUpState.sendingSignUpData && <Button
						onSubmit={handleSubmit}
						onClick={handleSubmit}
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						
						Sign Up
					</Button>}
					<Grid container justify="flex-end">
						<Grid item>
							<NavLink to="/">Already have an account? Sign in</NavLink>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};

export default SignUp;
