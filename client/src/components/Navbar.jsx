import React from 'react'; 
import {useNavigate} from 'react-router-dom'; 
import {Typography, AppBar, Toolbar, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 

const Navbar = () => {
	const navigator = useNavigate(); 
	const onHome = () => navigator('/'); 
	return (
		<div>
			<Box sx={{flexGrow: 1}}> 
				<AppBar> 
					<Toolbar>
						<Typography variant="h6" component="div" sx={{flexGrow: 1}} style={{cursor: 'pointer'}} onClick={onHome}> 
							Honekrabuay
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
}

export default Navbar; 