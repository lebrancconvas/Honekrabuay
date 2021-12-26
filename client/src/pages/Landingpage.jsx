import React from 'react'; 
import {useNavigate} from 'react-router-dom'; 
import {Typography, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 

const Landingpage = () => {
	const navigator = useNavigate(); 
	const toRegister = () => navigator('/register'); 
	const toLogin = () => navigator('/login');  
	return (
		<div>
			<Box sx={{textAlign: 'center'}} mt={20}> 
				<Typography variant="h3"> 
					Honekrabuay 
				</Typography>
			</Box>
			<Box sx={{textAlign: 'center'}}mt={3}>
				<Typography>
					<Button variant="contained" sx={{mr: 5}} onClick={toRegister}>Get Started</Button>  
					<Button variant="contained" onClick={toLogin}>Login</Button>  
				</Typography>
			</Box>
		</div>
	)
}

export default Landingpage; 