import React from 'react';
import {Container, Link} from '@mui/material';
import {Box} from '@mui/system';

const Footer = () => {
	return (
		<div>
			<footer>
				<Box bgcolor="secondary">
					<Container maxWidth="lg">
						Made with <Link href="https://www.mongodb.com/mern-stack" target="_blank">MERN Stack</Link> by <Link href="https://github.com/lebrancconvas" target="_blank">Poom</Link> in 2021. 
					</Container>
				</Box>
			</footer>
		</div>
	);
};

export default Footer;