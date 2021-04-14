import React from 'react';
import { Divider, Link, Typography } from '@material-ui/core';

export default function Footer() {
	return (
		<div style={{ height: '60px', position: 'fixed', width: '100vw', bottom: '0', zIndex: '100000' }}>
			<Divider />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					backgroundColor: 'white',
					height: '60px',
				}}
			>
				<div>
					<Link href="https://workisp.com" target='_blank'>
						<Typography style={{ color: '#757575', paddingLeft: '15px', fontSize:'11px'}}>
							WorkFLOW Technologies Plc © 2021
						</Typography>
					</Link>

					<Link href="https://workisp.com" target='_blank'>
						<Typography style={{ color: '#757575', paddingLeft: '15px' , fontSize:'11px'}}>
							Privacy Terms and Conditions
						</Typography>
					</Link>
				</div>

				<Link href="https://workisp.com" target='_blank'>
					<Typography style={{ color: '#757575', paddingRight: '125px' , fontSize:'13px'}}>MVP 1.0</Typography>
				</Link>
			</div>
		</div>
	);
}
