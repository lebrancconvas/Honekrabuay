import React, {useState} from 'react'; 
import {Typography, TextField, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 

const Login = () => {
	const [username, setUsername] = useState(''); 
	const [password, setPassword] = useState(''); 
	const handleSubmit = async (event) => {
		event.preventDefault(); 
		const response = await fetch('http://localhost:3002/api/loginuser', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				username, password 
			})
		})
		const data = await response.json(); 
		console.log(data); 
	}
	return (
		<div>
			<Box>
				<Typography variant="h3"> 
					Login  
				</Typography>
			</Box>
			<Box>
				<form onSubmit={handleSubmit}> 
					<Box mt={3}>
						<TextField type="text" name="Username" placeholder="Username" onChange={e => setUsername(e.target.value)} required/>
					</Box>
					<Box mt={2}>
						<TextField type="password" name="Password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/> 
					</Box>
					<Box mt={2}> 
						<Button type="submit" variant="contained">Submit</Button>  
					</Box>
				</form>
			</Box>
		</div>
	)
}

export default Login; 