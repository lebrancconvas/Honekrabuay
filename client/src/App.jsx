import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import {Typography} from '@mui/material'; 
import {Box} from '@mui/system';
import Landingpage from './pages/Landingpage'; 
import Register from './pages/Register'; 
import Login from './pages/Login'; 


function App() {
  return (
    <div> 
        <Router>
            <Box sx={{textAlign: 'center'}}>
                <Typography> 
                    <Routes>
                        <Route exact path="/" element={<Landingpage />} /> 
                        <Route exact path="/register" element={<Register />} /> 
                        <Route exact path="/login" element={<Login />} />  
                    </Routes>
                </Typography>
            </Box>
        </Router>
    </div>
  );
}

export default App;
