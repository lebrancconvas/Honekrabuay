const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const Issue = require('./models/issue.model');
const jwt = require('jsonwebtoken');
const TokenSecurity = require('./security/secret');

const port = process.env.PORT || 3002;

const dbURL = 'mongodb://127.0.0.1:27017/honekrabuay';


const secretToken = TokenSecurity.secret;

app.use(cors()); // Just use in development environment. 
app.use(express.json());

mongoose.connect(dbURL);

app.get('/', (req, res) => {
    res.send('Test Server: Server is OK!');
});

app.post('/api/auth/registeruser', async(req, res) => {
    console.log(req.body);
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        res.json({ status: 'Server is ok.' });

    } catch {
        const checkDuplicateUsername = await User.findOne({ username: req.body.username });
        const checkDuplicateEmail = await User.findOne({ email: req.body.email });
        if (checkDuplicateUsername && !checkDuplicateEmail) {
            res.status(422).json({ status: 'Cannot Register.', error: 'Username is already taken.' });
        } else if (checkDuplicateEmail && !checkDuplicateUsername) {
            res.status(422).json({ status: 'Cannot Register.', error: 'Email is already taken.' });
        } else if (checkDuplicateUsername && checkDuplicateEmail) {
            res.status(422).json({ status: 'Cannot Register.', error: 'Username and Email are already taken.' });
        } else {
            res.status(400).json({ status: 'Server is error.', error: 'Registration is failed.' });
        }
    }
});

app.post('/api/auth/loginuser', async(req, res) => {
    console.log(req.body);
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (user) {
        const token = jwt.sign({
            username: user.username,
            email: user.email
        }, secretToken);
        return res.json({ status: 'Server is ok.', user: token });
    } else {
        return res.json({ status: 'error', user: false });
    }
});

app.post('/api/userissue', async(req, res) => {
    try {
        const issue = await Issue.create({
            name: req.body.name,
            address: req.body.address,
            telephone: req.body.telephone,
            topic: req.body.topic,
            content: req.body.content
        });
        res.json({ status: 'The issue is posting completely.' });
    } catch (err) {
        res.status(400).json({ status: 'Failed to post an issue.', error: err });
    }
})

app.listen(port, () => {
    console.log(`Server Opening at PORT: ${port}`);
});