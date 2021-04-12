import React from 'react';
// import TextField from '@material-ui/core/TextField';
import SearchBar from 'material-ui-search-bar';
import { Badge, Divider, IconButton } from '@material-ui/core';
import { NotificationImportant, Person } from '@material-ui/icons';

const Header = () => {
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '5px' }}>
				<SearchBar style={{ marginLeft: '15px', paddingTop:'10px' }} />
				<div style={{ paddingRight: '10px' , paddingTop:'5px'}}>
                    <IconButton>
                    <Badge badgeContent={4} color="secondary">
						<NotificationImportant style={{ color: '#3d5afe', fontSize: '40px' , cursor:'pointer'}} />
					</Badge>
                    </IconButton>
					
					<Badge>
						<IconButton>
                        <Person style={{ color: '#3d5afe', fontSize: '40px' , cursor:'pointer'}} />
                        </IconButton>
					</Badge>
				</div>
			</div>
            <Divider style={{marginBottom:'5px'}}/>
		</div>
	);
};

export default Header;
