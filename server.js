import dotenv from 'dotenv';
dotenv.config();
import express from "express";
// import http, { Server } from "http";
import bodyParser from "body-parser";
import cors from 'cors';
const app = express();
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
// const path = require('path');
// const server = http.createServer(app); 
// const io = new Server(server);
const port = 3000

mongoose.connect('mongodb://localhost:27017/Shoppers');

const Users = mongoose.model('Users', { username: String, password: String });

// const corsOptions = {
//     origin: 'http://localhost:5173',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));

// app.options('*', cors(corsOptions));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());


// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
app.get('/', (req, res) => {
    res.send('hello');
})
app.post('/signup', (req, res) => {
    console.log(req.body);
    // return ;
    const username = req.body.username;
    const password = req.body.password;
    const user = new Users({ username: username, password: password });
    user.save().then(() => {
        res.send({ message: 'saved successfully' })

    }).catch(() => {
        res.send({ message: 'server error' });
    })
})

app.post('/login', (req, res) => {
    console.log(req.body);
    // return ;
    const username = req.body.username;
    const password = req.body.password;
    // const user= new Users({username:username, password:password});

    Users.findOne({ username: username })
        .then((result) => {
            console.log(result, "user data")
            if (!result) {
                res.send({ message: "user not found" })
            }
            else {
                // result.password==password?res.send({ message: 'found successfully' }):res.send({message:'incorrect password'})
                if (result.password == password) {
                    const token = jwt.sign({
                        data: result
                    }, 'KEY', { expiresIn: '1h' });
                    res.send({ message: 'found successfully', token: token });
                }
                if (result.password != password) {
                    res.send({ message: 'incorrect password' })
                }
            }

        }).catch((err) => {
            console.log(err);
            res.send({ message: 'server error' });
        })
})


app.listen(port, () => {
    console.log('listening to the port ${port}');
})

