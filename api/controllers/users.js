import express from 'express';
import bcryptjs from 'bcryptjs';
export const usersRouter = express.Router();
import User from '../models/user.js';


//add a user
usersRouter.post('/', async (request, response) => {
    const { username, email, password, type } = request.body;

    const saltRounds = 10;
    const passwordHash = await bcryptjs.hash(password, saltRounds);

    const user = new User({
        username,
        email,
        passwordHash,
        type
    });

    if(password.length > 3){
        const savedUser = await user.save();
        response.status(201).json(savedUser);
    }else{
        response.status(400).end();
    }
});
