import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import allRouter from './src/Router/router.js';
import morgan from 'morgan';
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(morgan('dev'));



const allowedOrigin = 'http://localhost:3000';

app.use(cors({
    origin: allowedOrigin,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Enable credentials
  }));

// Apply JWT authentication middleware to all routes
// app.use(jwtAuth);

app.use('/api', allRouter);

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Welcome to Apala Bazar API - Node", status: true });
});

export default app;
