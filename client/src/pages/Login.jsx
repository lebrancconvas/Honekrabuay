import React, {useState} from 'react'; 
import {Typography, TextField, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 

const Login = () => {
	const [username, setUsername] = useState(''); 
	const [password, setPassword] = useState(''); 
	const handleSubmit = async (event) => {
		event.preventDefault(); 
		const response = await fetch('http://localhost:3002/api/auth/loginuser', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				username, password 
			})
		})
		const data = await response.json(); 
		if(data.user) {
			alert('Login Success.');
		} else {
			alert('Login Failed, Please Check your username and/or password.'); 
			window.location.reload(); 
		}
	}
	return (
		<div>
			<Box sx={{textAlign: 'center'}} mt={20}> 
				<Typography variant="h3"> 
					ลงชื่อผู้ใช้งาน 
				</Typography> 
			</Box>
			<Box sx={{textAlign: 'center'}}>
				<form onSubmit={handleSubmit}> 
					<Box mt={3}>
						<TextField sx={{width: 500}} type="text" name="Username" placeholder="Username" onChange={e => setUsername(e.target.value)} required/>
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

export default Login; 