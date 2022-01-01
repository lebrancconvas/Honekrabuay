import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Typography, Button} from '@mui/material';
import {Box} from '@mui/system';

const Homepage = () => {
	const navigator = useNavigate();
	const toRequest = navigator('/userissue');
	return (
		<div>
			<Box>
				<Typography>
					ยินดีต้อนรับสู่หน้าเว็บไซต์ของโหนกระบวย
				</Typography>
			</Box>
			<Box>
				<Button variant="contained" onClick={toRequest}>
					แจ้งเรื่องร้องเรียน
				</Button>
			</Box>
		</div>
	)
}

export default Homepage; 