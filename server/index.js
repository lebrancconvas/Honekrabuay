const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');

const port = process.env.PORT || 3002;

app.use(cors()); // Just use in development environment. 
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Honekrabuay-Project');

app.get('/', (req, res) => {
    res.send('Test Server: Server is OK!');
})

app.post('/api/registeruser', async(req, res) => {
    console.log(req.body);
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ status: 'Server is ok.' });
    } catch {
        res.json({ status: 'Server is error.', error: 'Registration is failed.' });
    }
})

app.post('/api/loginuser', async(req, res) => {
    console.log(req.body);
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (user) {
        return res.json({ status: 'Server is ok.', user: true });
    } else {
        return res.json({ status: 'error', user: false });
    }
})

app.listen(port, () => {
    console.log(`Server Opening at PORT: ${port}`);
})