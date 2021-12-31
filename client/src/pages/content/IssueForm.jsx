import React, {useState} from 'react';
import {Typography, Button, TextField} from '@mui/material';
import {Box} from '@mui/system';

const IssueForm = () => {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [topic, setTopic] = useState("");
	const [content, setContent] = useState("");

	const handleIssue = event => {
		event.preventDefault(); 
		const issue = {
			nameIssue: name,
			addressIssue: address,
			topicIssue: topic,
			contentIssue: content  
		};
		console.log(issue); 
	};

	return (
		<div>
			<Box sx={{textAlign: 'center'}} mt={10}>
				<Box>
					<Typography variant="h2">
						Please Filled the information here. 
					</Typography>
				</Box>
				<form onSubmit={handleIssue}>
					<Box mt={3}>
						<TextField type="text" placeholder="Name" sx={{width: 500}} onChange={event => setName(event.target.value)} />
					</Box>
					<Box mt={2}>
						<TextField type="text" placeholder="Address" sx={{width: 500}} onChange={event => setAddress(event.target.value)} />
					</Box>
					<Box mt={2}>
						<TextField type="text" placeholder="Topic" sx={{width: 500}} onChange={event => setTopic(event.target.value)} />
					</Box>
					<Box mt={2}>
						<TextField type="text" placeholder="Content" sx={{width: 500}} onChange={event => setContent(event.target.value)} />
					</Box>
					<Box mt={2} mb={27}>
						<Button type="submit" variant="contained">
							Submit
						</Button>
					</Box>
				</form>
			</Box>
		</div>
	)
}

export default IssueForm; 