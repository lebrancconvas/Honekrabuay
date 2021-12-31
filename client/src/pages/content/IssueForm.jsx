import React, {useState} from 'react';
import {Typography, Button, TextField} from '@mui/material';
import {Box} from '@mui/system';

const IssueForm = () => {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [telephone, setTelephone] = useState("");
	const [topic, setTopic] = useState("");
	const [content, setContent] = useState("");

	const handleIssue = event => {
		event.preventDefault(); 
		const issue = {
			nameIssue: name,
			addressIssue: address,
			telephoneIssue: telephone,
			topicIssue: topic,
			contentIssue: content  
		};
		console.log(issue); 
	};

	return (
		<div>
			<Box sx={{textAlign: 'center'}} mt={12}>
				<Box>
					<Typography variant="h2">
						แจ้งเรื่องร้องเรียนกับทางรายการได้ที่นี่ 
					</Typography>
				</Box>
				<form onSubmit={handleIssue}>
					<Box mt={3}>
						<TextField type="text" placeholder="กรอกชื่อของผู้ร้องเรียนปัญหา" sx={{width: 500}} onChange={event => setName(event.target.value)} required/>
					</Box>
					<Box mt={2}>
						<TextField type="text" placeholder="กรอกที่อยู่ของผู้ร้องเรียน" sx={{width: 500}} onChange={event => setAddress(event.target.value)} required/>
					</Box>
					<Box mt={2}>
						<TextField type="tel" placeholder="กรอกเบอร์โทรศัพท์ของผู้ร้องเรียน" sx={{width: 500}} onChange={event => setTelephone(event.target.value)} required/>
					</Box>
					<Box mt={2}>
						<TextField type="text" placeholder="ระบุหัวข้อเรื่องที่จะร้องเรียน" sx={{width: 500}} onChange={event => setTopic(event.target.value)} required/>
					</Box>
					<Box mt={2}>
						<TextField type="text" placeholder="กรอกรายละเอียดของเรื่องที่จะร้องเรียน" sx={{width: 500}} multiline={true} onChange={event => setContent(event.target.value)} required/>
					</Box>
					<Box mt={2} mb={23}>
						<Button type="submit" variant="contained">
							ยืนยันการร้องเรียน<br />(โปรดตรวจสอบข้อมูลที่กรอกมาว่าถูกต้องทุกประการก่อนการยืนยัน)
						</Button>
					</Box>
				</form>
			</Box>
		</div>
	)
}

export default IssueForm; 