import { MONGODB_URL } from "./utils/config.js";

import express from 'express';
import 'express-async-errors';

import cors from 'cors';
import mongoose from "mongoose";

//controllers, middleware imports
import { infoMessage } from "./utils/logger.js";
import { unknownEndpoint } from "./utils/middleware.js";
import { storiesRouter } from "./controllers/stories.js";


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

//app use middleware
app.use('api/stories', storiesRouter);
app.use(unknownEndpoint);
