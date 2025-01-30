// Write your server code here
// Go to http://localhost:3000 to see your server
// Setup nodemon to restart the server when code changes

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

import userRoute from './routes/user.route';

dotenv.config();

const app = express();

connectDB()

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

