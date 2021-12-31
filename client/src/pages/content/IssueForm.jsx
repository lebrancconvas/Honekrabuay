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
			<Box>
				<Typography>
					Please Filled the information here. 
				</Typography>
			</Box>
			<form onSubmit={handleIssue}>
				<Box>
					<TextField type="text" placeholder="Name" onChange={event => setName(event.target.value)} />
				</Box>
				<Box>
					<TextField type="text" placeholder="Address" onChange={event => setAddress(event.target.value)} />
				</Box>
				<Box>
					<TextField type="text" placeholder="Topic" onChange={event => setTopic(event.target.value)} />
				</Box>
				<Box>
					<TextField type="text" placeholder="Content" onChange={event => setContent(event.target.value)} />
				</Box>
				<Box>
					<Button type="submit" variant="contained">
						Submit
					</Button>
				</Box>
			</form>
		</div>
	)
}

export default IssueForm; 