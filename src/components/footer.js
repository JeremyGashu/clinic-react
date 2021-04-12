import React from 'react';
import { Divider, Typography } from '@material-ui/core';

export default function Footer() {
	return (
		<div style={{height: '50px',position: 'fixed',
		width: '100vw',bottom: '0',zIndex:'100000'}}>
			<Divider />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					backgroundColor: 'white',
					height:'50px'
				}}
			>
				<Typography style={{ color: '#3d5afe', paddingLeft:'15px' }}>ClinicFLOW Technologies Plc</Typography>
				<Typography style={{ color: '#3d5afe' ,paddingRight:'125px'}}>Beta 1.0</Typography>
			</div>
		</div>
	);
}
