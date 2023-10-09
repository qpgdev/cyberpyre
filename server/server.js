// server/server.js
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000; // Choose a port for your API

app.use(cors());

// Define your API routes and logic here
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
