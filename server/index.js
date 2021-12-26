const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3002;

app.use(cors()); // Just use in development environment. 
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Test Server: Server is OK!');
})

app.post('/api/registeruser', (req, res) => {
    console.log(req.body);
    res.json({ status: 'Server is ok.' });
})

app.listen(port, () => {
    console.log(`Server Opening at PORT: ${port}`);
})