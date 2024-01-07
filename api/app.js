import { MONGODB_URL } from "./utils/config.js";

import express from 'express';
import 'express-async-errors';

import cors from 'cors';
import mongoose from "mongoose";

//controllers, middleware imports
import { infoMessage } from "./utils/logger.js";
import { unknownEndpoint, errorHandler } from "./utils/middleware.js";
import { storiesRouter } from "./controllers/stories.js";
import { usersRouter } from "./controllers/users.js";


export const app = express();

mongoose.set('strictQuery', false);


//connecting to MongoDB
infoMessage('Connecting to MongoDB database');
mongoose.connect(MONGODB_URL)
    .then(result => {
        infoMessage('connected to MongoDB');
    })
    .catch((error) => {
        infoMessage('error connecting to MongoDB:', error.message);
    });


app.use(cors());
app.use(express.static('build'));
app.use(express.json());

//routes
app.use('api/stories', storiesRouter);
app.use('api/users', usersRouter);

//middleware
app.use(unknownEndpoint);
app.use(errorHandler);
