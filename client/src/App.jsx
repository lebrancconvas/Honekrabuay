import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import {Typography} from '@mui/material'; 
import {Box} from '@mui/system';
import Landingpage from './pages/Landingpage'; 

function App() {
  return (
    <div> 
        <Router>
            <Box sx={{textAlign: 'center'}}>
                <Typography> 
                    <Routes>
                        <Route exact path="/" element={<Landingpage />} /> 
                    </Routes>
                </Typography>
            </Box>
        </Router>
    </div>
  );
}

export default App;
