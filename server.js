const express = require('express');

const database = require('./database');
const server = express();
server.use(express.json());
const port = 8080

server.get('/', (req, res) => {
    res.json({message: 'Welcome to the API'})
})

//get users
server.get('/users', (req, res) => {
    const users = database.getUsers()
    if (users) {
        res.json(users)
    } else {
        res.status(500).json({
            message: 'Unable to get users'
        })
    }
})

//find users by id
server.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = database.getUserById(id)

    if (user) {
        res.json(user)
    } else if (!user) {
        res.status(404).json({
            message: "user not found"
        })
    } else {
        res.status(500).json({
            error: "unable to obtain users"
        })
    }
})

//create user

server.post('/users', (req, res) => {
    if (!req.body.name || !req.body.bio) {
        res.status(400).json({
            message: "Please fill out all fields"
        })
    } else if (req.body.name && req.body.bio) {
        const newUser = database.createUser({
            name: req.body.name,
            bio: req.body.bio
        })
        res.status(201).json(newUser)
    } else {
        res.status(500).json({
            error: "Unable to create new user"
        })
    }
})

// update user
server.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const {name, bio} = req.body;

    //check if user exists, check if fields are filled

    if (!id) {
        return res.status(404).json({
            message: "Unable to find user"
        })
    } else if (!name, !bio) {
        return res.status(400).json({
            message: "Please provide all info"
        })
    }

    // you have to pass in your data
    if (id) {
        const updatedUser = database.updateUser(id, {name, bio})
        return res.status(200).json(updatedUser)
    } else {
        res.status(500).json({
            error: "this user info could not be updated"
        })
    }
})


server.listen(port, () => {
    console.log(`server is listening on ${port}`)
})