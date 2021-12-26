import React, {useState} from 'react'; 
import {Navigate} from 'react-router-dom'; 
import {Typography, TextField, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 

const Register = () => {
	const [username, setUsername] = useState(''); 
	const [password, setPassword] = useState(''); 
	const [redirect, setRedirect] = useState(false); 
	const [email, setEmail] = useState('');  
	const handleSubmit = async (event) => {
		event.preventDefault(); 
		const response = await fetch('http://localhost:3002/api/registeruser', { 
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				username, email, password 
			})
		})

		const data = await response.json(); 
		if(data.status === 'Server is ok.') { 
			alert("Registration Success.") 
			setRedirect(true); 
		} else if(data.error === 'Username is already taken.') {
			alert("Username is already taken."); 
			window.location.reload(); 
		} else if(data.error === 'Email is already taken.') {
			alert("Email is already taken.");
			window.location.reload();
		} else if(data.error === 'Username and Email are already taken.') {
			alert("Username and Email are already taken."); 
			window.location.reload(); 
		}
	}

	if(redirect) {
		return <Navigate to="/login" /> 
	}
	return (
		<div>
			<Box sx={{textAlign: 'center'}} mt={20}>   
				<Typography variant="h3"> 
					Register 
				</Typography>
			</Box>
			<Box sx={{textAlign: 'center'}}> 
				<form onSubmit={handleSubmit}> 
					<Box mt={3}>
						<TextField sx={{width: 500}} type="text" name="Username" placeholder="Username" onChange={e => setUsername(e.target.value)} required/>
					</Box>
					<Box mt={2}>
						<TextField sx={{width: 500}} type="email" name="E-Mail" placeholder="E-Mail" onChange={e => setEmail(e.target.value)} required/>
					</Box>
					<Box mt={2}> 
						<TextField sx={{width: 500}} type="password" name="Password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/> 
					</Box>
					<Box mt={2}> 
						<Button type="submit" variant="contained">Submit</Button>  
					</Box>
				</form>
			</Box>
		</div>
	)
}

export default Register; 