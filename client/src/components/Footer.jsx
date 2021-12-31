import React from 'react';
import {Container, Typography, Link} from '@mui/material';
import {Box} from '@mui/system';

const Footer = () => {
	return (
		<div>
			<footer>
				<Box bgcolor="secondary" sx={{textAlign: 'center'}}>
					<Container maxWidth="lg">
						<Typography>
							<h2>
								Made with <Link href="https://www.youtube.com/watch?v=7CqJlxBYj-M" target="_blank">MERN Stack</Link> by <Link href="https://github.com/lebrancconvas" target="_blank">Poom</Link> in 2021. 
							</h2>
						</Typography>
					</Container>
				</Box>
			</footer>
		</div>
	);
};

export default Footer;