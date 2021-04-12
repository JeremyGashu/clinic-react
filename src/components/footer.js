import React from 'react';
import { Divider, Typography } from '@material-ui/core';

export default function Footer() {
	return (
		<div style={{height: '50px',position: 'fixed',
		width: '100vw',bottom: '0',zIndex:'100'}}>
			<Divider />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					backgroundColor: 'whitesmoke',
					height:'50px'
				}}
			>
				<Typography style={{ color: '#3d5afe', paddingLeft:'15px' }}>Clinic-FLO PLC</Typography>
				<Typography style={{ color: '#3d5afe' }}>Beta 1.0</Typography>
			</div>
		</div>
	);
}
