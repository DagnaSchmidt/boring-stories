import { infoMessage, errorMessage } from "./logger";
import { SECRET } from "./config";
import jwt from "jsonwebtoken";

export const requestLogger = (request, response, next) => {
    infoM('Method:', request.method)
    infoM('Path:  ', request.path)
    infoM('Body:  ', request.body)
    infoM('---')
    next()
};

export const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
};

//error handler