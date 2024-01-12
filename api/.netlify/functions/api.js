import { MONGODB_URL } from '../../utils/config';

import express from 'express';
import serverless from 'serverless-http';

import cors from 'cors';
import mongoose from "mongoose";

import { infoMessage } from '../../utils/logger';
import { unknownEndpoint, errorHandler, requestLogger, tokenExtractor, userExtractor } from "../../utils/middleware.js";
import { storiesRouter } from "../../controllers/stories.js";
import { usersRouter } from "../../controllers/users.js";
import { loginRouter } from "../../controllers/login.js";

const app = express();

mongoose.set('strictQuery', false);

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

app.use(requestLogger);
app.use(tokenExtractor);
app.use(userExtractor);

app.use('/api/stories', storiesRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

export const handler = serverless(app);
