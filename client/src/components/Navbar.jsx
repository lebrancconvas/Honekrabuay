import React from 'react'; 
import {useNavigate} from 'react-router-dom'; 
import {Typography, AppBar, Toolbar, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 

const Navbar = () => {
	const navigator = useNavigate(); 
	const toHome = () => navigator('/'); 
	const toRegister = () => navigator('/register'); 
	const toLogin = () => navigator('/login');  
	return (
		<div>
			<Box sx={{flexGrow: 1}}> 
				<AppBar>   
					<Toolbar>
						<Typography variant="h6" component="div" sx={{flexGrow: 1}} style={{cursor: 'pointer'}} onClick={toHome}> 
							Honekrabuay
						</Typography>
						<Button color="inherit" onClick={toRegister}>Register</Button> 
						<Button color="inherit" onClick={toLogin}>Login</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
}

export default Navbar; 