import { MONGODB_URL } from "./utils/config.js";

import express from 'express';
// import 'express-async-errors';

import cors from 'cors';
import mongoose from "mongoose";

//controllers, middleware imports
import { infoMessage } from "./utils/logger.js";
import { unknownEndpoint, errorHandler, requestLogger, tokenExtractor, userExtractor } from "./utils/middleware.js";
import { storiesRouter } from "./controllers/stories.js";
import { usersRouter } from "./controllers/users.js";
import { loginRouter } from "./controllers/login.js";


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

//middleware
app.use(requestLogger);
app.use(tokenExtractor);
app.use(userExtractor);

//routes
app.use('/api/stories', storiesRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

//middleware
app.use(unknownEndpoint);
app.use(errorHandler);
