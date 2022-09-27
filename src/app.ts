import express from 'express';

import bodyparser from 'body-parser';
import { createConnection, DataSource } from 'typeorm';
import { source } from './database-config';
import { User } from './entity/User';

const app = express();

app.use(bodyparser.json());

app.get('/', async (req, res) => {
    return res.send("Node, Express & TS working!");
});

app.get('/users', async (req, res) => {
    const getUsers = await source.getRepository(User).find();
    if (getUsers && getUsers.length > 0) {
        return res.status(200).json({
            users: getUsers
        })
    }
    return res.status(400).json({
        users: null,
        message: 'Users not found.'
    })
})

app.listen(8081, () => {
    console.log('Port Listening!');
});
