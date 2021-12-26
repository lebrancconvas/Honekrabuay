import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import {Typography} from '@mui/material'; 
import {Box} from '@mui/system';
import Homepage from './pages/Homepage'; 

function App() {
  return (
    <div> 
        <Router>
            <Box sx={{textAlign: 'center'}}>
                <Typography> 
                    <Routes>
                        <Route exact path="/" element={<Homepage />} /> 
                    </Routes>
                </Typography>
            </Box>
        </Router>
    </div>
  );
}

export default App;
