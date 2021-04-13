import React from 'react';
import { Divider, Link, Typography } from '@material-ui/core';

export default function Footer() {
	return (
		<div style={{ height: '70px', position: 'fixed', width: '100vw', bottom: '0', zIndex: '100000' }}>
			<Divider />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					backgroundColor: 'white',
					height: '70px',
				}}
			>
				<div>
					<Link href="https://workisp.com" target='_blank'>
						<Typography style={{ color: '#3d5afe', paddingLeft: '15px' }}>
							WorkFLOW Technologies Plc © 2021
						</Typography>
					</Link>

					<Link href="https://workisp.com" target='_blank'>
						<Typography style={{ color: '#3d5afe', paddingLeft: '15px' }}>
							Privacy Terms and Conditions
						</Typography>
					</Link>
				</div>

				<Link href="https://workisp.com" target='_blank'>
					<Typography style={{ color: '#3d5afe', paddingRight: '125px' }}>Beta Version 1.0</Typography>
				</Link>
			</div>
		</div>
	);
}
