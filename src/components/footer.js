import React from 'react';
import { Typography } from '@material-ui/core';

export default function Footer() {
	return (
		<div
			style={{
				position: 'fixed',
				width: '100vw',
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				bottom: '0',
				height: '50px',
                backgroundColor:'whitesmoke',
			}}
		>
			<Typography style={{color:'#444'}}>Clinic-FLO PLC</Typography>
			<Typography style={{color:'#444'}}>Beta 1.0</Typography>
		</div>
	);
}
