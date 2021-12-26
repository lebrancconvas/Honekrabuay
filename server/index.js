const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3002;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Test Server: Server is OK!');
})

app.listen(port, () => {
    console.log(`Server Opening at PORT: ${port}`);
})